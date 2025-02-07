import React, { FC, useEffect, useState } from "react";
import Image from 'next/image';
import candcollection from "../../../public/2025_Candi0/collection_01_500.jpg";
import candi00 from "../../../public/2025_Candi0/candi_00_500.jpg";
import candi01 from "../../../public/2025_Candi0/candi_01_500.jpg";
import candi02 from "../../../public/2025_Candi0/candi_02_500.jpg";
import candi03 from "../../../public/2025_Candi0/candi_03_500.jpg";
import TokenImg from "../../assets/images/token.jpg";
import { MintCandiRandom } from "./MintCandiRandom";

import { publicKey } from '@metaplex-foundation/umi';
import { getCandyMachinesBalance } from '../../stores/useCandyMachine';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Button
} from "@/components/ui/button";
import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from "src/components/ui/card";

import { getExplorerUrl } from "../../utils/explorer";
import { motion } from "framer-motion";

const images = [candcollection, candi00, candi01, candi02, candi03];
const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;

export const Card2025_candi0: FC = () => {
  const [isOpenStates, setIsOpenStates] = useState([false]);

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.04 },
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

  useEffect(() => {
    const fetchBalances = async () => {
      const candyMachineKeys = [
        publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
      ];

      const results = await getCandyMachinesBalance(candyMachineKeys);
      setBalances(results);
    };
    fetchBalances();
  }, []);

  const candyMachines = balances.map((balance, index) => ({
    id: index + 1,
    cost: `${balance.SolCost} SOL`,
    candibarValue: 50,
    image: [candi00.src, candi01.src, candi02.src, candi03.src][index],
    itemsAvailable: balance.itemsAvailable,
    itemsRedeemed: balance.itemsRedeemed,
    collectionMint: balance.collectionMint,
    collectionName: balance.collectionName,
    candyGuardMinLimit: balance.candyGuardMinLimit,
  }));

  const [selectedImage, setSelectedImage] = useState(images[0]?.src);

  return (
    <>
      {/* <div className="flex flex-col md:flex-row items-start gap-4 mt-4">
        <div className="flex flex-col items-center md:w-2/3"> */}
      <div className="flex flex-col md:flex-row items-start gap-4 mt-4">
        <div className="">
          <div className="p-6">
            {candyMachines.map((machine, index) => (
              <div key={machine.id}>
                <Card>
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
                        SOL cost: {parseFloat(machine.cost).toFixed(1)} |
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
                            //className="ml-1 text-white rounded"
                            //style={{ display: 'inline-block', width: '20px', height: '20px', textAlign: 'center' }}
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
                    <div className="rounded-lg overflow-hidden"> {/* ✅ Added overflow-hidden */}
                      <Card className="flex justify-center items-center">
                        {selectedImage && (
                          <div className="w-full h-full flex justify-center items-center relative">
                            <motion.div
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.05 }} // ✅ Motion effect inside the box
                              transition={{ type: "spring", stiffness: 300 }}
                              className="w-full h-full"
                            >
                              <Image
                                src={selectedImage}
                                alt="Selected Candy"
                                layout="responsive"
                                width={400}
                                height={400}
                                className="rounded-xl shadow-lg"
                              />
                            </motion.div>

                            <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-3 rounded-tl-xl">
                              {selectedImage === images[0]?.src
                                ? "Candi Collection 2025 Cover"
                                : `Candi Item #${images.findIndex((img) => img.src === selectedImage)}`}
                            </div>
                          </div>
                        )}
                      </Card>
                    </div>
                  </span>

                </Card>
              </div>
            ))}

            <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap mt-4">
              {images.map((pic, index) => (
                <div
                  key={index}
                  className={`rounded-lg ${selectedImage === pic.src ? 'border-4 border-white rounded-xl' : ''}`}
                >
                  <div className="w-full">
                    <div className="flex space-x-4">
                      <div className="relative overflow-hidden rounded-xl shadow-lg"> {/* ✅ Added overflow-hidden */}
                        <motion.img
                          src={pic.src}
                          alt={`Candy ${index}`}
                          width={100}
                          height={100}
                          onClick={() => setSelectedImage(pic.src)}
                          className="cursor-pointer"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }} // ✅ Motion effect inside box
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        {index === 0 && (
                          <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-tl-xl">
                            Candi Collection 2025 Cover
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <MintCandiRandom />
          </div>


        </div>


        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center w-full max-w-screen-md mx-auto p-4 sm:p-8 text-center bg-gradient-to-br from-purple-500 to-indigo-800 text-white rounded-2xl shadow-xl"
            style={{ minWidth: '320px', maxWidth: '500px' }}
          >
            <h1 className="text-1xl sm:text-2xl font-bold">🍭 Introducing the Candibar NFT Collection! 🍭</h1>
            <h2 className="text-lg sm:text-1xl mt-2">1,000 Sweet Opportunities to Own a Piece of Digital Art on Solana!</h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {[
                { icon: '💎', title: 'Limited Mints', desc: 'Only 1,000 NFTs, making each Candi a rare collectible.' },
                { icon: '⚡', title: 'Built on Solana', desc: 'Blazing-fast transactions with ultra-low fees.' },
                { icon: '🎨', title: 'Artistic Excellence', desc: 'Vibrant digital art inspired by the sweet world of candies.' },
                { icon: <Image src={TokenImg} alt="Token" width={24} height={24} className="inline-block" />, title: 'Swap for Candibar Tokens', desc: 'Minted Candi NFTs can swap for Candibar tokens.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white text-gray-900 rounded-xl shadow-md transition-transform"
                >
                  <h3 className="text-xl font-semibold">{item.icon} {item.title}</h3>
                  <p className="mt-2 text-sm sm:text-base">
                    {item.desc}
                    {index === 3 && (
                      <Link href="/nftswap" className="text-blue-500 underline ml-2">
                        Swap Here!
                      </Link>
                    )}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-6 text-base sm:text-lg">🚀 The Candy Rush Starts Now!</p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >

              💎 Grab your Candibar NFT today before it&apos;s gone!

            </motion.div>
          </motion.div>
        </div>



      </div>
    </>
  );
};

export default Card2025_candi0;