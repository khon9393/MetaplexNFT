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
      <main>

        <h1 className="text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-400 mb-4">Candibar NFTs - Buy, Trade, and Sell Digital Collectibles</h1>
        <p className="text-center text-2xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-400 mb-4">Find unique NFTs and join the Candibar community.</p>
      </main>
      <HomeView />

      <div className="text-center items-center text-xs text-gray-500 border-t border-gray-500 pt-4">
  <div className="container mx-auto flex justify-center w-full max-w-4xl text-left">
    <table className="">
      <tbody>
        <tr>
          <th className="text-sm font-semibold text-gray-200 pb-2">
            Candibar NFTs - Buy, Trade, and Sell Digital Collectibles
          </th>
        </tr>
        <tr>
          <td className="font-medium text-xs pt-1">Why Choose Candibar NFTs?</td>
        </tr>
        <tr>
          <td className="pt-1">Secure transactions, rare collectibles, and an engaged community.</td>
        </tr>
        <tr>
          <td className="font-medium text-xs pt-3">Explore Our NFT Collections</td>
        </tr>
        <tr>
          <td className="font-semibold text-xs pt-1">Limited Edition Candibar NFTs</td>
        </tr>
        <tr>
          <td className="pt-1">Exclusive and rare NFT drops.</td>
        </tr>
        <tr>
          <td className="font-semibold text-xs pt-1">Trending NFTs</td>
        </tr>
        <tr>
            <td className="pt-1">See what&rsquo;s popular in the Candibar marketplace.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="border-t border-gray-500 pt-4 p-0"></div>
      </div>


  );
};

export default Home;
