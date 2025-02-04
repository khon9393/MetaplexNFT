// Next, React
import { FC, useEffect, useRef, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import candcollection from "../../../public/2025_Candi0/collection_01_500.jpg";
import candi00 from "../../../public/2025_Candi0/candi_00_500.jpg";
import candi01 from "../../../public/2025_Candi0/candi_01_500.jpg";
import candi02 from "../../../public/2025_Candi0/candi_02_500.jpg";
import candi03 from "../../../public/2025_Candi0/candi_03_500.jpg";

import snakecollection from "../../../public/2025/collection_2025_500.jpg";
import snake00 from "../../../public/2025/snake0_2025_500.jpg";
import snake01 from "../../../public/2025/snake1_2025_500.jpg";
import snake02 from "../../../public/2025/snake2_2025_500.jpg";
import snake03 from "../../../public/2025/snake3_2025_500.jpg";

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
import Image from "next/image";

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

            <CarouselItem className="flex justify-center">
            <div className="flex flex-col items-center justify-center max-w-full md:max-w-4xl mx-auto p-6 sm:p-8 text-center bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-lg shadow-lg">
                  <h1 className="text-2xl sm:text-4xl font-bold">🍭 Introducing the Candibar NFT Collection! 🍭</h1>
                  <h2 className="text-xl sm:text-2xl mt-2">1,000 Sweet Opportunities to Own a Piece of Digital Art on Solana!</h2>

                  <div className="flex justify-center p-4">
                    <Image
                      src={candcollection}
                      alt="Candi Collection"
                      width={450}
                      className='rounded-lg shadow-lg'
                    />
                  </div>

                  <p className="mt-6 text-base sm:text-lg">🚀 The Candy Rush Starts Now!</p>

                    <Link
                      href="/candi0"
                      className="inline-block bg-yellow-400 text-pink-900 py-2 px-6 rounded-lg font-bold transition-transform transform hover:scale-105"
                    >
                      💎 Grab your Candibar NFT today before it&apos;s gone!
                    </Link>
                    </div>
              </CarouselItem >

              {[candi00, candi01, candi02, candi03].map((image, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-full md:max-w-4xl mx-auto p-6 sm:p-8 text-center bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-lg shadow-lg">
                    <h1 className="text-2xl sm:text-1xl font-bold">🍬 Candibar NFT #{index + 1} 🍬</h1>
                    <div className="flex justify-center p-4">
                      <Image
                        src={image}
                        alt={`Candi ${index}`}
                        width={450}
                        className='flex rounded-lg shadow-lg'
                      />
                    </div>
                    <p className="mt-6 text-base sm:text-lg  p-2">🚀 Own this unique piece of digital art!</p>
                    <Link
                      href={`/candi0`}
                      className="inline-block bg-yellow-400 text-pink-900 py-2 px-6 rounded-lg font-bold transition-transform transform hover:scale-105"
                    >
                      💎 Grab your Candibar NFT today!
                    </Link>
                  </div>
                </CarouselItem>
              ))}
             <CarouselItem  className="flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-full md:max-w-4xl mx-auto p-6 sm:p-8 text-center bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg shadow-lg">
                  <h1 className="text-2xl sm:text-1xl font-bold">🐍 Introducing the Snake Collection 2025! 🐍</h1>
                  <h2 className="text-xl sm:text-1xl mt-2">A Limited Collection to Celebrate the Year of the Wood Snake!</h2>

                  <div className="flex justify-center p-4">
                    <Image
                      src={snakecollection}
                      alt="Candi Collection"
                      width={450}
                      className='flex rounded-lg shadow-lg'
                    />
                  </div>

                  <p className="mt-6 text-base sm:text-lg  p-2">🚀 The Snake&apos;s Transformation Begins Now!</p>

                  <Link
                    href="/snake"
                    className="inline-block bg-yellow-400 text-green-900 py-2 px-6 rounded-lg font-bold transition-transform transform hover:scale-105"
                  >
                    💎 Grab your Snake NFT today before it&apos;s gone!
                  </Link>

                </div>
              </CarouselItem>

              {[snake00, snake01, snake02, snake03].map((image, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-full md:max-w-4xl mx-auto p-6 sm:p-8 text-center bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg shadow-lg">
                    <h1 className="text-2xl sm:text-1xl font-bold">🐍 Snake NFT #{index + 1} 🐍</h1>
                    <div className="flex justify-center p-4">
                      <Image
                        src={image}
                        alt={`Snake ${index}`}
                        width={450}
                        className='flex rounded-lg shadow-lg'
                      />
                    </div>
                    <p className="mt-6 text-base sm:text-lg  p-2">🚀 Own this unique piece of digital art!</p>
                    <Link
                      href={`/snake`}
                      className="inline-block bg-yellow-400 text-green-900 py-2 px-6 rounded-lg font-bold transition-transform transform hover:scale-105"
                    >
                      💎 Grab your Snake NFT today!
                    </Link>
                  </div>
                </CarouselItem>
              ))}

<CarouselItem>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center max-w-full md:max-w-4xl mx-auto p-6 sm:p-8 text-center bg-gradient-to-br from-blue-600 to-green-800 text-white rounded-lg shadow-lg"
                >
                  <h1 className="text-2xl sm:text-4xl font-bold">🔄 Swap Candibar NFTs & Tokens Effortlessly! 🔄</h1>
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