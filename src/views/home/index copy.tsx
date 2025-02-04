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

import Image from 'next/image';

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
          <Carousel setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>

              <CarouselItem className="flex justify-center">
              <div className="flex flex-col items-center justify-center max-w-full md:max-w-4xl mx-auto p-6 sm:p-8 text-center bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-lg shadow-lg">
                  <h1 className="text-2xl sm:text-1xl font-bold">🍭 Introducing the Candibar NFT Collection! 🍭</h1>
                  <h2 className="text-xl sm:text-1xl mt-2">1,000 Sweet Opportunities to Own a Piece of Digital Art on Solana!</h2>

                  <div className="flex justify-center p-4">
                    <Image
                      src={candcollection}
                      alt="Candi Collection"
                      width={500}
                      className='rounded-lg shadow-lg'
                    />
                  </div>

                  <p className="mt-6 text-base sm:text-lg p-2">🚀 The Candy Rush Starts Now!</p>

                  <Link
                    href="/candi0"
                    className="inline-block bg-yellow-400 text-pink-900 py-2 px-6 rounded-lg font-bold transition-transform transform hover:scale-105"
                  >
                    💎 Grab your Candibar NFT today before it&apos;s gone!
                  </Link>
                </div>
              </CarouselItem>

              {[candi00, candi01, candi02, candi03].map((image, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-full md:max-w-4xl mx-auto p-6 sm:p-8 text-center bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-lg shadow-lg">
                    <h1 className="text-2xl sm:text-1xl font-bold">🍬 Candibar NFT #{index + 1} 🍬</h1>
                    <div className="flex justify-center p-4">
                      <Image
                        src={image}
                        alt={`Candi ${index}`}
                        width={500}
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
                      width={500}
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
                        width={500}
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

            </CarouselContent>
            <CarouselPrevious>Previous</CarouselPrevious>
            <CarouselNext>Next</CarouselNext>
          </Carousel>
      
    </>
  );   
};