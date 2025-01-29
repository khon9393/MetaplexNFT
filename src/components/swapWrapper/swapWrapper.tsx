"use client";

import { toast } from "../../hooks/use-toast";
import Spinner from "../../icons/spinner";
import fetchEscrow from "../../lib/mpl-hybrid/fetchEscrow";
import swap from "../../lib/mpl-hybrid/swap";
import useEscrowStore from "../../store/useEscrowStore";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { DasApiAsset } from '@metaplex-foundation/digital-asset-standard-api';
import { useEffect, useState } from "react";
import TokenBalance from "../tokenBalance";
import { Button } from "@/components/ui/button";
import NftCard from "./nftCard";
import TokenCard from "./tokenCard";
import { REROLL_PATH } from "../../lib/constants";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from "react-confetti";

import {useWallet } from "@solana/wallet-adapter-react";

export enum TradeState {
  "nft",
  "tokens",
}

const SwapWrapper = () => {
  const [tradeState, setTradeState] = useState<TradeState>(TradeState.nft);
  const [selectedAsset, setSelectedAsset] = useState<DasApiAsset>();
  const [isTransacting, setIsTransacting] = useState(false);
  const { escrow } = useEscrowStore();

  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize(); // Dynamically get window size

  const rerollEnabled = escrow?.path === REROLL_PATH;
  const wallet = useWallet();

//   useEffect(() => {
//     // Check if the wallet is disconnected AND if we haven't already reloaded
//     if (!wallet.connected && sessionStorage.getItem('hasReloaded') !== 'true') {
//         //notify({ type: 'error', message: 'Error', description: 'Wallet not connected!' });
//         // Mark as reloaded for this session to prevent loops
//         sessionStorage.setItem('hasReloaded', 'true');

//        // window.location.reload();
       
//     } else if (wallet.connected) {
//        // notify({ type: 'success', message: 'Success', description: 'Wallet is connected' });

//         // Reset reload flag when wallet is reconnected
//         sessionStorage.removeItem('hasReloaded');
//     }
// }, [wallet.connected]);

  const handleSwap = async () => {
    setIsTransacting(true);
    console.log("Swapping", tradeState, selectedAsset);
    if (tradeState === TradeState.nft) {
      if (!selectedAsset) {
        toast({
          title: "No NFT selected",
          description: "Please select an NFT to swap",
          variant: "destructive",
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
          variant: "destructive",
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
    <div className="absolute top-2 right-20 p-0">
      <TokenBalance />
      </div>
   

    <div className="flex flex-col gap-8 items-center max-w-[600px] w-full">
      
      {/* {tradeState === "tokens" ? <SwapTokens setTradeState={tradeState => setTradeState(tradeState)} /> : <SwapNft setTradeState={tradeState => setTradeState(tradeState)} />} */}

      {tradeState === TradeState.nft ? (
      <NftCard
        tradeState={tradeState}
        setSelectedAsset={(asset) => setSelectedAsset(asset)}
        selectedAsset={selectedAsset}
      />
      ) : (
      <TokenCard tradeState={tradeState} />
      )}

      <ArrowsUpDownIcon
      className="cursor-pointer w-12 h-12 text-foreground mx-auto block"
      onClick={() => {
        if (tradeState === TradeState.nft) setTradeState(TradeState.tokens);
        else setTradeState(TradeState.nft);
        setSelectedAsset(undefined);
      }}
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

      {wallet.connected && (
      <Button
        onClick={handleSwap}
        disabled={isTransacting}
        className="w-[200px] px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
      >
        {isTransacting ? <Spinner className="h-4 w-4" /> : "Swap"}
      </Button>
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
    </>
  );
};

export default SwapWrapper;
