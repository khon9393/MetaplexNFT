// Next, React
import { FC, useEffect, useRef, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion";

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import Link from "next/link";

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  const [isOpenStates, setIsOpenStates] = useState([false]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <>
      <div className="flex flex-col justify-center items-center py-4">
        <div className="text-3xl font-bold p-2">
          Candibar NFT Collection!
        </div>
        <div className="text-2xl font-bold p-2">
          Announcement {current} of {count}
        </div>
      </div>
      <div className="flex justify-center text-black items-center py-3">

        <div className="max-w-3xl mx-auto p-6 text-center bg-white rounded-lg shadow-lg">
          <Carousel setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <h1 className="text-3xl font-bold text-pink-600">
                  🍭 Introducing the Candibar NFT Collection! 🍭
                </h1>
                <h2 className="text-xl text-pink-400 mt-2">
                  1,000 Sweet Opportunities to Own a Piece of Digital Art on Solana!
                </h2>
                <p className="text-gray-700 mt-4">
                  The <span className="text-pink-600 font-bold">Candibar NFT Collection</span> is here to redefine sweetness in the digital world!
                  This exclusive collection of <span className="text-pink-600 font-bold">1,000 NFTs&nbsp;</span>
                  is your golden ticket to owning a unique piece of digital art and joining a thriving community of passionate enthusiasts.
                </p>
                <h3 className="text-2xl text-pink-600 font-semibold mt-6">🍬 Why Candibar NFTs?</h3>
                <ul className="text-left list-disc list-inside mx-auto text-gray-700 mt-4 space-y-2">
                  <li>
                    <strong>Limited mints:</strong> With only 1,000 NFTs, each Candi is a rare digital collectible designed to stand out in any portfolio.
                  </li>
                  <li>
                    <strong>Built on Solana:</strong> Enjoy blazing-fast transactions, ultra-low fees, and a blockchain ecosystem that prioritizes sustainability and innovation.
                  </li>
                  <li>
                    <strong>Artistic excellence:</strong> Each NFT is a vibrant piece of digital art inspired by the sweet world of candies.
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
              </CarouselItem>
              <CarouselItem>
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
                    className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-bold transition-tra</p>nsform transform hover:scale-105"
                  >
                    💎 Grab your Snake NFT today before it&apos;s gone!
                  </Link>
                </div>
              </CarouselItem>

              <CarouselItem>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center max-w-full md:max-w-4xl mx-auto p-6 sm:p-8 text-center bg-gradient-to-br from-blue-600 to-green-800 text-white rounded-lg shadow-lg"
                >
                  <h1 className="text-3xl sm:text-4xl font-bold">🔄 Swap Candibar NFTs & Tokens Effortlessly! 🔄</h1>
                  <h2 className="text-xl sm:text-2xl mt-2">A seamless exchange between Candibar NFTs and Candibar Tokens</h2>

                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-green-700 rounded-lg shadow-md">
                      <h3 className="text-lg sm:text-xl font-semibold">💎 Convert NFTs to Tokens</h3>
                      <p className="mt-2 text-sm sm:text-base">Easily trade your Candibar NFTs for valuable Candibar Tokens.</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-700 rounded-lg shadow-md">
                      <h3 className="text-lg sm:text-xl font-semibold">🎨 Acquire Exclusive NFTs</h3>
                      <p className="mt-2 text-sm sm:text-base">Limited-edition Candibar NFTs and expand your collection.</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-green-700 rounded-lg shadow-md">
                      <h3 className="text-lg sm:text-xl font-semibold">⚡ Ultra-Fast & Low-Cost</h3>
                      <p className="mt-2 text-sm sm:text-base">Enjoy high-speed transactions and minimal fees, powered by the Solana blockchain.</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-blue-700 rounded-lg shadow-md">
                      <h3 className="text-lg sm:text-xl font-semibold">🌎 Join a Thriving Community</h3>
                      <p className="mt-2 text-sm sm:text-base">Be part of a global network of NFT enthusiasts and traders shaping the future of digital assets.</p>
                    </motion.div>
                  </motion.div>

                  <p className="mt-6 text-base sm:text-lg">Step into the next evolution of digital trading and maximize your NFT potential!</p>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <Link
                      href="/nftswap"
                      className="inline-block bg-yellow-400 text-blue-900 py-2 px-6 rounded-lg font-bold transition-transform transform hover:scale-105"
                    >
                      🚀 Start Trading Candibar NFTs & Tokens Now!
                    </Link>
                  </motion.div>
                </motion.div>
              </CarouselItem>


            </CarouselContent>
            <CarouselPrevious>Previous</CarouselPrevious>
            <CarouselNext>Next</CarouselNext>
          </Carousel>
        </div>
      </div>
    </>
  );
};