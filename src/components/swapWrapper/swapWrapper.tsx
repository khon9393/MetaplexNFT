"use client";

import { toast } from "../../hooks/use-toast";
import { Spinner } from '../ui/spinner';
import fetchEscrow from "../../lib/mpl-hybrid/fetchEscrow";
import swap from "../../lib/mpl-hybrid/swap";
import useEscrowStore from "../../stores/useEscrowStore";
import { ArrowsUpDownIcon, ArrowDownCircleIcon, ArrowDownIcon, ArrowUpIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
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
import { formatTokenAmount } from "@/lib/utils";
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
    toast({
      title: "Swap Successful",
      description: "Your swap was successful",
    });
    setIsTransacting(false);
    setSelectedAsset(undefined);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 9000); // Show confetti for 8 seconds
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
      <div>
        <div className="absolute top-0 right-2 p-0">
          <TokenBalance />
        </div>

        {selectedAsset && (
            <div className="absolute top-7 right-2 px-2 p-0 text-1xl font-bold animate-pulse border border-gray-300 rounded-lg bg-gray-200">
            {tradeState === TradeState.nft
              ? <div className="text-green-500"> +{formatTokenAmount(escrow.amount, 8)}</div>
              : <div className="text-red-500"> -{formatTokenAmount(escrow.amount, 8)}</div>}
            </div>
        )}

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 p-0 flex flex-col items-center justify-center space-y-4">
          {tradeState === TradeState.nft ? (
            <div className={selectedAsset ? "" : "animate-pulse"}>
              <NftCard
          tradeState={tradeState}
          setSelectedAsset={(asset) => setSelectedAsset(asset)}
          selectedAsset={selectedAsset}
              />
            </div>
          ) : (
            <TokenCard tradeState={tradeState} />
          )}

          {process.env.NEXT_PUBLIC_RPC_ENABLE_SWAPPING === "1" && wallet.connected && selectedAsset && (
            <div className="flex items-center justify-center">

              <Button
          onClick={handleSwap}
          disabled={isTransacting}
          className="px-4 h-12 animate-pulse bg-gray-800 text-white dark:bg-gray-700 dark:text-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 hover:animate-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          variant="default"
              >
          Swap
          <ArrowPathIcon className="w-10 h-10 m-1" />
              </Button>

            </div>

          )}
        </div>

        {isTransacting && (
          <div className="fixed inset-0 z-70 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
              <p className="mt-4 text-center text-xl font-semibold text-black">Minting in progress...</p>
            </div>
          </div>
        )}

        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={350} // Dense confetti
            gravity={0.3} // Slow falling effect
            wind={0.03} // Slight drift
            //colors={["#ffd700", "#ff477e", "#f0e68c", "#ff85a1", "#fbb1bd", "#daa520"]}
            colors={["#FFD700", "#FFB300"]} // Gold-like colors
          />
        )}

      </div>
    </>
  );
};

export default SwapWrapper;
