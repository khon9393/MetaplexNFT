
"use client";

import React, { useState, useEffect, FC, useMemo } from "react";
import Image from 'next/image'

import { getCandyMachinesBalance } from '../../lib/candymachine/fetchCandyMachines';
import { PublicKey, publicKey } from '@metaplex-foundation/umi';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import solanaLogo from "../../../public/logos/solana-logo_1.svg";
import tokenimg from "../../../public/images/token.jpg";

import { motion } from "framer-motion";
import { Card, CardContent } from "src/components/ui/card"
import { getCollection } from "../../stores/useCandibardataStore";
import Link from "next/link";
import { NFTStatusTypes } from "@/models/types";
import HoroscopeModal from "./HoroscopeModal";

interface CandyMachineKeysProps {
  candyMachineKeys: PublicKey[];
}

export const CardContainer: FC<CandyMachineKeysProps> = ({ candyMachineKeys }) => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

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
      tokenPaymentAmount: number,
    }[]
  >([]);

  useEffect(() => {
    const fetchBalances = async () => {

      const results = await getCandyMachinesBalance(candyMachineKeys);
      setBalances(results);
    };
    fetchBalances();
  }, [candyMachineKeys])

  const [candyMachines, setCandyMachines] = useState<any[]>([]);

  useEffect(() => {
    const fetchCandyMachines = async () => {
      const machines = await Promise.all(balances.map(async (balance, index) => {
        const collectionImages = await getCollection(balance.collectionMint);

        const collection = await getCollection(balance.collectionMint);

        return {
          id: index + 1,
          cost: `${balance.SolCost} SOL`,
          images: collectionImages.images ? collectionImages.images : [{ url: '' }],
          itemsAvailable: balance.itemsAvailable,
          itemsRedeemed: balance.itemsRedeemed,
          collectionMint: balance.collectionMint,
          candyMachinekeyId: candyMachineKeys[index],
          collectionName: balance.collectionName,
          candyGuardMinLimit: balance.candyGuardMinLimit,
          collectionSubtitles: collection.collectionSubtitles,
          collectionDetails: collection.collectionDetails,
          collectionCandibarValue: collection.collectionCandibarValue,
          collectionStatus: collection.collectionStatus,
          candibarcost: collection.candibarcost,
          tokenPaymentAmount: balance.tokenPaymentAmount,
          zodiacSign: collection.zodiacSign,
          zodiacYear: collection.zodiacYear,
          zodiacIcon: collection.zodiacIcon,
        };
      }));
      setCandyMachines(machines);
    };

    fetchCandyMachines();
  }, [balances, candyMachineKeys]);


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
                <div className="rounded-md border">
                  <div className="px-1 py-1 font-mono text-sm shadow-sm flex items-center justify-center whitespace-nowrap">
                    {machine.collectionSubtitles}
                  </div>
                </div>
                <div className="rounded-md border">
                  <div className="px-1 py-1 font-mono text-sm shadow-sm flex items-center justify-center whitespace-nowrap">
                    mints: {machine.itemsRedeemed} of {machine.itemsAvailable}
                  </div>
                </div>

                {machine.zodiacSign && (
                  <div className="rounded-md border">
                    <div className="px-1 py-1 font-mono text-sm shadow-sm flex items-center justify-center whitespace-nowrap">

                      {machine.zodiacSign && (
                        <Image
                          src={machine.zodiacIcon}
                          alt={`${machine.zodiacIcon} Zodiac Icon`}
                          width={100}
                          height={100}
                          className="ml-1 w-6 h-6"
                        />
                      )}
                      
                      <button
                        className="px-2 rounded-md border hover:underline flex justify-center animate-pulse bg-gradient-to-br from-lime-400 to-yellow-500 hover:from-white hover:to-purple-300 text-black hover:text-blue-500"
                        onClick={() => setSelectedSign(machine.zodiacSign || machine.zodiacYear)}
                      >
                        <span>{machine.zodiacSign} Zodiac Reading</span>
                      </button>
                    </div>
                  </div>
                )}


                <div className="rounded-md border">
                  <div className="px-1 py-1 font-mono text-sm shadow-sm flex items-center justify-center whitespace-nowrap">

                    <Image
                      src={solanaLogo}
                      alt="Solana Icon"
                      width={16}
                      height={16}
                      className="mr-1"
                    />
                    <span>{parseFloat(machine.cost).toFixed(4).replace(/\.?0+$/, '')}
                    </span>

                    {machine.tokenPaymentAmount > 0 && (
                      <div className="px-1 py-1 font-mono text-sm shadow-sm flex items-center justify-center whitespace-nowrap">
                        &nbsp;|&nbsp;<Image
                          src={tokenimg}
                          alt="Candibar Icon"
                          width={16}
                          height={16}
                          className="mr-1"
                        />
                        {machine.tokenPaymentAmount || 0}
                      </div>

                    )}
                  </div>

                </div>

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
                        <Card className="overflow-hidden rounded-lg w-full h-full relative">
                          <CardContent className="p-0 h-full">
                            <motion.div
                              variants={imageVariants}
                              initial="hidden"
                              animate="visible"
                              whileHover="hover"
                              className="flex justify-center items-center w-full h-full"
                            >
                              <Image
                                width={350}
                                height={350}
                                src={Array.isArray(imageSrc) ? imageSrc[0].url : imageSrc.url}
                                alt={`Image ${imgIndex + 1}`}
                                className="object-cover w-full h-full rounded-2xl"
                              />

                              {machine.itemsRedeemed === machine.itemsAvailable && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-6xl font-bold text-red-500 opacity-75 transform rotate-45">
                                    {NFTStatusTypes.SoldOut}
                                  </span>
                                </div>
                              )}

                              {machine.collectionStatus !== NFTStatusTypes.Available && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-5xl font-bold text-white opacity-75 transform rotate-45">
                                    {NFTStatusTypes.ComingSoon}
                                  </span>
                                </div>
                              )}

                            </motion.div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    )) : null}


                  </CarouselContent>

                  {machine.images.length > 1 && (
                    <>
                      <CarouselPrevious size='sm' className="bg-transparent top-27/32 left-3" />
                      <CarouselNext size='sm' className="bg-transparent top-27/32 right-3" />

                      <div className="flex justify-center space-x-2 my-3">
                        {machine.images.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-3 h-3 rounded-full transition-all duration-300 
                            ${dotIndex === currentImageIndex[machineIndex] ? 'bg-blue-500 scale-125' : 'bg-gray-400'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                </Carousel>

                <Link
                  href="/CardDetails"
                  onClick={() => {
                    sessionStorage.setItem("userData", JSON.stringify({ collectionMint: candyMachines[machineIndex].collectionMint }));
                    sessionStorage.setItem("userZodiacName", JSON.stringify({ userZodiacName: candyMachines[machineIndex].zodiacSign }));
                    sessionStorage.setItem("userZodiacYear", JSON.stringify({ userZodiacYear: candyMachines[machineIndex].zodiacYear }));
                  }}
                  className="px-2 hover:underline flex justify-center animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black hover:text-blue-500"
                >
                  {
                    machine.collectionStatus === NFTStatusTypes.Available &&
                      machine.itemsRedeemed !== machine.itemsAvailable ? (
                      <div>
                        {NFTStatusTypes.GetitNow}
                      </div>
                    ) : (
                      <div>
                        {NFTStatusTypes.MoreDetails}
                      </div>
                    )
                  }
                </Link>
              </span>
            </Card>
          </div>
        ))}
      </div>
      {/* ✅ Show Horoscope Modal When a Sign is Selected */}
      {selectedSign && <HoroscopeModal sign={selectedSign} isOpen={true} onClose={() => setSelectedSign(null)} />}
    </div>
  );
};

export default CardContainer;