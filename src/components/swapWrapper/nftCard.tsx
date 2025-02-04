import { DasApiAsset } from "@metaplex-foundation/digital-asset-standard-api";
import NftPicker from "../candibar/nftPicker";
import { Card } from "@/components/ui/card";
import CollectionImg from "../../assets/images/collectionImage.jpg";
import useEscrowStore from "../../stores/useEscrowStore";
import { TradeState } from "./swapWrapper";
import { NO_REROLL_PATH, REROLL_PATH } from "../../lib/constants";
import { useWallet } from "@solana/wallet-adapter-react";

interface NftCardProps {
  tradeState: TradeState;
  setSelectedAsset: (selectedNft: DasApiAsset) => void;
  selectedAsset: DasApiAsset | undefined;
}

const NftCard = (props: NftCardProps) => {
  const { escrow } = useEscrowStore();
 const wallet1 = useWallet();
 
  const card = (
    <Card className="flex flex-col items-start w-full border border-foreground-muted rounded-xl shadow-lg p-4 gap-4">
      <div className="flex flex-row gap-4 items-center">
        <img
          src={
        wallet1.connected && props.selectedAsset && props.selectedAsset.content.links
          ? (
          props.selectedAsset.content.links as unknown as {
            image: string;
          }
            ).image
          : CollectionImg.src
          }
          className="rounded-xl w-12 h-12"
          alt="nft collection image"
        />
        <div>
          <div className="text-lg">
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
      {props.tradeState === TradeState.nft ||
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
