
"use client";

import React, { useState, useEffect, FC, useMemo } from "react";
import Image from 'next/image'

import { getCandyMachinesBalance } from '../../../stores/useCandyMachine';
import { publicKey } from '@metaplex-foundation/umi';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
import { getCollection } from "../../../stores/useCandibardataStore";
import Link from "next/link";

export const ZodiacSignAllView: FC = () => {

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

    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),


  ], []);


  useEffect(() => {
    const fetchBalances = async () => {
      const results = await getCandyMachinesBalance(candyMachineKeys);
      setBalances(results);
    };
    fetchBalances();
  }, [candyMachineKeys])

  const candyMachines = useMemo(() => balances.map((balance, index) => {
    const collectionImages = getCollection(balance.collectionMint);

    return {
      id: index + 1,
      cost: `${balance.SolCost} SOL`,
      candibarValue: [500, 950, 1500, 2025][index],
      images: collectionImages.images ? collectionImages.images : [{ url: '' }],
      itemsAvailable: balance.itemsAvailable,
      itemsRedeemed: balance.itemsRedeemed,
      collectionMint: balance.collectionMint,
      candyMachinekeyId: candyMachineKeys[index],
      collectionName: balance.collectionName,
      candyGuardMinLimit: balance.candyGuardMinLimit,
    };
  }), [balances, candyMachineKeys]);


  useEffect(() => {
    const initialImageIndex = candyMachines.map(() => 0);
    setCurrentImageIndex(initialImageIndex);
  }, [candyMachines]);

  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(new Array(candyMachines.length).fill(0));


  const updateImageIndex = (machineIndex: number, selectedIndex: number) => {
    setCurrentImageIndex((prev) => {
      if (prev[machineIndex] !== selectedIndex) {
        const newIndexes = [...prev];
        newIndexes[machineIndex] = selectedIndex;
        return newIndexes;
      }
      return prev;
    });
  };

  return (
    <div className="p-9">

<p className="text-center text-3xl font-extrabold p-3">
  Unlock the future of digital assets with Zodiac Coin 2025 NFT!
</p>

<div className="flex flex-col text-1xl items-center justify-center p-5">
  <p className="max-w-7xl leading-relaxed">
    Step into the cosmic realm of the Zodiac with this exclusive NFT collection, embodying the essence of 
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
      &nbsp;destiny
    </span>,  
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-600 animate-pulse">
      &nbsp;wisdom
    </span>, and  
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-orange-600 animate-pulse">
      &nbsp;prosperity
    </span>.  
    Whether you channel the strength of the Dragon, the resilience of the Ox, or the agility of the Monkey, each NFT captures the distinct energy of its zodiac sign.  
    By owning one or more of these celestial collectibles, you harness the power of  
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
      &nbsp;fortune
    </span>,  
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 animate-pulse">
      &nbsp;growth
    </span>, and  
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-600 animate-pulse">
      &nbsp;success
    </span>.  
    Each NFT is crafted to reflect the qualities and cosmic influence of its sign, making it a unique addition to your digital portfolio.  
    Seize this rare opportunity to connect with the power of the Zodiac—collect yours today!
  </p>
</div>

        <div className="absolute flex-wrap justify-center items-center">
            
        {candyMachines.map((machine, machineIndex) => (
          <div key={machine.id} className="flex lg:w-3/8 p-4">
            <Card className="w-96 h-full rounded-lg">
              <span className="text-1xl font-semibold">
                <Collapsible
                  open={isOpenStates[machineIndex]}
                  onOpenChange={(isOpen) => {
                    const updatedStates = [...isOpenStates];
                    updatedStates[machineIndex] = isOpen;
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
                    SOL cost: {parseFloat(machine.cost).toFixed(2)} | mints: {machine.itemsRedeemed} of {machine.itemsAvailable}
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="rounded-md border px-4 py-1 font-mono text-sm shadow-sm">
                      Wallet mint limit: {machine.candyGuardMinLimit}
                    </div>
                    <div className="rounded-md border px-4 py-1 font-mono text-sm shadow-sm">
                      Candibar value: {machine.candibarValue}
                    </div>
                    <div className="rounded-md border px-4 py-1 font-mono text-sm shadow-sm">
                      Collection address:
                      <div className="rounded-md py-1 font-mono text-sm shadow-sm flex items-center">
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

                <Carousel setApi={(api) => {

                  if (api) {
                    updateImageIndex(machineIndex, api.selectedScrollSnap());
                    api.on("select", () => {
                      updateImageIndex(machineIndex, api.selectedScrollSnap());
                    });
                  }
                }}>
                  <CarouselContent>
                    {Array.isArray(machine.images) ? machine.images.map((imageSrc, imgIndex) => (
                      <CarouselItem key={imgIndex} className="relative">
                        <Card className="overflow-hidden rounded-lg w-full relative">
                          <CardContent className="p-0">
                            <motion.div
                              variants={imageVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover="hover"
                              className="flex justify-center items-center w-full p-2"
                            >
                              <Image
                                width={350}
                                height={350}
                                src={Array.isArray(imageSrc) ? imageSrc[0].url : imageSrc.url}
                                alt={`Image ${imgIndex + 1}`}
                                className="object-contain rounded-2xl"
                              />
                            </motion.div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    )) : null}
                  </CarouselContent>
                  <CarouselPrevious size='sm' className="bg-transparent top-3/4 left-3" />
                  <CarouselNext size='sm' className="bg-transparent top-3/4 right-3" />
                  <div className="flex justify-center mt-4 space-x-2 p-5">
                    {Array.isArray(machine.images) && machine.images.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${dotIndex === currentImageIndex[machineIndex] ? 'bg-blue-500 scale-125' : 'bg-gray-400'}`}
                      />
                    ))}
                  </div>
                </Carousel>
                <Link
                    href={`/CardDetails?param=${candyMachines[machineIndex].collectionMint}`}
                    className="px-2 hover:underline flex justify-center animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black hover:text-blue-500"
                >
                    More Details ...
                </Link>
              </span>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};