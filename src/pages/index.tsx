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
      </main>
      <HomeView />
      <div className="border-t border-gray-500 pt-4 p-0"></div>
    </div>
  );
};

export default Home;
