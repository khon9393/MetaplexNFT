// utils/localStorage.ts

interface StoredItem<T> {
    value: T;
    expiry?: number; // Optional expiry timestamp
  }
  
  // ✅ Set item with optional expiry (in milliseconds)
  export function setWithExpiry<T>(key: string, value: T, ttl?: number): void {
    const now = new Date().getTime();
    const item: StoredItem<T> = {
      value,
      expiry: ttl ? now + ttl : undefined, // Add expiry if provided
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  
  // ✅ Get item and check for expiry
  export function getWithExpiry<T>(key: string): T | null {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
  
    try {
      const item: StoredItem<T> = JSON.parse(itemStr);
      const now = new Date().getTime();
  
      if (item.expiry && now > item.expiry) {
        localStorage.removeItem(key); // Expired item
        return null;
      }
  
      return item.value;
    } catch (error) {
      console.error('Error parsing localStorage item:', error);
      return null;
    }
  }
  
  // ✅ Remove specific item
  export function removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  
  // ✅ Clear all localStorage
  export function clearStorage(): void {
    localStorage.clear();
  }
  