"use client";

import React, { FC, useEffect, useState } from "react";
import Image from 'next/image';

import { getCollection } from "../stores/useCandibardataStore";
import { getCandyMachinesBalance } from '../lib/candymachine/fetchCandyMachines';
import { publicKey } from '@metaplex-foundation/umi';
import { CandiMinter } from "../components/candibar/CandiMinter";
import solanaLogo from "../../public/logos/solana-logo_1.svg";
import tokenimg from "../../public/images/token.jpg";
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
import { Card } from "src/components/ui/card";
import { getExplorerUrl } from "../utils/explorer";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { NFTStatusTypes } from "@/models/types";

const CardDetails: FC = () => {

  const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;

  const [isOpenStates, setIsOpenStates] = useState([true, true]);
  const [selectedImage, setSelectedImage] = useState('');

  const [balances, setBalances] = useState([]);
  const [collectionData, setCollectionData] = useState(null);

  const [paramCollectionaddress, setParamCollectionaddress] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setParamCollectionaddress(parsedData.collectionMint);
    }
  }, []);

  useEffect(() => {
    const fetchBalances = async () => {
      if (paramCollectionaddress) {
        const collection = await getCollection(paramCollectionaddress);
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

  const [candyMachines, setCandyMachines] = useState([]);

  useEffect(() => {
    const updatedCandyMachines = balances.map((balance, index) => {
      if (collectionData) {
        const images = collectionData.collectionurl
          ? [{ name: collectionData.collectionName, url: collectionData.collectionurl, iscollectioncover: true }, ...collectionData.images]
          : [...collectionData.images];


        setSelectedImage(images[0]?.url);

        return {
          id: index + 1,
          cost: `${balance.SolCost} SOL`,
          images,
          itemsAvailable: balance.itemsAvailable,
          itemsRedeemed: balance.itemsRedeemed,
          collectionMint: balance.collectionMint,
          collectionName: balance.collectionName,
          candyGuardMinLimit: balance.candyGuardMinLimit,
          candymachineaddress: collectionData.candimachineeaddress,
          collectionCoverName: collectionData.collectionName,
          collectionDetails: collectionData.collectionDetails,
          collectionCandibarValue: collectionData.collectionCandibarValue,
          collectionStatus: collectionData.collectionStatus,
          candibarcost: collectionData.candibarcost,
          isSwappable: collectionData.isSwappable,
          tokenPaymentAmount: balance.tokenPaymentAmount,
        };
      }
      return null;
    }).filter(Boolean);

    setCandyMachines(updatedCandyMachines);
  }, [balances, collectionData]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mt-4 pl-0 pr-0 justify-center">
        <div className="w-full md:w-1/2 max-w-[600px] min-w-[400px]" >
          <div className="p-1" >
            {candyMachines.map((machine, index) => (
              <div key={machine.id}
              >
                <Card>
                  <span className="text-1xl font-semibold">
                    <div className="rounded-lg border-2 overflow-hidden">
                      <Card className="flex justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center relative">
                          <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.03 }}
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
                            {machine.itemsRedeemed === machine.itemsAvailable && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-8xl font-bold text-red-500 opacity-75 transform rotate-45">
                                  SOLD OUT
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
                          <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs p-3 rounded-tl-xl">
                            {selectedImage === machine.images[0]?.url && machine.images[0]?.iscollectioncover
                              ? machine.collectionCoverName
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

            {candyMachines[0]?.images.length > 0 ? (
              <div className="p-4">
                {candyMachines[0]?.itemsRedeemed !== candyMachines[0]?.itemsAvailable &&
                  candyMachines[0]?.collectionStatus === NFTStatusTypes.Available &&
                  (
                    <div>

                      <CandiMinter
                        candyMachineaddress={candyMachines[0]?.candymachineaddress || ''}
                        collectionaddress={candyMachines[0]?.collectionMint || ''}


                        buttonText={candyMachines[0]?.images.length > 1 ? "Mint Random NFT" : ""}

                      />
                    </div>
                  )}
              </div>
            ) : (
              <h1>Item not Found.</h1>
            )}

          </div>
        </div>

        {candyMachines[0]?.images.length > 0 && (
          <div className="p-1 ">
            <div
              // className="flex-col justify-center max-w-screen-md mx-auto p-4 sm:p-6 text-center bg-gradient-to-br from-purple-500 to-indigo-800 text-white rounded-2xl shadow-xl min-w-[400px]"
              className="flex-col justify-center mx-auto p-4 sm:p-6 text-center bg-gradient-to-br from-purple-500 to-indigo-800 text-white rounded-2xl shadow-xl min-w-[400px]"
            >
              <h1 className="text-1xl sm:text-2xl font-bold p-3"> CANDIBAR NFT DETAILS </h1>


              {candyMachines.map((machine, machineIndex) => (
                <div key={machine.id} >

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card >
                      <span className="text-1xl font-semibold">
                        <Collapsible
                          open={isOpenStates[machineIndex]}
                          onOpenChange={(isOpen) => {
                            const updatedStates = [...isOpenStates];
                            updatedStates[machineIndex] = isOpen;
                            setIsOpenStates(updatedStates);
                          }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between space-x-4 px-4">
                            <h4 className="text-lg font-semibold">
                              {machine.collectionName}
                            </h4>
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                              </Button>
                            </CollapsibleTrigger>
                          </div>

                          <div className="rounded-md border px-4 py-2 font-mono text-md shadow-sm flex items-center justify-center whitespace-nowrap">
                            Mints: {machine.itemsRedeemed} of {machine.itemsAvailable}
                          </div>

                          <CollapsibleContent className="space-y-2">
                            <div className="rounded-md border px-4 py-1 font-mono text-md">
                              Wallet mint limit: {machine.candyGuardMinLimit}
                            </div>

                            {/* <div className="rounded-md border px-4 py-1 font-mono text-md">
                              Traits: N/A
                            </div> */}
                            <div className="rounded-md border px-4 py-1 font-mono text-md">

                              <div className="flex items-center justify-center">
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
                                    className="lucide lucide-link text-blue-600 hover:text-blue-400 p-1">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                  </svg>
                                </a>
                                Collection address:
                              </div>
                              <div className="py-1 font-mono text-sm flex items-center justify-center w-full break-all">
                                {machine.collectionMint}
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </span>
                    </Card>
                  </motion.div>

                  <br />

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card >
                      <span className="text-1xl font-semibold">
                        <Collapsible
                          open={isOpenStates[machineIndex + candyMachines.length]}
                          onOpenChange={(isOpen) => {
                            const updatedStates = [...isOpenStates];
                            updatedStates[machineIndex + candyMachines.length] = isOpen;
                            setIsOpenStates(updatedStates);
                          }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between space-x-4 px-4">
                            <h4 className="text-lg font-semibold">
                              Associated Costs
                            </h4>
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                              </Button>
                            </CollapsibleTrigger>
                          </div>

                          <CollapsibleContent className="space-y-2">

                            <div className="rounded-md border px-4 py-2 font-mono text-md shadow-sm flex items-center justify-center whitespace-nowrap">
                              <Image
                                src={solanaLogo}
                                alt="Solana Icon"
                                width={16}
                                height={16}
                                className="mr-1"
                              />
                              SOL {parseFloat(machine.cost).toFixed(4).replace(/\.?0+$/, '')}  (Excluding gas fees)<br />

                            </div>

                            {machine.tokenPaymentAmount > 0 && (
                              <div className="rounded-md border px-4 py-2 font-mono text-md shadow-sm flex items-center justify-center">
                                <Image
                                  src={tokenimg}
                                  alt="Solana Icon"
                                  width={16}
                                  height={16}
                                  className="mr-1"
                                />
                                {machine.tokenPaymentAmount || 0} Candibar Tokens
                              </div>
                            )}

                          </CollapsibleContent>
                        </Collapsible>
                      </span>
                    </Card>
                  </motion.div>
                </div>

              ))}


              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-6">
                {[
                  // { icon: '💎', title: 'Traits', desc: `${'N/A'}` },

                  { icon: '📜', title: 'Description', desc: `${candyMachines[0]?.collectionDetails || 'N/A'}` },

                  {
                    icon: '🔄', title: 'Swap for Candibar Tokens 🔄', desc: (
                      <>
                        {candyMachines[0]?.isSwappable ? (
                          <div>
                            Minted NFTs can swap for Candibar tokens.
                            <br />
                            <Link href="/nftswap" className="text-blue-500 underline ml-2">
                              Swap Here!
                            </Link>
                          </div>
                        ) : (
                          <div>N/A</div>
                        )}
                      </>
                    )
                  }
                ].map((item, index) => (
                    <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 text-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-md transition-transform"
                    >
                    <h3 className="text-xl font-semibold">{item.icon} {item.title}</h3>
                    <p className="mt-2 text-sm sm:text-base break-words max-w-[400px]">
                      {item.desc}
                    </p>
                    </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6">
                ⚡ Grab your Candibar NFT today before it&apos;s gone! ⚡
                {/* 
                <br />    {candyMachines[0]?.candymachineaddress || ''}
                <br />    {paramCollectionaddress || ''} */}

              </motion.div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardDetails;