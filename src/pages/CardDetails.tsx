"use client";

import React, { FC, useEffect, useState } from "react";
import Image from 'next/image';

import TokenImg from "../assets/images/token.jpg";
// import { MintCandiRandom } from "../../MintCandiRandom";
import { getCollection } from "../stores/useCandibardataStore";
import { getCandyMachinesBalance } from '../stores/useCandyMachine';
import { publicKey } from '@metaplex-foundation/umi';
import { toast } from '../hooks/use-toast';
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
import { getExplorerUrl } from "../utils/explorer";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const CardDetails: FC = () => {

  const searchParams = useSearchParams();
  const paramValue = searchParams.get("param"); // Read query parameter
  const [paramCollectionaddress, setParamCollectionaddress] = useState(paramValue);

  const [isOpenStates, setIsOpenStates] = useState([false]);
  const [selectedImage, setSelectedImage] = useState('');
  const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
  const [balances, setBalances] = useState([]);
  const [collectionData, setCollectionData] = useState(null);

  useEffect(() => {
    if (paramValue) {
      fetchData(paramValue);
    }
  }, [paramValue]); // React to query parameter changes

  const fetchData = async (param: string) => {
    const response = await fetch(`/api/data?param=${param}`);
    const result = await response.json();
    setParamCollectionaddress(result);
  };

  useEffect(() => {
    const fetchBalances = async () => {
      if (paramCollectionaddress) {
        const collection = getCollection(paramCollectionaddress);
        setCollectionData(collection);

        if (collection) {
          const candyMachineKeys = [publicKey(collection.candimachineeaddress)];
          const results = await getCandyMachinesBalance(candyMachineKeys);
          setBalances(results);
        }
      }
    };

    fetchBalances();
  }, [paramCollectionaddress]);

  const candyMachines = balances.map((balance, index) => {
    if (collectionData) {
      const images = collectionData.collectionurl 
        ? [{ name: collectionData.collectionName, url: collectionData.collectionurl, iscollectioncover:true }, ...collectionData.images]
        : [...collectionData.images];

      return {
        id: index + 1,
        cost: `${balance.SolCost} SOL`,
        candibarValue: 50,
        images,
        itemsAvailable: balance.itemsAvailable,
        itemsRedeemed: balance.itemsRedeemed,
        collectionMint: balance.collectionMint,
        collectionName: balance.collectionName,
        candyGuardMinLimit: balance.candyGuardMinLimit,
      };
    }
    return null;
  }).filter(Boolean);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mt-4 pl-1 pr-1 ">
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
                    <div className="rounded-lg overflow-hidden">
                      <Card className="flex justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center relative">
                          <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-full h-full"
                          >
                            <Image
                              src={selectedImage || machine.images[0]?.url}
                              alt="Selected Candy"
                              layout="responsive"
                              width={400}
                              height={400}
                              className="rounded-xl shadow-lg"
                            />
                          </motion.div>

                          <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-3 rounded-tl-xl">
                                {selectedImage === machine.images[0]?.url && machine.images[0]?.iscollectioncover
                                ? machine.collectionName
                                : machine.images.find((img) => img.url === selectedImage)?.name || `Candibar Item`}
                            </div>
                        </div>

                      </Card>
                    </div>
                  </span>

                </Card>

              </div>
            ))}

            <div className="relative flex justify-center gap-3 mt-6">
              {candyMachines[0]?.images.map((pic, index) => (
                <div
                  key={index}
                  className={`rounded-lg ${selectedImage === pic.url ? 'border-4 border-white rounded-xl' : ''}`}
                >
                  <div className="w-full">
                    <div className="space-x-4">
                      <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <motion.img
                          src={pic.url}
                          alt={`Candy ${index}`}
                          width={100}
                          height={100}
                          onClick={() => setSelectedImage(pic.url)}
                          className="cursor-pointer"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4">
              {/* <MintCandiRandom /> */}
            </div>
          </div>


        </div>


        <div className="p-6 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center w-full max-w-screen-md mx-auto p-4 sm:p-8 text-center bg-gradient-to-br from-purple-500 to-indigo-800 text-white rounded-2xl shadow-xl"
            style={{ minWidth: '320px', maxWidth: '500px' }}
          >
            <h1 className="text-1xl sm:text-2xl font-bold"> CANDIBAR NFT DETAILS </h1>
            <h2 className="text-lg sm:text-1xl mt-2">Features</h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {[
                { icon: '💎', title: 'Limited Mints', desc: 'Only x,xxx NFTs, Candi collectible.' },
                { icon: '⚡', title: 'Built on Solana', desc: 'Blazing-fast transactions with ultra-low fees.' },
                { icon: '🎨', title: 'Artistic Excellence', desc: 'Vibrant digital sweet world of candies.' },
                { icon: <Image src={TokenImg} alt="Token" width={24} height={24} className="inline-block" />, title: 'Swap for Candibar Tokens', desc: 'Minted Candi NFTs can swap for Candibar tokens.' }
                
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white text-gray-900 rounded-xl shadow-md transition-transform"
                >
                  <h3 className="text-xl font-semibold">{item.icon} {item.desc}</h3>
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

export default CardDetails;