import NftPickerCollection from "../nftPicker";
import { Card } from "@/components/ui/card";
import CollectionImg from '../../../../public/images/collectionImage.jpg';
import useEscrowStore from "../../../stores/useEscrowStore";
import { TradeState } from "./swapWrapper";
import { NO_REROLL_PATH, REROLL_PATH } from "../../../lib/constants";
import { useWallet } from "@solana/wallet-adapter-react";

import { Asset } from "../../../utils/index";
import {SwapArgs} from "../../../lib/swapselector";

interface NftCardProps {
  tradeState: TradeState;
  setSelectedAssets: (selectedNfts: Asset[]) => void;
  selectedAssets: Asset[]; // Updated to handle multiple selected NFTs
  swapArgs: SwapArgs;
}

const NftCard = (props: NftCardProps) => {
  const { escrow } = useEscrowStore();
  const wallet1 = useWallet();

  const card = (
    <Card
      className="flex items-center text-1xl md:text-2xl px-3 bg-red-400 font-mono text-white dark:bg-red-600 dark:text-gray-200"
    >
      <div 
      //className="flex flex-row gap-2 items-center"
      className="flex flex-col gap-2 items-start py-2"
      >
        {props.selectedAssets.length > 0 ? (
          props.selectedAssets.map((asset, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
              src={
                wallet1.connected && asset.content.files.length > 0
                ? asset.content.files[0].uri
                : CollectionImg.src
              }
              className="rounded-xl w-12 h-12"
              alt="nft collection image"
              />
             
              <span className="sm:text-lg">{asset.content.metadata.name}</span>
              <span className="sm:text-lg">({asset.content.metadata.description})</span>
            </div>
          ))
        ) : (
          <img
            src={CollectionImg.src}
            className="rounded-xl w-12 h-12"
            alt="nft collection image"
          />
        )}
            </div>
      <div 
      //className="flex flex-row gap-2 items-center"
      className="flex flex-row items-center py-2"
      >
        <div>
          <div className="text-1xl md:text-lg font-bold text-black">
            {wallet1.connected ? (
              props.tradeState === TradeState.tokens && escrow?.path === REROLL_PATH ? (
                "Receive Random NFT"
              ) : props.selectedAssets.length > 0 ? (
                <></>
              ) : (
                <span className="text-muted-foreground pl-3">Select NFTs</span>
              )
            ) : (
              <span className="text-muted-foreground pl-3">Select NFTs</span>
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
        <NftPickerCollection
          wallet={props.tradeState === TradeState.nft ? "user" : "escrow"}
          setSelectedAssets={(selectedNfts: Asset[]) => {
            props.setSelectedAssets(selectedNfts); // Pass multiple selected NFTs to parent
            console.log("Selected NFTs:", selectedNfts);
            
          }}
          swapArgs={props.swapArgs}
        >
          {card}
        </NftPickerCollection>
      ) : (
        card
      )}
    </>
  );
};

export default NftCard;