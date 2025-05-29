import { TradeState } from '../../components/candibar/swapWrapper/swapWrapper';
import useEscrowStore from "../../stores/useEscrowStore";
import { captureV1, releaseV1 } from "@metaplex-foundation/mpl-hybrid";
import fetchEscrowAssets from "../fetchEscrowAssets";
import sendAndConfirmWalletAdapter from "../umi/sendAndConfirmWithWalletAdapter";
import umiWithCurrentWalletAdapter from "../umi/umiWithCurrentWalletAdapter";
import { REROLL_PATH } from '../constants';
import { Asset } from "../../utils/index";
import { publicKey, transactionBuilder } from "@metaplex-foundation/umi";
<<<<<<< HEAD
=======
import { setComputeUnitLimit } from '@metaplex-foundation/mpl-toolbox';

const ComputeUnitLimit = Number(process.env.NEXT_PUBLIC_setComputeUnitLimit) || 800_000;
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451

const swap = async ({
  swapOption,
  selectedAssets,
}: {
  swapOption: TradeState;
  selectedAssets: Asset[];
}) => {
  console.log({ swapOption, selectedAssets });

  const umi = umiWithCurrentWalletAdapter();
  const escrow = useEscrowStore.getState().escrow;

  if (!escrow) {
    console.error("No escrow found");
    return;
  }

  if (!selectedAssets || selectedAssets.length === 0) {
    throw new Error("No assets selected for swap");
  }

  switch (swapOption) {
    case TradeState.nft:
      console.log("Swapping NFTs");

      // Use TransactionBuilder to batch multiple releaseV1 calls
      let releaseBuilder = transactionBuilder();
<<<<<<< HEAD
      selectedAssets.forEach((asset) => {
        releaseBuilder = releaseBuilder.add(
          releaseV1(umi, {
            owner: umi.identity,
            escrow: escrow.publicKey,
            asset: publicKey(asset.id),
            collection: escrow.collection,
            token: escrow.token,
            feeProjectAccount: escrow.feeLocation,
=======
      releaseBuilder = releaseBuilder.add(
        setComputeUnitLimit(umi, { units: Number(ComputeUnitLimit) })
      );
      selectedAssets.forEach((asset) => {
        releaseBuilder = releaseBuilder.add(
          releaseV1(umi, {
        owner: umi.identity,
        escrow: escrow.publicKey,
        asset: publicKey(asset.id),
        collection: escrow.collection,
        token: escrow.token,
        feeProjectAccount: escrow.feeLocation,
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
          })
        );
      });

      // Send the batched transaction
      await sendAndConfirmWalletAdapter(releaseBuilder);
      break;

    case TradeState.tokens:
      console.log("Swapping Tokens");

      // Use TransactionBuilder to batch multiple captureV1 calls
      let captureBuilder = transactionBuilder();
<<<<<<< HEAD
      selectedAssets.forEach((asset) => {
        captureBuilder = captureBuilder.add(
          captureV1(umi, {
            owner: umi.identity,
            escrow: escrow.publicKey,
            asset: publicKey(asset.id),
            collection: escrow.collection,
            token: escrow.token,
            feeProjectAccount: escrow.feeLocation,
=======
      captureBuilder = captureBuilder.add(
        setComputeUnitLimit(umi, { units: Number(ComputeUnitLimit) })
      );
      selectedAssets.forEach((asset) => {
        captureBuilder = captureBuilder.add(
          captureV1(umi, {
        owner: umi.identity,
        escrow: escrow.publicKey,
        asset: publicKey(asset.id),
        collection: escrow.collection,
        token: escrow.token,
        feeProjectAccount: escrow.feeLocation,
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
          })
        );
      });

      // Send the batched transaction
      await sendAndConfirmWalletAdapter(captureBuilder);
      break;

    default:
      throw new Error("Invalid swap option");
  }
};

export default swap;