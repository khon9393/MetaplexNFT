import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

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

        <h1 className="p-3 text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-400 mb-4">
          Candibar NFTs - Buy, Trade, and Sell Digital Collectibles
          </h1>
        <h6 className="text-center text-2xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-400 mb-4">
        Become part of the sugar rush revolution: a place where digital art and sugar converge.
          </h6>
      </main>
      <HomeView />

<div className="border-t border-gray-500 pt-4 p-0"></div>
      </div>


  );
};

export default Home;
