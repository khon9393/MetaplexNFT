import { FC, useEffect, useMemo, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { motion } from "framer-motion";
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import Link from "next/link";
import Image from "next/image";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../components/candibar/CardContainer";
import { getCurrentZodiacSignTopN, ZodiacSign } from "../../stores/useCandiZodiacSignsStore";
import tokenimg from '../../../public/images/token.jpg';
import jadeEmperor from '../../../public/images/jadeEmp2.jpeg';
import { LinkIcon } from 'lucide-react';
import SwapDetails from '@/components/candibar/swapCounter/SwapDetails';
import coinGecko from "../../../public/logos/geckoterminal_dark.png";
import Candibardashboard from '@/components/candibar/dashboard/candibardashboard';

export const HomeView: FC = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  const PromotioncandyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05!),
  ], []);

  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[]>([]);

  useEffect(() => {
    const currentSigns = getCurrentZodiacSignTopN(4);
    if (currentSigns) {
      setZodiacSigns(currentSigns);
    }
  }, [setZodiacSigns]);

  useEffect(() => {
    if (wallet.publicKey) {
      getUserSOLBalance(wallet.publicKey);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-purple-700 via-pink-600 to-blue-500 text-center py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to Candibar
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-200">
            Explore and trade unique digital art NFTs on Solana — powered by the official Candibar token.
          </p>
          <div className="mt-6">
            <Link
              href="/explore"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
            >
              Explore NFTs
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Featured Zodiac NFTs */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Featured Zodiac NFTs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {zodiacSigns.length > 0 &&
            zodiacSigns.map((sign, index) => (
              <CardContainer
                key={index}
                candyMachineKeys={[publicKey(sign.machinePublicKey)]}
              />
            ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/AstrologyZodiac"
            className="text-pink-400 hover:underline text-lg"
          >
            View All Zodiac NFTs
          </Link>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Discover the Candibar Platform
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Zodiac Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Zodiac Candi Art NFT</h3>
            <p className="text-gray-300 mb-4">
              Exclusive NFTs available only with Candibar tokens.
            </p>
            <ul className="text-gray-300 text-left list-disc list-inside mb-4">
              <li>
                <Link href="/AstrologyZodiac" className="text-blue-400 hover:underline">
                  Free Candi Zodiac Reading!
                </Link>
              </li>
              <li>Candibar tokens are burned upon redemption for Zodiac NFTs.</li>
              <li>Compatible with leading Solana NFT marketplaces.</li>
              <li>
                Collaborate with collectors in the{' '}
                <a
                  href="https://twitter.com/i/communities/1923819855888908676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  X Candibar Trade Zone Community
                </a>
                .
              </li>
              <li>Complete sets for exclusive rewards on the Candibar platform.</li>
            </ul>
            <Link
              href="/AstrologyZodiac"
              className="text-blue-400 hover:underline inline-flex items-center gap-2"
            >
              <LinkIcon /> Explore Full Collection
            </Link>
          </div>

          {/* Swap Full Collection */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Swap Full Zodiac Collection</h3>
            <p className="text-gray-300 mb-4">
              Exchange your full Zodiac NFT collection for exclusive perks.
            </p>
            <SwapDetails />
            <Link
              href="/nftswap"
              className="text-blue-400 hover:underline inline-flex items-center gap-2 mt-4"
            >
              <LinkIcon /> Trade for 1,200,000 Candi Tokens
            </Link>
          </div>

          {/* Swap Candi NFT */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Swap Candi NFT</h3>
            <p className="text-gray-300 mb-4">
              Trade your unique Candi NFTs with the Jade Emperor for premium benefits.
            </p>
            <Image
              src={jadeEmperor}
              alt="Jade Emperor"
              className="rounded-lg mb-4 object-cover"
              width={400}
              height={400}
            />
            <Link
              href="/nftswap"
              className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-black font-semibold py-2 px-4 rounded-lg"
            >
              Candi Swap
            </Link>
          </div>
        </div>
      </section>

      {/* Token Metrics Section */}
      <section className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Candibar Token Metrics
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center">
              <Image
                src={coinGecko}
                alt="Coin Gecko Logo"
                width={150}
                height={150}
                className="mx-auto"
              />
              <p className="text-gray-300 mt-4">
                Explore Candibar metrics on Gecko Terminal
              </p>
              <a
                href="https://www.geckoterminal.com/solana/pools/64abbHKzpwxKDvG1h7ytY2F4tgS594s8HmBABntjGYme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline"
              >
                View Metrics
              </a>
            </div>
            <div className="text-center">
              <Image
                src={tokenimg}
                alt="Candibar Token"
                width={100}
                height={100}
                className="mx-auto rounded-xl"
              />
              <p className="text-gray-300 mt-4">
                Trade CANDIBAR/SOL on platforms like Raydium, Dexscreener, and Jupiter.
              </p>
              <a
                href="https://raydium.io/swap/?inputMint=sol&outputMint=AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:underline"
              >
                Swap Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Token Burn Metrics */}
      <section className="max-w-7xl mx-auto bg-gray-950 p-8 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Be Part of the Sweet Revolution: Candibar Token Burn
        </h2>
        <p className="text-gray-300 text-center mb-4">
          600 Million Tokens to Burn From a Total Supply of 3 Billion
        </p>
        <Candibardashboard />
      </section>
    </main>
  );
};

export default HomeView;