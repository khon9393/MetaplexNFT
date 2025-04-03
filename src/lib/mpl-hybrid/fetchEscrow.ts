import { getCurrentZodiacSign } from "@/stores/useCandiZodiacSignsStore";
import useUmiStore from "../../stores/useUmiStore";
import { fetchEscrowV1 } from "@metaplex-foundation/mpl-hybrid";
import { publicKey } from "@metaplex-foundation/umi";
import {fetchSwapSelector, SwapArgs} from "./../swapselector";


const fetchEscrow = (SwapArgs?) => {
  const umi = useUmiStore.getState().umi;

  //const escrowAddress = process.env.NEXT_PUBLIC_ESCROW;
  const escrowAddress = fetchSwapSelector(SwapArgs)?.escrowPublickey;

  if (!escrowAddress) {
    throw new Error("Escrow address not set in env");
  }

  const data = fetchEscrowV1(umi, publicKey(escrowAddress));
  return data;
};

export default fetchEscrow;
