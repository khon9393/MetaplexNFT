import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {


  return (
    <div>
      <Head>
        <title>Candibarnft.com – Discover and collect unique NFTs on Candibar. Explore digital art and blockchain collectibles. Buy, sell, and trade exclusive NFTs with ease. Experience the future of digital ownership and creativity with Candibar NFT Marketplace.</title>
        <meta name="description" content="Discover and collect unique NFTs on Candibar. Join our community and explore the world of digital art and collectibles." />
        <meta name="keywords" content="NFT, Candibar, digital art, collectibles, blockchain, crypto" />
        <meta name="author" content="Candibar Team" />
        <meta property="og:title" content="Candibar NFT" />
        <meta property="og:description" content="Discover and collect unique NFTs on Candibar. Join our community and explore the world of digital art and collectibles." />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.candibar.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibar NFT" />
        <meta name="twitter:description" content="Discover and collect unique NFTs on Candibar. Join our community and explore the world of digital art and collectibles." />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>
      <HomeView />
    </div>
   
  );
};

export default Home;
