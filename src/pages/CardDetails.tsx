"use client";

import React, { FC, useEffect, useState } from "react";
import Image from 'next/image';

import { getCollection } from "../stores/useCandibardataStorefromDB";
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
import { NFTStatusTypes } from "@/models/types";
import Head from "next/head";
import { ZodiacReading } from "@/components/candibar/ZodiacReader/ZodiacReading";
import { ZodiacReadingDrawerWindow } from "@/components/candibar/ZodiacReader/ZodiacReadingDrawerWindow";
import SwapCounter from "@/components/candibar/swapCounter/SwapCounter";
import SwapDetails from "@/components/candibar/swapCounter/SwapDetails";

const CardDetails: FC = () => {

  const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;

  const [isOpenStates, setIsOpenStates] = useState([true, true]);
  const [selectedImage, setSelectedImage] = useState('');

  const [balances, setBalances] = useState([]);
  const [collectionData, setCollectionData] = useState(null);

  const [paramCollectionaddress, setParamCollectionaddress] = useState(null);
  const [paramuserZodiacName, setparamuserZodiacName] = useState(null);
  const [paramuserZodiacYear, setparamuserZodiacYear] = useState(null);
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setParamCollectionaddress(parsedData.collectionMint);
    }

    const storedZodicaDataName = sessionStorage.getItem("userZodiacName");
    if (storedZodicaDataName) {
      const parsedData = JSON.parse(storedZodicaDataName);
      setparamuserZodiacName(parsedData.userZodiacName);
    }

    const storedZodicaDataYear = sessionStorage.getItem("userZodiacYear");
    if (storedZodicaDataYear) {
      const parsedData = JSON.parse(storedZodicaDataYear);

      if (parsedData.userZodiacYear === '2025') {
        setparamuserZodiacYear("Year of the woodsnake 2025")
      }
    }

  }, [setParamCollectionaddress, paramuserZodiacName, paramuserZodiacYear]);

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
          // ? [...collectionData.images, { name: collectionData.collectionname, url: collectionData.collectionurl, iscollectioncover: true }]
          ? [{ name: collectionData.collectionname, url: collectionData.collectionurl, iscollectioncover: true }, ...collectionData.images]
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
          collectionCoverName: collectionData.collectionname,
          collectionDetails: collectionData.collectiondetails,
          collectionCandibarValue: collectionData.collectioncandibarvalue,
          collectionStatus: collectionData.collectionstatus as NFTStatusTypes,
          isSwappable: collectionData.isswappable,
          tokenPaymentAmount: balance.tokenPaymentAmount,
        };
      }
      return null;
    }).filter(Boolean);

    setCandyMachines(updatedCandyMachines);
  }, [balances, collectionData]);

  return (
    <>
      <Head>
        <title>Candibarnft.com - Discover and Mint Exclusive NFTs</title>
        <meta
          name="description"
          content="Explore Candibarnft.io to discover, mint, and trade exclusive NFTs. Join our community and be part of the next big thing in the NFT world."
        />
        <meta name="keywords" content="NFT, Candibar, Mint, Trade, Exclusive NFTs, Blockchain, Crypto" />
        <meta name="author" content="Candibarnft.io" />
        <meta property="og:title" content="Candibarnft.io - Discover and Mint Exclusive NFTs" />
        <meta property="og:description" content="Explore Candibarnft.io to discover, mint, and trade exclusive NFTs. Join our community and be part of the next big thing in the NFT world." />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://candibarnft.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibarnft.io - Discover and Mint Exclusive NFTs" />
        <meta name="twitter:description" content="Explore Candibarnft.io to discover, mint, and trade exclusive NFTs. Join our community and be part of the next big thing in the NFT world." />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>
      <div className="flex flex-col md:flex-row gap-4 mt-4 pl-0 pr-0 justify-center"

      >



        {/* Begin - Left Side Details Section */}

        <div className="w-full md:w-1/2 max-w-[600px] min-w-[400px]" >
          <div className="p-1" >

            {/* Begin - Large Image Section */}
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
                            whileHover={{ scale: 1.02 }}
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
                            {
                              selectedImage === machine.images.find((img) => img.iscollectioncover)?.url
                                ? `Collection Cover: ${machine.collectionCoverName}`
                                : machine.images.find((img) => img.url === selectedImage)?.name || `Candibar Item`}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </span>
                </Card>
              </div>
            ))}
            {/* End - Large Image Section */}

            {/* Begin - Small Image Section */}

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
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* End - Small Image Section */}

            {/* Begin - Minting Button compoenent Section */}

            {candyMachines[0]?.images.length > 0 ? (
              <div className="p-4">
                {candyMachines[0]?.itemsRedeemed !== candyMachines[0]?.itemsAvailable &&
                  candyMachines[0]?.collectionStatus === NFTStatusTypes.Available &&
                  (
                    <div>
                      <CandiMinter
                        candyMachineaddress={candyMachines[0]?.candymachineaddress || ''}
                        collectionaddress={candyMachines[0]?.collectionMint || ''}
                        buttonText={candyMachines[0]?.images.filter(img => !img.iscollectioncover).length > 1 ? "Mint Random NFT" : ""}
                      />
                    </div>
                  )}
              </div>
            ) : (
              <h1>Item not Found.</h1>
            )}


            {/* End - Minting Button compoenent Section */}

          </div>
        </div>
        {/* End - Left Side Details Section */}


        {/* Begin - Right Side Details Section */}
         <motion.div whileInView={{ opacity: 1, y: 0, scale: [.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-4 p-2">
        <div className="max-w-[500px]">
          {candyMachines[0]?.images.length > 0 && (
            <div className="p-1">
              <div className="flex-col justify-center mx-auto p-4 sm:p-4 text-center bg-gradient-to-br from-purple-500 to-indigo-800 text-white rounded-2xl shadow-xl">
                <h1 className="text-1xl sm:text-2xl font-bold p-3"> CANDIBAR NFT DETAILS </h1>

                {candyMachines.map((machine, machineIndex) => (
                  <div key={machine.id} >

                    <motion.div
                      whileHover={{ scale: 1.02 }}
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

                            <div className="rounded-md border py-1 font-mono text-md shadow-sm flex items-center justify-center whitespace-nowrap">
                              Minted: {machine.itemsRedeemed} of {machine.itemsAvailable}
                            </div>

                            <CollapsibleContent className="space-y-1">
                              <div className="rounded-md border py-1 font-mono text-md">
                                Wallet mint limit: {machine.candyGuardMinLimit}
                              </div>

                              {/* <div className="rounded-md border px-4 py-1 font-mono text-md">
                              Traits: N/A
                            </div> */}
                              <div className="rounded-md border py-1 font-mono text-md">

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
                      whileHover={{ scale: 1.02 }}
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
                            className="space-y-1"
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

                            <CollapsibleContent className="space-y-1">

                              <div className="rounded-md border py-1 font-mono text-md shadow-sm flex items-center justify-center whitespace-nowrap">
                                <Image
                                  src={solanaLogo}
                                  alt="Solana Icon"
                                  width={16}
                                  height={16}
                                  className="mr-1"
                                />
                                {parseFloat(machine.cost).toFixed(4).replace(/\.?0+$/, '')} SOL (excl. txn fees)
                              </div>

                              {machine.tokenPaymentAmount > 0 && (
                                <div className="rounded-md border py-1 font-mono text-md shadow-sm flex items-center justify-center">
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


                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
                  {[
                    // { icon: '💎', title: 'Traits', desc: `${'N/A'}` },

                    { icon: '📜', title: 'Description', desc: `${candyMachines[0]?.collectionDetails || 'N/A'}` },

                    // {
                    //   icon: '🔄', title: 'Swap for Candibar Tokens 🔄', desc: (
                    //     <>
                    //       {candyMachines[0]?.isSwappable ? (
                    //         <div>
                    //           Minted NFTs can swap for Candibar tokens.
                    //           <br />
                    //           <Link href="/nftswap" className="text-blue-500 underline ml-2">
                    //             Swap Here!
                    //           </Link>
                    //         </div>
                    //       ) : (
                    //         <div>N/A</div>
                    //       )}
                    //     </>
                    //   )
                    // },

                    (paramuserZodiacName || paramuserZodiacYear)
                    && {
                      icon: '🔮',
                      title: 'Candi Zodiac Reading',
                      desc: (
                        <>
                          {/* Discover your zodiac reading and how it aligns with your astrological sign and candy inspiration.
                        <br /> */}
                          <div className="p-2">
                            {/* <ZodiacReading sign={paramuserZodiacName || paramuserZodiacYear} /> */}
                            <ZodiacReadingDrawerWindow sign={paramuserZodiacName || paramuserZodiacYear} />
                          </div>
                          {/* <div className="p-2">
                            <p>Your candy inspiration for this sign is:</p>
                            <p className="font-bold">{paramuserZodiacName ? `Candy inspired by ${paramuserZodiacName}` : `Candy inspired by ${paramuserZodiacYear}`}</p>
                          </div> */}
                        </>
                        )
                      },
                      {
                        icon: '📘', title: 'Candibar NFT Asset List', desc: (
                        <>
                                <Link href="/CPAG" className="text-blue-500 underline ml-1" target="_blank" rel="noopener noreferrer">
                                (CPAG)
                                </Link>
                        </>
                      )
                    },
                  ].filter(Boolean).map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 text-md bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-xl shadow-md transition-transform"
                    >
                      <h3 className="text-xl font-semibold">{item.icon} {item.title}</h3>
                      <p className="mt-2 text-1xl sm:text-1xl break-words ">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* <motion.div 
             whileHover={{ scale: 1.05 }}
             className="p-5 mt-4 text-md bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-xl shadow-md transition-transform"
           >
            <h3 className="text-lg font-semibold">Trade your Zodiac NFTs based on the current month to complete a full set! </h3>
            </motion.div> */}

                <motion.div className="mt-6">
                  ⚡ Grab your Candibar NFT today before it&apos;s gone! ⚡
                </motion.div>
                {candyMachines[0]?.images.some(img => img.iscollectioncover) && (
                  <motion.div className="mt-2 text-1xl sm:text-1xl break-words">
                    Note: Currently, The Collection Cover is not included for minting but will be available separately at a later date.
                  </motion.div>
                )}


              </div>
            </div>
          )}


        </div>
        </motion.div>
        {/* {(paramuserZodiacName || paramuserZodiacYear) && <SwapDetails />} */}
      </div>


    </>
  );
};

export default CardDetails;