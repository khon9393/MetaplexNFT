"use client";

import { toast } from "../../../hooks/use-toast";
import { Spinner } from '../../ui/spinner';
import fetchEscrow from "../../../lib/mpl-hybrid/fetchEscrow";
import mintAsset from "../../../lib/mpl-hybrid/mintAsset";
import useEscrowStore from "../../../stores/useEscrowStore";
import { ArrowsUpDownIcon, ArrowDownCircleIcon, ArrowDownIcon, ArrowUpIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { DasApiAsset } from '@metaplex-foundation/digital-asset-standard-api';
import { useEffect, useMemo, useState } from "react";
import TokenBalance from "../../tokenBalance";
import { Button } from "@/components/ui/button";
import NftCard from "./nftCard";
import TokenCard from "./tokenCard";
import { REROLL_PATH } from "../../../lib/constants";
import { Asset } from "../../../utils/index";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from "react-confetti";

import { useWallet } from "@solana/wallet-adapter-react";
import { formatTokenAmount } from "@/lib/utils";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { mplCandyMachine } from "@metaplex-foundation/mpl-core-candy-machine";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
export enum TradeState {
  "nft",
  "tokens",
}

import {CandiMinterTest}  from "../../candibar/CandiMinterTest";
import { UmiProvider } from "@/providers/umiProvider";

export const Testminter = () => {
 const [tradeState, setTradeState] = useState<TradeState>(TradeState.nft);
  const [selectedAsset, setSelectedAsset] = useState<Asset>();
  const [isTransacting, setIsTransacting] = useState(false);
  const { escrow } = useEscrowStore();

  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize(); // Dynamically get window size

  const rerollEnabled = escrow?.path === REROLL_PATH;
  const wallet = useWallet();
  const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
  const handleSwap = async () => {
    setIsTransacting(true);


    // if (tradeState === TradeState.nft) {
    //   if (!selectedAsset) {
    //     toast({
    //       title: "No NFT selected",
    //       description: "Please select an NFT to swap",
    //       variant: "Warning",
    //     });
    //     setIsTransacting(false);
    //     return;
    //   }
    // }
    // else {
    //   if (!rerollEnabled && !selectedAsset) {
    //     toast({
    //       title: "No NFT selected",
    //       description: "Please select an NFT to receive",
    //       variant: "Warning",
    //     });
    //     setIsTransacting(false);
    //     return;
    //   }
    // }

 //const wallet = useWallet();
  
  // Create an Umi instance
  const umi = useMemo(() =>
    createUmi(quicknodeEndpoint)
      .use(walletAdapterIdentity(wallet))
      .use(mplCandyMachine())
      .use(mplTokenMetadata()),
    [wallet]
  );



    mintAsset({ umi })
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
  
        {/* <div className="absolute top-0 right-2 p-0">
        <TokenBalance />
        </div> */}

        {/* {selectedAsset && (
          <div className="absolute top-9 right-2 px-2 p-0 border border-gray-300 rounded-lg bg-gray-200">
            <div className="text-1xl font-bold animate-pulse ">
              {tradeState === TradeState.nft
                ? <div className="text-green-700"> +{formatTokenAmount(escrow.amount, 8)}</div>
                : <div className="text-red-700"> -{formatTokenAmount(escrow.amount, 8)}</div>}
            </div>
          </div>
        )} */}

<UmiProvider>
<CandiMinterTest candyMachineaddress={"CD2gvAR8Zk2GWJH9p16oyHgMLC39iwcPJQToftpBzVcY"} collectionaddress={"C5Fpy8encCiBA6L2miHewuC57z964t1dmXEHb9jzqtrA"} />
          </UmiProvider>

       



              {/* <Button
          onClick={handleSwap}
          disabled={isTransacting}
          className="text-1xl md:text-2xl px-4 h-12 animate-pulse bg-gray-800 text-white dark:bg-gray-700 dark:text-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 hover:animate-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          variant="default"
              >
          Swap
          <ArrowPathIcon className="w-10 h-10 m-1" />
              </Button> */}

         

     

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


    </>
  );
};
