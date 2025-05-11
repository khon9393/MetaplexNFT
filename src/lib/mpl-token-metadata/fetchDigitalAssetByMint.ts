import { fetchDigitalAsset, mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'
import useUmiStore from "../../stores/useUmiStore";
import { publicKey } from "@metaplex-foundation/umi";

const fetchDigitalAssetByMint = async (mint: string) => {
  const umi = useUmiStore.getState().umi;

const asset = await fetchDigitalAsset(umi, publicKey(mint))

return asset

};

export default fetchDigitalAssetByMint;
