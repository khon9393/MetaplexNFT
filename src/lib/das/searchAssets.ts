import useUmiStore from "../../store/useUmiStore";
import {
  DasApiAssetList
} from '@metaplex-foundation/digital-asset-standard-api';

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
  let assets: DasApiAssetList | undefined;

  while (continueFetch) {
    //@ts-ignore
    const response: DasApiAssetList = await umi.rpc.searchAssets({
      owner: ownerpk,
      grouping: ["collection", searchAssetArgs.collection],
      burnt: searchAssetArgs.burnt,
      page,
    });

    console.log(`Page: ${page}, Total assets: `, response.total);
    if (response.total < 1000) {
      console.log("Total assets less than 1000 on current page, stopping loop");
      continueFetch = false;
    }

    if (!assets) {
      assets = response;
      continueFetch = false;
    } else {
      response.total = response.total + assets.total;
      response.items = assets.items.concat(response.items);
    }
    page++;
  }
  return assets;
};

export default searchAssets;
