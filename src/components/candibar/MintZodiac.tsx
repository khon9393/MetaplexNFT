import React, { useState, useEffect, FC, useMemo } from "react";
import Image from 'next/image'
import snake00 from "../../../public/2025/snake0_2025_500.jpg";
import snake01 from "../../../public/2025/snake1_2025_500.jpg";
import snake02 from "../../../public/2025/snake2_2025_500.jpg";
import snake03 from "../../../public/2025/snake3_2025_500.jpg";

import { getCandyMachinesBalance } from '../../stores/useCandyMachine';
import { publicKey } from '@metaplex-foundation/umi';
import { MintSnakes } from "./MintSnakes";
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
import { getExplorerUrl } from "../../utils/explorer";

export const Card2025: FC = () => {

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

  const candyMachines = useMemo(() => balances.map((balance, index) => ({
    id: index + 1,
    cost: `${balance.SolCost} SOL`,
    candibarValue: [500, 950, 1500, 2025][index % 4],
    images: [snake00.src, snake01.src, snake02.src, snake03.src], // Assuming these are imported images
    itemsAvailable: balance.itemsAvailable,
    itemsRedeemed: balance.itemsRedeemed,
    collectionMint: balance.collectionMint,
    candyMachinekeyId: candyMachineKeys[index],
    collectionName: balance.collectionName,
    candyGuardMinLimit: balance.candyGuardMinLimit,
  })), [balances, candyMachineKeys]);


  //const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(new Array(candyMachines.length).fill(0));

  useEffect(() => {
    const initialImageIndex = candyMachines.map(() => 0);
    setCurrentImageIndex(initialImageIndex);
  }, [candyMachines.length]);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const [carouselsApi, setCarouselsApi] = useState<(CarouselApi | null)[]>(new Array(candyMachines.length).fill(null));
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(new Array(candyMachines.length).fill(0));
  
  useEffect(() => {
    // Reset API references when candyMachines change
    setCarouselsApi(new Array(candyMachines.length).fill(null));
    setCurrentImageIndex(new Array(candyMachines.length).fill(0));
  }, [candyMachines.length]);
  
  const updateImageIndex = (machineIndex: number, selectedIndex: number) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[machineIndex] = selectedIndex;
      return newIndexes;
    });
  };
  
  return (
    <div className="text-center justify-center flex flex-col">
      <div className="flex flex-wrap justify-center gap-4 items-center p-8">
        {candyMachines.map((machine, machineIndex) => (
          <div key={machine.id} className="w-full md:w-1/2 lg:w-1/3">
            <Card className="flex flex-col items-center">
              <span className="text-1xl font-semibold">
                <Carousel setApi={(api) => {
                  const updatedApis = [...carouselsApi];
                  updatedApis[machineIndex] = api;
                  setCarouselsApi(updatedApis);
  
                  if (api) {
                    updateImageIndex(machineIndex, api.selectedScrollSnap());
                    api.on("select", () => {
                      updateImageIndex(machineIndex, api.selectedScrollSnap());
                    });
                  }
                }}>
                  <CarouselContent>
                    {machine.images.map((imageSrc, imgIndex) => (
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
                                src={imageSrc}
                                alt={`Image ${imgIndex + 1}`}
                                className="object-contain rounded-2xl"
                              />
                            </motion.div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
  
                  <div className="flex justify-center mt-4 space-x-2 p-10">
                    {machine.images.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
                          ${dotIndex === currentImageIndex[machineIndex] ? 'bg-blue-500 scale-125' : 'bg-gray-400'}`}
                      />
                    ))}
                  </div>
                </Carousel>
              </span>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2025;