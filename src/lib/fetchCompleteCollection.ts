
import { getCollection } from "@/stores/useCandibardataStorefromDB";

export const getCompleteCollectionNames = async (collectionPublicKey: string): Promise<string[]> => {
  const collection = await getCollection(collectionPublicKey);
  return collection.images.map(image => `${image.name}`);
};

export const validateCollection = async (collectionPublicKey: string, selectedAssets: any[]): Promise<boolean> => { 
  const collection = await getCollection(collectionPublicKey);
  const completeCollectionNames = collection.images.map(image => `${image.name}`);
  const selectedNames = selectedAssets.map(asset => asset.content.metadata.description);
  const overrideZodiacSwap = Number(process.env.NEXT_PUBLIC_OVERRIDE_ZODIAC_SWAP) || 0;
  // Check if all selected names are in the complete collection names
  const boolresult = completeCollectionNames.every(description => selectedNames.includes(description));

if (Number(overrideZodiacSwap) === 0) {
  return boolresult;
}
  return true;
  
}