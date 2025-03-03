type CacheEntry<T> = {
    value: T;
    expiry: number;
  };
  
  class Cache<T> {
    private cache: Map<string, CacheEntry<T>> = new Map();
  
    constructor(private ttl: number) {}
  
    get(key: string): T | null {
      const entry = this.cache.get(key);
      if (!entry) return null;
  
      if (Date.now() > entry.expiry) {
        this.cache.delete(key);
        return null;
      }
  
      return entry.value;
    }
  
    set(key: string, value: T): void {
      const expiry = Date.now() + this.ttl;
      this.cache.set(key, { value, expiry });
    }
  }
  
  export default Cache;