"use client";

import React, { FC, useEffect, useState } from "react";
import Image from 'next/image';


import { publicKey } from '@metaplex-foundation/umi';

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
import { motion } from "framer-motion";
import { NFTStatusTypes } from "@/models/types";
import Head from "next/head";
import { ZodiacReadingDrawerWindow } from "@/components/candibar/ZodiacReader/ZodiacReadingDrawerWindow";
import SwapCounter from "@/components/candibar/swapCounter/SwapCounter";

const SwapDetails: FC = () => {

  return (
    <>
<<<<<<< HEAD
      <div className="max-w-[500px]">
        <div className="p-1">
          <div className="flex-col justify-center mx-auto p-4 sm:p-6 text-center bg-gradient-to-br from-purple-500 to-indigo-800 text-white rounded-2xl shadow-xl">
            <h1 className="text-1xl sm:text-2xl font-bold p-3"> Swap the Entire Zodiac Collection</h1>
=======
      <div className="max-w-[520px]">
        <div className="p-1">
          <div className="flex-col justify-center mx-auto p-4 sm:p-6 text-center bg-gradient-to-br from-purple-500 to-indigo-800 text-white rounded-2xl shadow-xl">
            <h1 className="text-1xl sm:text-2xl font-bold p-3"> Swap the Entire Zodiac Collection Set</h1>
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
            {/* <motion.div 
             whileHover={{ scale: 1.02 }}
             className="p-5 text-md bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-xl shadow-md transition-transform"
           >
            <h3 className="text-lg font-semibold">Trade your Zodiac NFTs based on the current month to complete a full set! </h3>
            </motion.div> */}
            <h1 className="text-lg sm:text-1xl font-bold mb-3">  </h1>
            <SwapCounter />
              <br />
            {/* <motion.div 
             whileHover={{ scale: 1.05 }}
             className="p-5 text-md bg-white dark:bg-black text-gray-900 dark:text-gray-100 rounded-xl shadow-md transition-transform"
           >
            <h3 className="text-lg font-semibold">🔄 Begin your Candibar NFT swap today! 🔄</h3>
              <p>
                <Link href="/nftswap" className="text-blue-500 underline ml-2">
                Swap Here!
              </Link>
              N/A
              </p>
            </motion.div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapDetails;