import useUmiStore from "../../stores/useUmiStore";
import { publicKey } from '@metaplex-foundation/umi';

interface SearchAssetArgs {
  owner: string;
  collection: string;
  burnt: boolean;
}

const searchAssets = async (searchAssetArgs: SearchAssetArgs) => {
  const umi = useUmiStore.getState().umi;

  const collectionId = process.env.NEXT_PUBLIC_COLLECTION;

  if (!collectionId) {
    throw new Error("Collection not found");
  }

  let page = 1;
  let continueFetch = true;
  let ownerpk = publicKey(searchAssetArgs.owner);
  let assets: any | undefined;

  while (continueFetch) {
    const response = await fetch('https://solemn-skilled-bird.solana-devnet.quiknode.pro/9b1c696d40e39deec224a3d6f9cd956d58eda1dd/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'searchAssets',
        params: {
          grouping: ['collection', collectionId],
          limit: 1000,
          burnt: searchAssetArgs.burnt,
          ownerAddress: searchAssetArgs.owner
        }
      })
    });

    const data = await response.json();
    const result = data.result;

    console.log(`Page: ${page}, Total assets: `, result.total);
    if (result.total < 1000) {
      console.log("Total assets less than 1000 on current page, stopping loop");
      continueFetch = false;
    }
    else 
    {
      await new Promise(resolve => setTimeout(resolve, 2500)); // Pause for 2.5 seconds
    }

    if (!assets) {
      assets = result;
      continueFetch = false;
    } else {
      result.total = result.total + assets.total;
      result.items = assets.items.concat(result.items);
    }

    page++;

  }
  return assets;
};

export default searchAssets;