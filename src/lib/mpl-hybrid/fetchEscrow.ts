import useUmiStore from "../../stores/useUmiStore";
import { fetchEscrowV1 } from "@metaplex-foundation/mpl-hybrid";
import { publicKey } from "@metaplex-foundation/umi";

const fetchEscrow = () => {
  const umi = useUmiStore.getState().umi;

  const escrowAddress = process.env.NEXT_PUBLIC_ESCROW;

  if (!escrowAddress) {
    throw new Error("Escrow address not set in env");
  }

  const data = fetchEscrowV1(umi, publicKey(escrowAddress));
  return data;
};

export default fetchEscrow;
