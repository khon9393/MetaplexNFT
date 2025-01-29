import { updateEscrowV1 } from "@metaplex-foundation/mpl-hybrid";
import { publicKey } from "@metaplex-foundation/umi";
import sendAndConfirmWalletAdapter from "../umi/sendAndConfirmWithWalletAdapter";
import umiWithCurrentWalletAdapter from "../umi/umiWithCurrentWalletAdapter";
import useEscrowStore from "../../store/useEscrowStore";

export interface updateFormArgs {
  name: string;
  collection: string;
  token: string;
  feeLocation: string;
  uri: string;
  min: number;
  max: number;
  amount: number;
  feeAmount: number;
  solFeeAmount: number;
  // path: number;
}

const updateEscrow = async (formData: updateFormArgs) => {
  const escrowAddress = process.env.NEXT_PUBLIC_ESCROW;
  const escrow = useEscrowStore.getState().escrow;

  if (!escrow) {
    throw new Error("No escrow found in store");
  }

  if (!escrowAddress) {
    throw new Error("No escrow address found");
  }

  const umi = umiWithCurrentWalletAdapter();

  const updateTx = updateEscrowV1(umi, {
    ...formData,
    escrow: publicKey(escrowAddress),
    authority: umi.identity,
    collection: publicKey(formData.collection),
    feeLocation: publicKey(formData.feeLocation),
    token: publicKey(formData.token),
    path: escrow?.path,
  });

  return await sendAndConfirmWalletAdapter(updateTx, {
    commitment: "finalized",
  });
};

export default updateEscrow;
