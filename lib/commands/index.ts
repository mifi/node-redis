import * as APPEND from './APPEND';
import * as AUTH from './AUTH';
import * as BITCOUNT from './BITCOUNT';
import * as BITFIELD from './BITFIELD';
import * as BLMOVE from './BLMOVE';
import * as BLPOP from './BLPOP';
import * as BRPOP from './BRPOP';
import * as BRPOPLPUSH from './BRPOPLPUSH';
import * as BZPOPMAX from './BZPOPMAX';
import * as BZPOPMIN from './BZPOPMIN';
import * as CLIENT_INFO from './CLIENT_INFO';
import * as CLUSTER_ADDSLOTS from './CLUSTER_ADDSLOTS';
import * as CLUSTER_FLUSHSLOTS from './CLUSTER_FLUSHSLOTS';
import * as CLUSTER_INFO from './CLUSTER_INFO';
import * as CLUSTER_NODES from './CLUSTER_NODES';
import * as CLUSTER_MEET from './CLUSTER_MEET';
import * as CLUSTER_RESET from './CLUSTER_RESET';
import * as COPY from './COPY';
import * as DECR from './DECR';
import * as DECRBY from './DECRBY';
import * as DEL from './DEL';
import * as DUMP from './DUMP';
import * as EXISTS from './EXISTS';
import * as EXPIRE from './EXPIRE';
import * as EXPIREAT from './EXPIREAT';
import * as FLUSHALL from './FLUSHALL';
import * as GET from './GET';
import * as HDEL from './HDEL';
import * as HEXISTS from './HEXISTS';
import * as HGET from './HGET';
import * as HGETALL from './HGETALL';
import * as HINCRBY from './HINCRBY';
import * as HINCRBYFLOAT from './HINCRBYFLOAT';
import * as HKEYS from './HKEYS';
import * as HLEN from './HLEN';
import * as HMGET from './HMGET';
import * as HRANDFIELD_COUNT_WITHVALUES from './HRANDFIELD_COUNT_WITHVALUES';
import * as HRANDFIELD_COUNT from './HRANDFIELD_COUNT';
import * as HRANDFIELD from './HRANDFIELD';
import * as HSET from './HSET';
import * as HSETNX from './HSETNX';
import * as HSTRLEN from './HSTRLEN';
import * as HVALS from './HVALS';
import * as INCR from './INCR';
import * as INCRBY from './INCRBY';
import * as INCRBYFLOAT from './INCRBYFLOAT';
import * as KEYS from './KEYS';
import * as LINDEX from './LINDEX';
import * as LINSERT from './LINSERT';
import * as LLEN from './LLEN';
import * as LMOVE from './LMOVE';
import * as LPOP from './LPOP';
import * as LPOP_COUNT from './LPOP_COUNT';
import * as LPUSH from './LPUSH';
import * as LPUSHX from './LPUSHX';
import * as LRANGE from './LRANGE';
import * as LREM from './LREM';
import * as LSET from './LSET';
import * as LTRIM from './LTRIM';
import * as MOVE from './MOVE';
import * as PERSIST from './PERSIST';
import * as PEXPIRE from './PEXPIRE';
import * as PEXPIREAT from './PEXPIREAT';
import * as PFADD from './PFADD';
import * as PFCOUNT from './PFCOUNT';
import * as PFMERGE from './PFMERGE';
import * as PING from './PING';
import * as PTTL from './PTTL';
import * as PUBLISH from './PUBLISH';
import * as RANDOMKEY from './RANDOMKEY';
import * as READONLY from './READONLY';
import * as RENAME from './RENAME';
import * as RENAMENX from './RENAMENX';
import * as RPOP_COUNT from './RPOP_COUNT';
import * as RPOP from './RPOP';
import * as RPOPLPUSH from './RPOPLPUSH';
import * as RPUSH from './RPUSH';
import * as RPUSHX from './RPUSHX'; 
import * as SADD from './SADD';
import * as SCAN from './SCAN';
import * as SCARD from './SCARD';
import * as SDIFF from './SDIFF';
import * as SDIFFSTORE from './SDIFFSTORE';
import * as SET from './SET';
import * as SINTER from './SINTER';
import * as SINTERSTORE from './SINTERSTORE';
import * as SISMEMBER from './SISMEMBER';
import * as SMEMBERS from './SMEMBERS';
import * as SMISMEMBER from './SMISMEMBER';
import * as SMOVE from './SMOVE';
import * as SORT from './SORT';
import * as SPOP from './SPOP';
import * as SRANDMEMBER_COUNT from './SRANDMEMBER_COUNT';
import * as SRANDMEMBER from './SRANDMEMBER';
import * as SREM from './SREM';
import * as SSCAN from './SSCAN';
import * as SUNION from './SUNION';
import * as SUNIONSTORE from './SUNIONSTORE';
import * as TOUCH from './TOUCH';
import * as TTL from './TTL';
import * as TYPE from './TYPE';
import * as UNLINK from './UNLINK';
import * as WAIT from './WAIT';
import * as XACK from './XACK';
import * as XADD from './XADD';
import * as XAUTOCLAIM_JUSTID from './XAUTOCLAIM_JUSTID';
import * as XAUTOCLAIM from './XAUTOCLAIM';
import * as XCLAIM from './XCLAIM';
import * as XCLAIM_JUSTID from './XCLAIM_JUSTID';
import * as XDEL from './XDEL';
import * as XGROUP_CREATE from './XGROUP_CREATE';
import * as XGROUP_CREATECONSUMER from './XGROUP_CREATECONSUMER';
import * as XGROUP_DELCONSUMER from './XGROUP_DELCONSUMER';
import * as XGROUP_DESTROY from './XGROUP_DESTROY';
import * as XGROUP_SETID from './XGROUP_SETID';
import * as XINFO_CONSUMERS from './XINFO_CONSUMERS';
import * as XINFO_GROUPS from './XINFO_GROUPS';
import * as XINFO_STREAM from './XINFO_STREAM';
import * as XLEN from './XLEN';
import * as XPENDING_RANGE from './XPENDING_RANGE';
import * as XPENDING from './XPENDING';
import * as XRANGE from './XRANGE';
import * as XREVRANGE from './XREVRANGE';
import * as XTRIM from './XTRIM';
import * as ZADD from './ZADD';
import * as ZCARD from './ZCARD';
import * as ZCOUNT from './ZCOUNT';
import * as ZDIFF_WITHSCORES from './ZDIFF_WITHSCORES';
import * as ZDIFF from './ZDIFF';
import * as ZDIFFSTORE from './ZDIFFSTORE';
import * as ZINCRBY from './ZINCRBY';
import * as ZINTER_WITHSCORES from './ZINTER_WITHSCORES';
import * as ZINTER from './ZINTER';
import * as ZINTERSTORE from './ZINTERSTORE';
import * as ZLEXCOUNT from './ZLEXCOUNT';
import * as ZMSCORE from './ZMSCORE';
import * as ZPOPMAX_COUNT from './ZPOPMAX_COUNT';
import * as ZPOPMAX from './ZPOPMAX';
import * as ZPOPMIN_COUNT from './ZPOPMIN_COUNT';
import * as ZPOPMIN from './ZPOPMIN';
import * as ZRANDMEMBER_COUNT_WITHSCORES from './ZRANDMEMBER_COUNT_WITHSCORES';
import * as ZRANDMEMBER_COUNT from './ZRANDMEMBER_COUNT';
import * as ZRANDMEMBER from './ZRANDMEMBER';
import * as ZRANGE_WITHSCORES from './ZRANGE_WITHSCORES';
import * as ZRANGE from './ZRANGE';
import * as ZRANGESTORE from './ZRANGESTORE';
import * as ZRANK from './ZRANK';
import * as ZREM from './ZREM';
import * as ZREMRANGEBYLEX from './ZREMRANGEBYLEX';
import * as ZREMRANGEBYRANK from './ZREMRANGEBYRANK';
import * as ZREMRANGEBYSCORE from './ZREMRANGEBYSCORE';
import * as ZREVRANK from './ZREVRANK';
import * as ZSCAN from './ZSCAN';
import * as ZSCORE from './ZSCORE';
import * as ZUNION_WITHSCORES from './ZUNION_WITHSCORES';
import * as ZUNION from './ZUNION';
import * as ZUNIONSTORE from './ZUNIONSTORE';

export default {
    APPEND,
    append: APPEND,
    AUTH,
    auth: AUTH,
    BITCOUNT,
    bitCount: BITCOUNT,
    BITFIELD,
    bitField: BITFIELD,
    BLMOVE,
    blMove: BLMOVE,
    BLPOP,
    blPop: BLPOP,
    BRPOP,
    brPop: BRPOP,
    BRPOPLPUSH,
    brPopLPush: BRPOPLPUSH,
    BZPOPMAX,
    bzPopMax: BZPOPMAX,
    BZPOPMIN,
    bzPopMin: BZPOPMIN,
    CLIENT_INFO,
    clientInfo: CLIENT_INFO,
    CLUSTER_ADDSLOTS,
    clusterAddSlots: CLUSTER_ADDSLOTS,
    CLUSTER_FLUSHSLOTS,
    clusterFlushSlots: CLUSTER_FLUSHSLOTS,
    CLUSTER_INFO,
    clusterInfo: CLUSTER_INFO,
    CLUSTER_NODES,
    clusterNodes: CLUSTER_NODES,
    CLUSTER_MEET,
    clusterMeet: CLUSTER_MEET,
    CLUSTER_RESET,
    clusterReset: CLUSTER_RESET,
    COPY,
    copy: COPY,
    DECR,
    decr: DECR,
    DECRBY,
    decrBy: DECRBY,
    DEL,
    del: DEL,
    DUMP,
    dump: DUMP,
    EXISTS,
    exists: EXISTS,
    EXPIRE,
    expire: EXPIRE,
    EXPIREAT,
    expireAt: EXPIREAT,
    FLUSHALL,
    flushAll: FLUSHALL,
    GET,
    get: GET,
    HDEL,
    hDel: HDEL,
    HEXISTS,
    hExists: HEXISTS,
    HGET,
    hGet: HGET,
    HGETALL,
    hGetAll: HGETALL,
    HINCRBY,
    hIncrBy: HINCRBY,
    HINCRBYFLOAT,
    hIncrByFloat: HINCRBYFLOAT,
    HKEYS,
    hKeys: HKEYS,
    HLEN,
    hLen: HLEN,
    HMGET,
    hmGet: HMGET,
    HRANDFIELD_COUNT_WITHVALUES,
    hRandFieldCountWithValues: HRANDFIELD_COUNT_WITHVALUES,
    HRANDFIELD_COUNT,
    hRandFieldCount: HRANDFIELD_COUNT,
    HRANDFIELD,
    hRandField: HRANDFIELD,
    HSET,
    hSet: HSET,
    HSETNX,
    hSetNX: HSETNX,
    HSTRLEN,
    hStrLen: HSTRLEN,
    HVALS,
    hVals: HVALS,
    INCR,
    incr: INCR,
    INCRBY,
    incrBy: INCRBY,
    INCRBYFLOAT,
    incrByFloat: INCRBYFLOAT,
    KEYS,
    keys: KEYS,
    LINDEX,
    lIndex: LINDEX,
    LINSERT,
    lInsert: LINSERT,
    LLEN,
    lLen: LLEN,
    LMOVE,
    lMove: LMOVE,
    LPOP_COUNT,
    lPopCount: LPOP_COUNT,
    LPOP,
    lPop: LPOP,
    LPUSH,
    lPush: LPUSH,
    LPUSHX,
    lPushX: LPUSHX,
    LRANGE,
    lRange: LRANGE,
    LREM,
    lRem: LREM,
    LSET,
    lSet: LSET,
    LTRIM,
    lTrim: LTRIM,
    MOVE,
    move: MOVE,
    PERSIST,
    persist: PERSIST,
    PEXPIRE,
    pExpire: PEXPIRE,
    PEXPIREAT,
    pExpireAt: PEXPIREAT,
    PFADD,
    pfAdd: PFADD,
    PFCOUNT,
    pfCount: PFCOUNT,
    PFMERGE,
    pfMerge: PFMERGE,
    PING,
    ping: PING,
    PTTL,
    pTTL: PTTL,
    PUBLISH,
    publish: PUBLISH,
    RANDOMKEY,
    randomKey: RANDOMKEY,
    READONLY,
    readonly: READONLY,
    RENAME,
    rename: RENAME,
    RENAMENX,
    renameNX: RENAMENX,
    RPOP_COUNT,
    rPopCount: RPOP_COUNT,
    RPOP,
    rPop: RPOP,
    RPOPLPUSH,
    rPopLPush: RPOPLPUSH,
    RPUSH,
    rPush: RPUSH,
    RPUSHX,
    rPushX: RPUSHX,
    SADD,
    sAdd: SADD,
    SCAN,
    scan: SCAN,
    SCARD,
    sCard: SCARD,
    SDIFF,
    sDiff: SDIFF,
    SDIFFSTORE,
    sDiffStore: SDIFFSTORE,
    SINTER,
    sInter: SINTER,
    SINTERSTORE,
    sInterStore: SINTERSTORE,
    SET,
    set: SET,
    SISMEMBER,
    sIsMember: SISMEMBER,
    SMEMBERS,
    sMembers: SMEMBERS,
    SMISMEMBER,
    smIsMember: SMISMEMBER,
    SMOVE,
    sMove: SMOVE,
    SORT,
    sort: SORT,
    SPOP,
    sPop: SPOP,
    SRANDMEMBER_COUNT,
    sRandMemberCount: SRANDMEMBER_COUNT,
    SRANDMEMBER,
    sRandMember: SRANDMEMBER,
    SREM,
    sRem: SREM,
    SSCAN,
    sScan: SSCAN,
    SUNION,
    sUnion: SUNION,
    SUNIONSTORE,
    sUnionStore: SUNIONSTORE,
    TOUCH,
    touch: TOUCH,
    TTL,
    ttl: TTL,
    TYPE,
    type: TYPE,
    UNLINK,
    unlink: UNLINK,
    WAIT,
    wait: WAIT,
    XACK,
    xAck: XACK,
    XADD,
    xAdd: XADD,
    XAUTOCLAIM_JUSTID,
    xAutoClaimJustId: XAUTOCLAIM_JUSTID,
    XAUTOCLAIM,
    xAutoClaim: XAUTOCLAIM,
    XCLAIM,
    xClaim: XCLAIM,
    XCLAIM_JUSTID,
    xClaimJustId: XCLAIM_JUSTID,
    XDEL,
    xDel: XDEL,
    XGROUP_CREATE,
    xGroupCreate: XGROUP_CREATE,
    XGROUP_CREATECONSUMER,
    xGroupCreateConsumer: XGROUP_CREATECONSUMER,
    XGROUP_DELCONSUMER,
    xGroupDelConsumer: XGROUP_DELCONSUMER,
    XGROUP_DESTROY,
    xGroupDestroy: XGROUP_DESTROY,
    XGROUP_SETID,
    xGroupSetId: XGROUP_SETID,
    XINFO_CONSUMERS,
    xInfoConsumers: XINFO_CONSUMERS,
    XINFO_GROUPS,
    xInfoGroups: XINFO_GROUPS,
    XINFO_STREAM,
    xInfoStream: XINFO_STREAM,
    XLEN,
    xLen: XLEN,
    XPENDING_RANGE,
    xPendingRange: XPENDING_RANGE,
    XPENDING,
    xPending: XPENDING,
    XRANGE,
    xRange: XRANGE,
    XREVRANGE,
    xRevRange: XREVRANGE,
    XTRIM,
    xTrim: XTRIM,
    ZADD,
    zAdd: ZADD,
    ZCARD,
    zCard: ZCARD,
    ZCOUNT,
    zCount: ZCOUNT,
    ZDIFF_WITHSCORES,
    zDiffWithScores: ZDIFF_WITHSCORES,    
    ZDIFF,
    zDiff: ZDIFF,
    ZDIFFSTORE,
    zDiffStore: ZDIFFSTORE,
    ZINCRBY,
    zIncrBy: ZINCRBY,
    ZINTER_WITHSCORES,
    zInterWithScores: ZINTER_WITHSCORES,
    ZINTER,
    zInter: ZINTER,
    ZINTERSTORE,
    zInterStore: ZINTERSTORE,
    ZLEXCOUNT,
    zLexCount: ZLEXCOUNT,
    ZMSCORE,
    zmScore: ZMSCORE,
    ZPOPMAX_COUNT,
    zPopMaxCount: ZPOPMAX_COUNT,
    ZPOPMAX,
    zPopMax: ZPOPMAX,
    ZPOPMIN_COUNT,
    zPopMinCount: ZPOPMIN_COUNT,
    ZPOPMIN,
    zPopMin: ZPOPMIN,
    ZRANDMEMBER_COUNT_WITHSCORES,
    zRandMemberCountWithScores: ZRANDMEMBER_COUNT_WITHSCORES,
    ZRANDMEMBER_COUNT,
    zRandMemberCount: ZRANDMEMBER_COUNT,
    ZRANDMEMBER,
    zRandMember: ZRANDMEMBER,
    ZRANGE_WITHSCORES,
    zRangeWithScores: ZRANGE_WITHSCORES,
    ZRANGE,
    zRange: ZRANGE,
    ZRANGESTORE,
    zRangeStore: ZRANGESTORE,
    ZRANK,
    zRank: ZRANK,
    ZREM,
    zRem: ZREM,
    ZREMRANGEBYLEX,
    zRemRangeByLex: ZREMRANGEBYLEX,
    ZREMRANGEBYRANK,
    zRemRangeByRank: ZREMRANGEBYRANK,
    ZREMRANGEBYSCORE,
    zRemRangeByScore: ZREMRANGEBYSCORE,
    ZREVRANK,
    zRevRank: ZREVRANK,
    ZSCAN,
    zScan: ZSCAN,
    ZSCORE,
    zScore: ZSCORE,
    ZUNION_WITHSCORES,
    zUnionWithScores: ZUNION_WITHSCORES,
    ZUNION,
    zUnion: ZUNION,
    ZUNIONSTORE,
    zUnionStore: ZUNIONSTORE
};

export type RedisReply = string | number | Array<RedisReply> | null | undefined;

export interface RedisCommand {
    FIRST_KEY_INDEX?: number;
    IS_READ_ONLY?: boolean;
    transformArguments(...args: Array<any>): Array<string>;
    transformReply(reply: RedisReply): any;
}

export interface RedisCommands {
    [command: string]: RedisCommand;
}

export interface RedisModule {
    [key: string]: RedisCommand;
}

export type RedisModules = Array<RedisModule>;