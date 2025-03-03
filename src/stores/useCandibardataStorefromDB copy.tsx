import { CollectionItemDetails } from "../models/types";

    async function getCollectionItems(): Promise<CollectionItemDetails[]> {
      const response = await fetch('/api/collection-items');
      const data = await response.json();
      const collectionItems: CollectionItemDetails[] = data;
      return collectionItems;
  }
  
  export async function getCollection(collectionadress: string): Promise<CollectionItemDetails> {
      const items = await getCollectionItems();
      const collection = items.find(item => item.collectionadress === collectionadress);
      return collection || items[0];
  }