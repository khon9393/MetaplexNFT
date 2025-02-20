"use client";

import { toast } from "../../hooks/use-toast";
import { Spinner } from '../ui/spinner';
import fetchEscrow from "../../lib/mpl-hybrid/fetchEscrow";
import swap from "../../lib/mpl-hybrid/swap";
import useEscrowStore from "../../stores/useEscrowStore";
import { ArrowsUpDownIcon,ArrowDownCircleIcon,ArrowDownIcon } from "@heroicons/react/24/outline";
import { DasApiAsset } from '@metaplex-foundation/digital-asset-standard-api';
import { useEffect, useState } from "react";
import TokenBalance from "../tokenBalance";
import { Button } from "@/components/ui/button";
import NftCard from "./nftCard";
import TokenCard from "./tokenCard";
import { REROLL_PATH } from "../../lib/constants";
import { Asset } from "../../utils/index";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from "react-confetti";

import { useWallet } from "@solana/wallet-adapter-react";
export enum TradeState {
  "nft",
  "tokens",
}

const SwapWrapper = () => {
  const [tradeState, setTradeState] = useState<TradeState>(TradeState.nft);
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [isTransacting, setIsTransacting] = useState(false);
  const { escrow } = useEscrowStore();

  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize(); // Dynamically get window size

  const rerollEnabled = escrow?.path === REROLL_PATH;
  const wallet = useWallet();

  const handleSwap = async () => {
    setIsTransacting(true);
    console.log("Swapping", tradeState, selectedAsset);

    if (tradeState === TradeState.nft) {
      if (!selectedAsset) {
        toast({
          title: "No NFT selected",
          description: "Please select an NFT to swap",
          variant: "Warning",
        });
        setIsTransacting(false);
        return;
      }
    }
    else {
      if (!rerollEnabled && !selectedAsset) {
        toast({
          title: "No NFT selected",
          description: "Please select an NFT to receive",
          variant: "Warning",
        });
        setIsTransacting(false);
        return;
      }
    }

    swap({ swapOption: tradeState, selectedNft: selectedAsset })
      .then(() => {
        toast({
          title: "Swap Successful",
          description: "Your swap was successful",
        });
        setIsTransacting(false);
        setSelectedAsset(undefined);

        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 9000); // Show confetti for 8 seconds
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Swap Error",
          description: error.message,
          variant: "destructive",
        });
      })
      .finally(() => setIsTransacting(false))

  };

  useEffect(() => {
    // Fetch/Refresh Escrow
    fetchEscrow()
      .then((escrowData) => {
        useEscrowStore.setState({ escrow: escrowData });
      })
      .catch((error) =>
        toast({ title: "Escrow Error", description: error.message })
      );
  }, []);

  return (
    <>
    <div
    
    >
      <div className="absolute top-2 right-20 p-0">
      <TokenBalance />
      </div>


      <div className="flex flex-col gap-8 items-center max-w-[600px] w-full">

      {/* {tradeState === "tokens" ? <SwapTokens setTradeState={tradeState => setTradeState(tradeState)} /> : <SwapNft setTradeState={tradeState => setTradeState(tradeState)} />} */}

      <div className="text-center text-xl font-bold text-white">
        {tradeState === TradeState.nft
        ? <>Swapping NFT: {selectedAsset?.content.metadata.name || "{Select an NFT}"}<br />for candibar tokens</>
        : <>Swapping candibar tokens<br />to receive NFT: {selectedAsset?.content.metadata.name || "{Select an NFT}"}</>}
      </div>

      {tradeState === TradeState.nft ? (
        <NftCard
        tradeState={tradeState}
        setSelectedAsset={(asset) => setSelectedAsset(asset)}
        selectedAsset={selectedAsset}
        />
      ) : (
        <TokenCard tradeState={tradeState} />
      )}

      {/* <ArrowsUpDownIcon
        className="cursor-pointer w-12 h-12 text-foreground mx-auto block"
        onClick={() => {
        if (tradeState === TradeState.nft) setTradeState(TradeState.tokens);
        else setTradeState(TradeState.nft);
        setSelectedAsset(undefined);
        }}
      /> */}

      <ArrowDownIcon
        className="w-10 h-10 text-foreground mx-auto block"
      />


      {tradeState === TradeState.nft ? (
        <TokenCard tradeState={tradeState} />
      ) : (
        <NftCard
        tradeState={tradeState}
        setSelectedAsset={setSelectedAsset}
        selectedAsset={selectedAsset}
        />
      )}

      {process.env.NEXT_PUBLIC_RPC_ENABLE_SWAPPING==="1" && wallet.connected && (
        <Button
        onClick={handleSwap}
        disabled={isTransacting}
        className="w-[200px] px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
        >
        Swap
        </Button>
      )}

      {isTransacting && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
          <p className="mt-4 text-center text-xl font-semibold text-black">Minting in progress...</p>
        </div>
        </div>
      )}

      </div>
      {showConfetti && (
      <Confetti
        width={width}
        height={height}
        numberOfPieces={650} // Dense confetti
        gravity={0.2} // Slow falling effect
        wind={0.02} // Slight drift
        colors={["#ffd700", "#ff477e", "#f0e68c", "#ff85a1", "#fbb1bd", "#daa520"]}
      />
      )}

      </div>
    </>
  );
};

export default SwapWrapper;
