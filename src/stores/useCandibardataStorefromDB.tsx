import { CollectionItemDetails } from "../models/types";
import Cache from "../lib/cache";

const cache = new Cache<CollectionItemDetails>(3600000); // Cache stores a single CollectionItemDetails object

async function getCollectionItems(): Promise<CollectionItemDetails[]> {
  const response = await fetch('/api/collection-items');
  const data = await response.json();
  return data as CollectionItemDetails[];
}

export async function getCollection(collectionadress: string): Promise<CollectionItemDetails> {
  const cacheKey = `collection-items-${collectionadress}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log('Cache hit:', cachedData);
    return cachedData;
  }

  const items = await getCollectionItems();
  const collection = items.find(item => item.collectionadress === collectionadress);

  if (collection) {
    cache.set(cacheKey, collection); // Store the found collection item
    console.log('Cache miss:', collection);
  } else {
    console.log('Cache miss, returning first item:', items[0]);
  }

  return collection || items[0]; // Fallback to first item if no match
}


