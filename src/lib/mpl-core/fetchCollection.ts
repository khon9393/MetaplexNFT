import useUmiStore from "../../stores/useUmiStore";
import { fetchCollection as fetchCollectionV1 } from "@metaplex-foundation/mpl-core";

const fetchCollection = async (collectionId: string) => {
  const umi = useUmiStore.getState().umi;

  return await fetchCollectionV1(umi, collectionId);
};

export default fetchCollection;
