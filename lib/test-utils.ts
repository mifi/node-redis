import assert from 'assert/strict';
import RedisClient, { RedisClientOptions, RedisClientType } from './client';
import { RedisModules } from './commands';
import { RedisLuaScripts } from './lua-script';
import { spawn } from 'child_process';
import { once } from 'events';
import tcpPortUsed from 'tcp-port-used';
import { RedisSocketOptions } from './socket';
import which from 'which';
import { SinonSpy } from 'sinon';
import { setTimeout } from 'timers/promises';
import RedisCluster, { RedisClusterType } from './cluster';
import { unlink } from 'fs/promises';

export enum TestRedisServers {
    OPEN,
    PASSWORD
}

export const TEST_REDIS_SERVERS: Record<TestRedisServers, RedisSocketOptions> = <any>{};

export enum TestRedisClusters {
    OPEN
}

export const TEST_REDIS_CLUSTERES: Record<TestRedisClusters, Array<RedisSocketOptions>> = <any>{};

before(function () {
    this.timeout(10000);
    
    return Promise.all([
        spawnOpenServer(),
        spawnPasswordServer(),
        spawnOpenCluster()
    ]);
});

async function spawnOpenServer(): Promise<void> {
    TEST_REDIS_SERVERS[TestRedisServers.OPEN] = {
        port: await spawnRedisServer()
    };
}

async function spawnPasswordServer(): Promise<void> {
    TEST_REDIS_SERVERS[TestRedisServers.PASSWORD] = {
        port: await spawnRedisServer(['--requirepass', 'password']),
        username: 'default',
        password: 'password'
    };
}

async function spawnOpenCluster(): Promise<void> {
    TEST_REDIS_CLUSTERES[TestRedisClusters.OPEN] = [{
        port: (await spawnRedisCluster(TestRedisClusters.OPEN, 3))[0]
    }];
}

export function itWithClient(type: TestRedisServers, title: string, fn: (client: RedisClientType<RedisModules, RedisLuaScripts>) => Promise<void>): void {
    it(title, async () => {
        const client = RedisClient.create({
            socket: TEST_REDIS_SERVERS[type]
        });
        
        await client.connect();

        try {
            await client.flushAll();
            await fn(client);
        } finally {
            await client.flushAll();
            await client.disconnect();
        }
    });
}

export function itWithCluster(type: TestRedisClusters, title: string, fn: (cluster: RedisClusterType<RedisModules, RedisLuaScripts>) => Promise<void>): void {
    it(title, async () => {
        const cluster = RedisCluster.create({
            rootNodes: TEST_REDIS_CLUSTERES[type]
        });
        
        await cluster.connect();

        try {
            // TODO: `FLUSHALL`
            await fn(cluster);
        } finally {
            // TODO: `FLUSHALL`
            await cluster.disconnect();
        }
    });
}

const REDIS_PATH = which.sync('redis-server');

let port = 6379;

async function spawnRedisServer(args?: Array<string>): Promise<number> {
    const currentPort = port++,
        process = spawn(REDIS_PATH, [
            '--save',
            '',
            '--port',
            currentPort.toString(),
            ...(args ?? [])
        ]);

    // TODO: catch process exit

    await tcpPortUsed.waitForStatus(currentPort, '127.0.0.1', true, 10, 10000);

    after(() => {
        assert.ok(process.kill());
        return once(process, 'close');
    });

    return currentPort;
}

const SLOTS = 16384,
    CLUSTER_NODE_TIMEOUT = 2000;

async function spawnRedisCluster(type: TestRedisClusters, numberOfNodes: number, args?: Array<string>): Promise<Array<number>> {
    const spawnPromises = [];

    for (let i = 0; i < numberOfNodes; i++) {
        const clusterConfigFile = `/tmp/${type}-${i}.conf`;

        spawnPromises.push(
            spawnRedisServer([
                '--cluster-enabled',
                'yes',
                '--cluster-node-timeout',
                CLUSTER_NODE_TIMEOUT.toString(),
                '--cluster-config-file',
                clusterConfigFile,
                ...(args ?? [])
            ])
        );

        after(async () => {
            try {
                await unlink(clusterConfigFile);
            } catch (err) {
                if (err.code == 'ENOENT') return;

                throw err;
            }
        })
    }

    const ports = await Promise.all(spawnPromises),
        slotsPerNode = Math.floor(SLOTS / numberOfNodes),
        initiateNodesPromises = [];

    for (let i = 0; i < numberOfNodes - 1; i++) {
        const from = i * slotsPerNode;
        initiateNodesPromises.push(
            initiateNode({
                socket: {
                    port: ports[i]
                }
            }, from, from + slotsPerNode, ports[i + 1])
        );
    }

    initiateNodesPromises.push(
        initiateNode({
            socket: {
                port: ports[ports.length - 1],
            }
        }, (numberOfNodes - 1) * slotsPerNode, SLOTS)
    );

    await Promise.all(initiateNodesPromises);

    return ports;
}

async function initiateNode(options: RedisClientOptions, from: number, to: number, meetPort?: number): Promise<void> {
    const client = RedisClient.create(options);

    await client.connect();

    try {
        const range = [];
        for (let i = from; i < to; i++) {
            range.push(i);
        }
        await client.clusterAddSlots(range);

        if (meetPort) {
            await client.clusterMeet('127.0.0.1', meetPort);
        }

        while ((await client.clusterInfo()).state !== 'ok') {
            await setTimeout(CLUSTER_NODE_TIMEOUT);
        }
    } finally {
        await client.disconnect();
    }
}

export async function waitTillBeenCalled(spy: SinonSpy): Promise<void> {
    const start = process.hrtime.bigint(),
        calls = spy.callCount;

    do {
        if (process.hrtime.bigint() - start > 1_000_000_000) {
            throw new Error('Waiting for more than 1 second');
        }

        await setTimeout(1);
    } while (spy.callCount === calls)
}