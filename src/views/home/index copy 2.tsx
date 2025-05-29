import { FC, useEffect, useMemo, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { publicKey } from '@metaplex-foundation/umi';
import { CardContainer } from '../../components/candibar/CardContainer';
import { getCurrentZodiacSignTopN, ZodiacSign } from '../../stores/useCandiZodiacSignsStore';
import tokenimg from '../../../public/images/token.jpg';
import jadeEmperor from '../../../public/images/jadeEmp2.jpeg';
import coinGecko from '../../../public/logos/geckoterminal_dark.png';
import Candibardashboard from '@/components/candibar/dashboard/candibardashboard';
import useUserSOLBalanceStore from '@/stores/useUserSOLBalanceStore';

export const HomeView: FC = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  const PromotioncandyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05!),
  ], []);

  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[]>([]);

  useEffect(() => {
    const currentSigns = getCurrentZodiacSignTopN(12);
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
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* <Link href="/" className="text-2xl font-bold text-pink-400">
            Candibar
          </Link> */}
        <div className="text-2xl font-bold text-pink-400">
        
          </div>
          <div className="flex items-center gap-6">
            {/* <Link href="/explore" className="text-gray-300 hover:text-pink-400">
              Explore
            </Link>
            <Link href="/collections" className="text-gray-300 hover:text-pink-400">
              Collections
            </Link>
            <Link href="/swap" className="text-gray-300 hover:text-pink-400">
              Swap
            </Link> */}
            <Link href="/dashboard" className="text-gray-300 hover:text-pink-400">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-pink-600 to-blue-500 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to Candibar
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-200">
            Explore and trade unique digital art NFTs on Solana — powered by the official Candibar token.
          </p>
          <div className="mt-6">
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
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Featured NFTs Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Featured Zodiac NFTs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {zodiacSigns.length > 0 &&
            zodiacSigns.map((sign, index) => (
                <div className="px-2 py-2" key={index}>
                <CardContainer 
                  key={index}
                  candyMachineKeys={[publicKey(sign.machinePublicKey)]}
                />
                </div>
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

      {/* Footer */}
      {/* <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Candibar. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              Twitter
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              Discord
            </a>
            <a href="/terms" className="hover:text-pink-400">
              Terms
            </a>
            <a href="/privacy" className="hover:text-pink-400">
              Privacy
            </a>
          </div>
        </div>
      </footer> */}
    </main>
  );
};

export default HomeView;