// Next, React
import { FC, useEffect, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import Link from "next/link";



export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <div className="">
      <div className="max-w-3xl mx-auto p-6 text-center bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-pink-600">
        🍭 Introducing the Candibar NFT Collection! 🍭
      </h1>
      <h2 className="text-xl text-pink-400 mt-2">
        5,000 Sweet Opportunities to Own a Piece of Digital Art on Solana!
      </h2>
      <p className="text-gray-700 mt-4">
  The <span className="text-pink-600 font-bold">Candibar NFT Collection</span> is here to redefine sweetness in the digital world! 
  This exclusive collection of <span className="text-pink-600 font-bold">5,000 NFTs&nbsp;</span> 
  is your golden ticket to owning a unique piece of digital art and joining a thriving community of passionate enthusiasts.
</p>
<h3 className="text-2xl text-pink-600 font-semibold mt-6">🍬 Why Candibar NFTs?</h3>
<ul className="text-left list-disc list-inside mx-auto text-gray-700 mt-4 space-y-2">
  <li>
    <strong>Limited mints:</strong> With only 5,000 NFTs, each Candibar is a rare digital collectible designed to stand out in any portfolio.
  </li>
  <li>
    <strong>Built on Solana:</strong> Enjoy blazing-fast transactions, ultra-low fees, and a blockchain ecosystem that prioritizes sustainability and innovation.
  </li>
  <li>
    <strong>Exclusive perks:</strong> Candibar NFT holders gain access to special events, community rewards, and early access to future drops.
  </li>
  <li>
    <strong>Artistic excellence:</strong> Each NFT is a vibrant, handcrafted piece of digital art inspired by the sweet world of candies.
  </li>
  <li>
    <strong>Community-driven:</strong> Be part of a passionate community of collectors and enthusiasts, with opportunities to connect, collaborate, and grow together.
  </li>
</ul>
      <p className="text-gray-700 mt-6">
        🚀 <span className="text-pink-600 font-bold">The Candy Rush Starts Now!</span>
      </p>
      <p className="text-gray-700 mt-2">
        Join the start of something extraordinary. Whether you&apos;re an NFT enthusiast, a collector, 
        or a digital art lover, the Candibar NFT Collection is your chance to be part of a sugary revolution.
      </p>
      <div className="mt-6">
        <Link 
          href="/candi0"
          className="inline-block bg-pink-600 text-white py-2 px-6 rounded-lg font-bold transition-transform transform hover:scale-105"
        >
          💎 Grab your Candibar NFT today before it&apos;s gone!
        </Link>
      </div>
      {/* <p className="text-sm text-gray-500 mt-4">
  Powered by cutting-edge AI technology, the <span className="text-pink-600 font-bold">Candibar NFT Collection</span> blends human creativity with artificial intelligence to deliver truly unique digital art and experiences.
</p> */}
    </div>
    <br /><br />
    <div className="max-w-3xl mx-auto p-6 text-center bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-green-600">
      🐍 Introducing the Snake Collection 2025! 🐍
    </h1>
    <h2 className="text-xl text-green-400 mt-2">
      A Limited Collection to Celebrate the Year of the Wood Snake!
    </h2>
    <p className="text-gray-700 mt-4">
      The <span className="text-green-600 font-bold">Snake Collection 2025</span> is here to symbolize transformation, intelligence, and prosperity! 
      This exclusive collection of <span className="text-green-600 font-bold">uniquely crafted NFTs&nbsp;</span> 
      captures the essence of the Snake, embodying intuition, adaptability, and resourcefulness.
    </p>
    <h3 className="text-2xl text-green-600 font-semibold mt-6">🐍 Why Snake Collection 2025?</h3>
    <ul className="text-left list-disc list-inside mx-auto text-gray-700 mt-4 space-y-2">
      <li>
        <strong>Limited Edition:</strong> Only a select number of NFTs, making each piece rare and powerful.
      </li>
      <li>
        <strong>Inspired by the Year of the Wood Snake:</strong> Rooted in the symbolism of the 2025 zodiac, representing wisdom, transformation, and prosperity.
      </li>
      <li>
        <strong>Intuition & Adaptability:</strong> Embodying the Snake&apos;s ability to adapt and transform, these NFTs represent personal growth and renewal.
      </li>
      <li>
        <strong>Exclusive Perks:</strong> Holders will receive access to future collections, exclusive events, and more.
      </li>
    </ul>
    <p className="text-gray-700 mt-6">
      🚀 <span className="text-green-600 font-bold">The Snake&apos;s Transformation Begins Now!</span>
    </p>
    <p className="text-gray-700 mt-2">
      Join the Snake Collection 2025 and embody the spirit of wisdom, adaptability, and prosperity. This is your opportunity to own a piece of a truly transformative NFT experience.
    </p>
    <div className="mt-6">
      <Link
        href="/snake"
        className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold transition-transform transform hover:scale-105"
      >
        💎 Grab your Snake NFT today before it&apos;s gone!
      </Link>
    </div>
    {/* <p className="text-sm text-gray-500 mt-4">
  Powered by cutting-edge AI technology, the <span className="text-green-600 font-bold">Candibar NFT Collection</span> blends human creativity with artificial intelligence to deliver truly unique digital art and experiences.
</p> */}
  </div>

      </div>
  );
};

