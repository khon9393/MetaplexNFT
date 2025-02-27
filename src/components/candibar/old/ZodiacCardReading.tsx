"use client";

import React, { FC, useEffect, useState } from "react";
import Image from 'next/image';
// import appletouchIcon from "../../../public/zodiacSignsImg/apple-touch-icon.png";
 import Aquarius from "../../../public/zodiacSignsImg/Aquarius.png";

import {
  Button
} from "@/components/ui/button";
import { ChevronsUpDown } from 'lucide-react';
import Link from 'next/link';
import { Card } from "src/components/ui/card";
import { motion } from "framer-motion";
import { NFTStatusTypes } from "@/models/types";
import Head from "next/head";
import HoroscopeModal from "../HoroscopeModal";

const ZodiacCardReading: FC = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

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


      <div className="">


          <div className="p-1">
            <div
              //className="flex-col justify-center mx-auto p-4 sm:p-2 text-center bg-gradient-to-br from-purple-500 to-indigo-800 text-white rounded-2xl shadow-xl min-w-[400px]"
              className="justify-center text-center"
              >
              <h2 className="text-2xl sm:text-2xl font-bold p-1"> Candibar Zodiac Card Reading </h2>
              {/* <p className="text-1xl sm:text-base font-bold p-1"> Get your personalized Zodiac Card Reading and discover what the stars have in store for you! </p> */}
              <h1 className="text-1xl sm:text-base font-bold p-1"> Click on your Zodiac sign below to get your reading! </h1>
                <div className="flex flex-wrap justify-center items-center space-x-3 px-3 p-5 gap-y-3">
                  {["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"].map((sign) => (
                  <Link key={sign} href={`/horoscope/${sign}`}>
                    <span className="block text-center p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition w-32">
                    {sign.charAt(0).toUpperCase() + sign.slice(1)}
                    </span>
                  </Link>
                  ))}
{/* 

                  <Link href="/">
          
                    <Image
                    src={Aquarius}
                    alt="Candibar Logo"
                    className="w-4 h-4 rounded-full mx-auto mt-4"
                    priority
                    width={100}
                    height={100}
                    />
          
                  </Link> */}



                </div>



              </div>
      
              </div>
                   {/* ✅ Show Horoscope Modal When a Sign is Selected */}
                   {selectedSign && <HoroscopeModal sign={selectedSign} isOpen={true} onClose={() => setSelectedSign(null)} />}
      </div>
    </>
  );
};

export default ZodiacCardReading;