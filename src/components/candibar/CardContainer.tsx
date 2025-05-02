
"use client";

import React, { useState, useEffect, FC, useMemo, useRef } from "react";
import Image from 'next/image'

import { getCandyMachinesBalance } from '../../lib/candymachine/fetchCandyMachines';
import { PublicKey, publicKey } from '@metaplex-foundation/umi';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import solanaLogo from "../../../public/logos/solana-logo_1.svg";
import tokenimg from "../../../public/images/token.jpg";

import { motion } from "framer-motion";
import { Card, CardContent } from "src/components/ui/card"
import { getCollection } from "../../stores/useCandibardataStorefromDB";
import Link from "next/link";
import { NFTStatusTypes } from "@/models/types";
import { ZodiacReading } from "./ZodiacReader/ZodiacReading";
import { toast } from "@/hooks/use-toast";
import { Spinner } from "../ui/spinner";
import { ZodiacReadingDrawerWindow } from "./ZodiacReader/ZodiacReadingDrawerWindow";

const tokenMint = publicKey(process.env.NEXT_PUBLIC_TOKEN);

interface CandyMachineKeysProps {
  candyMachineKeys: PublicKey[];
}

export const CardContainer: FC<CandyMachineKeysProps> = ({ candyMachineKeys }) => {
  const [isTransacting, setIsTransacting] = useState(false);

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
  };


  const [candyMachines, setCandyMachines] = useState<any[]>([]);

  useEffect(() => {
    const fetchCandyMachines = async () => {

      setIsTransacting(true);
      const results = await getCandyMachinesBalance(candyMachineKeys);
      const machines = await Promise.all(candyMachineKeys.map(async (key, index) => {
        const balance = results.find(result => result.publicKey === key.toString());
        if (balance) {
          const collection = await getCollection(balance.collectionMint);
          return {
            id: index + 1,
            cost: `${balance.SolCost} SOL`,
            images: collection.images ? collection.images : [{ url: '' }],
            itemsAvailable: balance.itemsAvailable,
            itemsRedeemed: balance.itemsRedeemed,
            collectionMint: balance.collectionMint,
            candyMachinekeyId: key,
            collectionName: balance.collectionName,
            candyGuardMinLimit: balance.candyGuardMinLimit,
            collectionSubtitles: collection.collectionsubtitles,
            collectionDetails: collection.collectiondetails,
            collectionCandibarValue: collection.collectioncandibarvalue,
            collectionStatus: collection.collectionstatus,
            tokenPaymentAmount: balance.tokenPaymentAmount,
            zodiacSign: collection.zodiacsign,
            zodiacYear: collection.zodiacyear,
            zodiacIcon: collection.zodiacicon,
          };
        }
        return null;
      }));
      setCandyMachines(machines.filter(machine => machine !== null));
    };

    fetchCandyMachines()
      .catch((error) => {
        console.log(error);
        toast({
          title: "Eerror fetching NFTs",
          description: error.message,
          variant: "destructive",
        });
      })
      .finally(() => setIsTransacting(false));

  }, [candyMachineKeys]);

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

        {isTransacting && (
          <div className="flex items-center justify-center space-x-2 px-10 py-10">
            <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
            <p className="text-xl font-semibold text-white">Loading NFT Cards...</p>
          </div>
        )}

        {candyMachines.map((machine, machineIndex) => (
        <div key={machine.id} className="flex lg:w-3/8 p-4">
          <motion.div whileInView={{ opacity: 1, y: 0, scale: [.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-4 p-2">
            <motion.div whileHover={{ scale: 1.02 }}>
            
                <Card className="w-80 h-full rounded-lg">
                  <span className="text-1xl font-semibold">

                    <h4 className="text-sm font-semibold p-1 flex items-center">
                      {machine.zodiacIcon && (
                        <Image
                          src={machine.zodiacIcon}
                          alt={`${machine.zodiacIcon} Zodiac Icon`}
                          width={100}
                          height={100}
                          className="ml-1 w-6 h-6 rounded-full border border-gray-300 p-0"
                        />
                      )}
                      &nbsp;
                      {machine.collectionName}
                    </h4>
                    <div className="rounded-md border">
                      <div className="px-1 py-1 font-mono shadow-sm flex items-center justify-center text-sm">
                        {machine.collectionSubtitles}
                      </div>
                    </div>
                    <div className="rounded-md border">
                      <div className="px-1 py-1 font-mono text-sm shadow-sm flex items-center justify-center whitespace-nowrap">
                        Minted: {machine.itemsRedeemed} of {machine.itemsAvailable}
                      </div>
                    </div>
                    {(machine.zodiacSign || machine.zodiacYear) && (
                      <div className="rounded-md border">
                        <div className="px-1 py-1 font-mono text-sm shadow-sm flex items-center justify-center whitespace-nowrap">
                          {/* <ZodiacReading sign={machine.zodiacSign || machine.zodiacYear} /> */}
                          <ZodiacReadingDrawerWindow sign={machine.zodiacSign || machine.zodiacYear} />
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
                            {machine.tokenPaymentAmount.toLocaleString() || 0}
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
             
            </motion.div>
          </motion.div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default CardContainer;