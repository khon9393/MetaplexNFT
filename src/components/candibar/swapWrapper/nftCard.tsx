import NftPicker from "../../candibar/nftPicker";
import { Card } from "@/components/ui/card";
import CollectionImg from '../../../../public/images/collectionImage.jpg';
import useEscrowStore from "../../../stores/useEscrowStore";
import { TradeState } from "./swapWrapper";
import { NO_REROLL_PATH, REROLL_PATH } from "../../../lib/constants";
import { useWallet } from "@solana/wallet-adapter-react";

import { Asset } from "../../../utils/index";

interface NftCardProps {
  tradeState: TradeState;
  setSelectedAsset: (selectedNft: Asset) => void;
  selectedAsset: Asset | undefined;
}

const NftCard = (props: NftCardProps) => {
  const { escrow } = useEscrowStore();
  const wallet1 = useWallet();

  const card = (
    <Card 
    // className="flex flex-col items-start w-full border border-foreground-muted rounded-xl shadow-lg p-4 gap-4"
    className="flex items-center text-1xl md:text-2xl px-3 bg-red-400 font-mono text-white dark:bg-red-600 dark:text-gray-200"
    >
      <div className="flex flex-row gap-2 items-center ">
        <img
          src={
        wallet1.connected && props.selectedAsset && props.selectedAsset.content.files.length > 0
          ? (
          props.selectedAsset.content.files[0].uri 
          ): CollectionImg.src
          }
          className="rounded-xl w-12 h-12"
          alt="nft collection image"
        />
        
        <div>
          <div className="text-1xl md:text-lg font-bold text-black">
        {wallet1.connected ? (
          props.tradeState === TradeState.tokens && escrow?.path === REROLL_PATH ? (
          "Receive Random NFT"
          ) : props.selectedAsset ? (
          props.selectedAsset.content.metadata.name
          ) : (
          <span className="text-muted-foreground">Select an NFT</span>
          )
        ) : (
          <span className="text-muted-foreground">Select an NFT</span>
        )}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <>
      {!wallet1.connected ? (
      card
      ) : props.tradeState === TradeState.nft ||
      (props.tradeState === TradeState.tokens && escrow?.path === NO_REROLL_PATH) ? (
      <NftPicker
        wallet={props.tradeState === TradeState.nft ? "user" : "escrow"}
        setSelectedAsset={(selectedNft) => {
        props.setSelectedAsset(selectedNft);
        console.log(selectedNft);
        }}
      >
        {card}
      </NftPicker>
      ) : (
      card
      )}
    </>
  );
};

export default NftCard;
