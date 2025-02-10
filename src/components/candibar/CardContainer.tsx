
"use client";

import React, { useState, useEffect, FC, useMemo } from "react";
import Image from 'next/image'

import { getCandyMachinesBalance } from '../../stores/useCandyMachine';
import { PublicKey, publicKey } from '@metaplex-foundation/umi';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import solanaLogo from "../../../public/logos/solana-logo_1.svg";
import tokenimg from "../../../public/images/token.jpg";

import { motion } from "framer-motion";
import { Card, CardContent } from "src/components/ui/card"
import { getCollection } from "../../stores/useCandibardataStore";
import Link from "next/link";


interface CandyMachineKeysProps {
  candyMachineKeys: PublicKey[];
}

export const CardContainer: FC<CandyMachineKeysProps> = ({ candyMachineKeys }) => {

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

  // const candyMachineKeys = useMemo(() => [

  //   publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
  //   publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),

  // ], []);


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
    <div className="text-center justify-center flex flex-col">
      <div className="flex flex-wrap justify-center items-center">

        {candyMachines.map((machine, machineIndex) => (
          <div key={machine.id} className="flex lg:w-3/8 p-4">
            <Card className="w-80 h-full rounded-lg">
              <span className="text-1xl font-semibold">

                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold p-1">
                    {machine.collectionName}
                  </h4>

                </div>

                <div className="rounded-md border pl-2 px-1 py-1 font-mono text-sm flex items-center justify-center">
                  <Image
                    src={solanaLogo}
                    alt="Solana Icon"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                  SOL cost: {parseFloat(machine.cost).toFixed(2)}
                </div>
                {/* <div className="rounded-md border pl-2 px-1 py-1 font-mono text-sm flex items-center justify-center">
                    <Image
                        src={tokenimg.src}
                        alt="Candibar Icon"
                        width={16}
                        height={16}
                        className="mr-1"
                      />
                      
                      Candibar costs: 0
                    </div> */}

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

export default CardContainer;