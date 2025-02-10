
"use client";

import React, { useState, useEffect, FC, useMemo } from "react";
import Image from 'next/image'

import { getCandyMachinesBalance } from '../../../stores/useCandyMachine';
import { publicKey } from '@metaplex-foundation/umi';
import { CandiMinter } from "../../../components/candibar/CandiMinter";

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
import { useRouter } from "next/router";
import Link from "next/link";

export const ZodiacCapricornView: FC = () => {

  const [isOpenStates, setIsOpenStates] = useState([false, false, false, false]);
  const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
  const router = useRouter();

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
   // publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),

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
  }, [candyMachines.length]);

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

      <p className="text-center text-3xl font-extrabold p-6">
       Zodiac Capricorn Coin NFT!
      </p>

      <div className="flex flex-wrap justify-center gap-8 items-center">
        {candyMachines.map((machine, machineIndex) => (
          <div key={machine.id} className="flex lg:w-7/16 p-4">
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
                  href={`/CardDetails?param=${candyMachines[machineIndex].collectionMint}`}>
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