import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import { motion } from "framer-motion";
import Image from "next/image";
import tokenimg from '../../public/images/token.jpg';
import { getExplorerUrl } from "@/utils/explorer";

const Home: NextPage = (props) => {
  const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
  const tokenMint = process.env.NEXT_PUBLIC_TOKEN;

  return (
    <div>
      <Head>
        <title>Candibarnft.com: Unique NFTs, Digital Art & Collectibles</title>
        <meta name="description" content="Discover and collect unique NFTs on Candibar. Join our community and explore the world of digital art and collectibles." />
        <meta name="keywords" content="NFT, Candibar, digital art, collectibles, blockchain, crypto" />
        <meta name="author" content="Candibar Team" />
        <meta property="og:title" content="Candibar NFT" />``
        <meta property="og:description" content="Discover and collect unique NFTs on Candibar. Join our community and explore the world of digital art and collectibles." />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.candibar.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibar NFT" />
        <meta name="twitter:description" content="Discover and collect unique NFTs on Candibar. Join our community and explore the world of digital art and collectibles." />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>
      <main>
        <div className="text-center mt-8 p-5">
          <div className="max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.02 }}>
              <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4">
                <h1 className="text-center text-2xl md:pl-6 font-bold text-black">
                  Welcome to Candibar
                </h1>
                <p className="text-center text-lg md:pl-6 font-semibold text-black">
                Buy & Trade Unique NFTs and Digital Art on the Solana Blockchain. 
                </p>
              </div>
            </motion.div>
            <hr className="my-0 border-t-2 border-gray-100" />
            <div className="p-6">
              <h6 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                A Sweet Haven for NFT Enthusiasts, Digital Art Lovers, and Home to the Official Candibar SPL Token
              </h6>
              <hr className="my-4 border-t-2 border-gray-300" />
              <div className="flex justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    src={tokenimg.src}
                    alt="Candibar Token"
                    width={200}
                    height={200}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href={'https://solscan.io/token/AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s'}
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
                <div className="text-xs ml-2 sm:text-lg word-break-all word-wrap">
                AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <HomeView />
      <div className="border-t border-gray-500 pt-4 p-0"></div>
    </div>


  );
};

export default Home;
