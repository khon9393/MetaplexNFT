import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import { motion } from "framer-motion";

const Home: NextPage = (props) => {


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
          <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <motion.div 
             whileHover={{ scale: 1.05 }}>
            <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4">
              <h1 className="text-center text-3xl md:pl-6 font-bold text-black">
                Candibar NFTs - Buy & Trade Digital Collectibles
              </h1>
            </div>
            </motion.div>
            <hr className="my-0 border-t-2 border-gray-100" />
            <div className="p-6">
              <h6 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                Become part of the sugar rush revolution: a place where digital art and sugar converge.
              </h6>
              <hr className="my-4 border-t-2 border-gray-300" />
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
