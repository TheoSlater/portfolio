// Lightweight in-memory TTL cache with in-flight dedupe for server runtimes.
type CacheState<T> = {
  expiresAt: number;
  hasValue: boolean;
  promise: Promise<T | null> | null;
  value: T | null;
};

type CacheController<T> = {
  get: () => Promise<T | null>;
  refresh: () => Promise<T | null>;
  invalidate: () => void;
};

export function createTimedCache<T>(
  fetcher: () => Promise<T | null>,
  ttlMs: number,
): CacheController<T> {
  const state: CacheState<T> = {
    expiresAt: 0,
    hasValue: false,
    promise: null,
    value: null,
  };

  const cacheResult = (value: T | null) => {
    state.value = value;
    state.hasValue = true;
    state.expiresAt = Date.now() + ttlMs;
  };

  const startRefresh = () => {
    const promise = (async () => {
      try {
        const data = await fetcher();
        cacheResult(data);
        return data;
      } finally {
        state.promise = null;
      }
    })();

    state.promise = promise;
    return promise;
  };

  const get = async () => {
    const now = Date.now();
    const cacheIsFresh = state.hasValue && state.expiresAt > now;

    if (cacheIsFresh) return state.value;
    if (state.promise) return state.promise;
    return startRefresh();
  };

  const refresh = () => {
    state.hasValue = false;
    state.expiresAt = 0;
    return startRefresh();
  };

  const invalidate = () => {
    state.hasValue = false;
    state.expiresAt = 0;
  };

  return { get, refresh, invalidate };
}
