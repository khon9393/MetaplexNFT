import { CollectionItemDetails } from "../models/types";
import Cache from "../lib/cache";

const cache = new Cache<CollectionItemDetails[]>(3600000); // Cache TTL set to 1 hour (3600000 milliseconds)

async function getCollectionItems(): Promise<CollectionItemDetails[]> {
  const cacheKey = "collection-items";
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const response = await fetch('/api/collection-items');
  const data = await response.json();
  const collectionItems: CollectionItemDetails[] = data;

  cache.set(cacheKey, collectionItems);

  return collectionItems;
}

export async function getCollection(collectionadress: string): Promise<CollectionItemDetails> {
  const items = await getCollectionItems();
  const collection = items.find(item => item.collectionadress === collectionadress);
  return collection || items[0];
}