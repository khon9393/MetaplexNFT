
import React, { useState, useEffect, FC, useMemo } from "react";
import Image from 'next/image'
import { getCandyMachinesBalance } from '../../../stores/useCandyMachine';
import { publicKey } from '@metaplex-foundation/umi';
import { MintSnakes } from "../../../components/candibar/MintSnakes";
import { getCollection } from "../../../stores/useCandibardataStore";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Button
} from "@/components/ui/button"
import { motion } from "framer-motion";

import { ChevronsUpDown } from 'lucide-react';
import { Card, CardContent } from "src/components/ui/card"
import { getExplorerUrl } from "../../../utils/explorer";



export const SignSnakeView: FC = ({ }) => {
    const [isOpenStates, setIsOpenStates] = useState([false, false, false, false]);
    const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
  
    const imageVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
      hover: { scale: 1.05 },
    };
  
    const [balances, setBalances] = useState<
      {
        publicKey: string,
        itemsRedeemed: number,
        itemsAvailable: number,
        collectionMint: string,
        collectionName: string,
        SolCost: number,
        candyGuardMinLimit: number,
      }[]
    >([]);
  
    const candyMachineKeys = useMemo(() => [
      publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),
      publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02),
      publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03),
      publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04),
    ], []);
  
  
    useEffect(() => {
      const fetchBalances = async () => {
        const results = await getCandyMachinesBalance(candyMachineKeys);
        setBalances(results);
      };
      fetchBalances();
  
    }, [candyMachineKeys])
  
    const candyMachines = balances.map((balance, index) => {
      const collectionImages = getCollection(balance.collectionMint);
  
      return {
        id: index + 1,
        cost: `${balance.SolCost} SOL`,
        candibarValue: [500, 950, 1500, 2025][index],
        images: collectionImages.images ? collectionImages.images : { url: '' },
        itemsAvailable: balance.itemsAvailable,
        itemsRedeemed: balance.itemsRedeemed,
        collectionMint: balance.collectionMint,
        candyMachinekeyId: candyMachineKeys[index],
        collectionName: balance.collectionName,
        candyGuardMinLimit: balance.candyGuardMinLimit,
        collectionUrl: collectionImages.collectionurl,
      };
    });
  
    return (
      <div className="text-center justify-center flex flex-col">
  
        <p className="text-center text-3xl font-extrabold p-3">
          Unlock the future of digital assets with Snake Coin 2025 NFT!
        </p>
  
        <div className="flex flex-col text-1xl items-center justify-center p-5">
          <p className="max-w-7xl leading-relaxed">
            Embodying the wisdom and mystique of the Year of the Snake, this NFT represents
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
              &nbsp;transformation
            </span>,
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
              &nbsp;intelligence
            </span>, and
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-500 to-green-600 animate-pulse">
              &nbsp;prosperity
            </span>.
            By owning one or more of these unique collectibles, you tap into the Snake&apos;s energy—symbolizing
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
              &nbsp;intuition
            </span>,
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-600 animate-pulse">
              &nbsp;adaptability
            </span>, and
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 animate-pulse">
              &nbsp;resourcefulness
            </span>.
            &nbsp;Each NFT reflects these qualities through its rarity and value. Seize the opportunity to be part of this zodiac-inspired evolution. Claim your piece of the movement today!
          </p>
        </div>
  
        <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap justify-center items-center">
  
          {candyMachines.map((machine, index) => (
            <div key={machine.id}>
              <Card className="flex">
  
                <span className="text-1xl font-semibold">
                  <Collapsible
                    open={isOpenStates[index]}
                    onOpenChange={(isOpen) => {
                      const updatedStates = [...isOpenStates];
                      updatedStates[index] = isOpen;
                      setIsOpenStates(updatedStates);
                    }}
                    className="md:w-full space-y-2"
                  >
                    <div className="flex items-center justify-between space-x-4 px-4">
                      <h4 className="text-sm font-semibold">
                        {machine.collectionName}
                      </h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <ChevronsUpDown className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                      SOL cost: {parseFloat(machine.cost).toFixed(2)} |
                      mints: {machine.itemsRedeemed} of {machine.itemsAvailable}
                    </div>
                    <CollapsibleContent className="space-y-2">
                      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                        Wallet mint limit: {machine.candyGuardMinLimit}
                      </div>
                      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                        Candibar value: {machine.candibarValue}
                      </div>
                      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                        Collection address:
                        <div className="rounded-md px-4 py-2 font-mono text-sm shadow-sm flex items-center">
                          <span>{machine.collectionMint}</span>
                          <a
                            href={getExplorerUrl(quicknodeEndpoint, machine.collectionMint)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-link text-gray-600 hover:text-gray-400 p-1">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
  
                  <div className="rounded-2xl overflow-hidden flex justify-center items-center w-full">
                      <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="flex justify-center items-center w-full"
                      >
                        <Image
                        width={350}
                        height={350}
                        src={machine.images?.[0]?.url || ''}
                        alt={`Snake ${machine.id}`}
                        className="object-contain rounded-2xl"
                        />
                      </motion.div>
                  </div>
                  <MintSnakes
                    candyMachineId={machine.candyMachinekeyId}
                    collectionId={machine.collectionMint}
                  />
  
                </span>
  
              </Card>
            </div>
          ))}
  
        </div>
        <div className="mb-6 p-4">
          Each wallet is limited to a maximum of two NFTs per collection set, with a total limit of 8 NFTs across all four collections.
        </div>
      </div>
    );
};
