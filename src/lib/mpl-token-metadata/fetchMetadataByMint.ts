import useUmiStore from "../../stores/useUmiStore";
import {
  fetchJsonMetadata,
  fetchMetadataFromSeeds,
  Metadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { publicKey } from "@metaplex-foundation/umi";

const fetchMetadataByMint = async (mint: string) => {
  const umi = useUmiStore.getState().umi;
``
  const metadata = await fetchMetadataFromSeeds(umi, { mint: publicKey(mint) });
  let JsonMetadata;
  try {
    JsonMetadata = await fetchJsonMetadata(umi, metadata.uri);
  } catch (error) {
    console.error('Failed to fetch JSON metadata:', error);
    JsonMetadata = {};
  }

  return {
    ...metadata,
    ...JsonMetadata,
  };
};

export default fetchMetadataByMint;
