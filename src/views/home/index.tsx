// Next, React
import { FC, useEffect, useRef, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components

import Autoplay from "embla-carousel-autoplay"
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { ArrowLeft, ArrowRight, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import Poppup1 from "@/components/candibar/FirstVisitModal"

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

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';


const items = [
  { id: 1, 
    name: 'candcollection',
    collectionCover:1, 
    color: 'bg-red-500', 
    text: 'Candi Collection 2025 Cover', 
    titledesc: '🍭 Introducing the Candibar NFT Collection! 🍭',
    subtitledesc: '1,000 Sweet Opportunities. Sugar rush starts now!',
    image: candcollection, 
    pageloc:"/candi0" },
  { id: 2, name: 'candi00', color: 'bg-green-500', text: 'Candi Item #1', image: candi00, pageloc:"/candi0" }, 
  { id: 3, name: 'candi01', color: 'bg-blue-500', text: 'Candi Item #2', image: candi01, pageloc:"/candi0" },
  { id: 4, name: 'candi02', color: 'bg-yellow-500', text: 'Candi Item #3', image: candi02, pageloc:"/candi0" },
  { id: 5, name: 'candi03', color: 'bg-purple-500', text: 'Candi Item #4', image: candi03, pageloc:"/candi0" },

  { id: 6, 
    name: 'snakecollection', 
    collectionCover:1, 
    color: 'bg-pink-500', 
    text: 'Snake Collection 2025 Cover', 
    titledesc: '🐍 Introducing the Snake Collection 2025! 🐍',
    subtitledesc: 'A Limited Collection to Celebrate the Year of the Wood Snake!',
    image: snakecollection, 
    pageloc:"/snake" },
  { id: 7, name: 'snake00', color: 'bg-indigo-500', text: 'Snake Item #1', image: snake00, pageloc:"/snake" },
  { id: 8, name: 'snake01', color: 'bg-teal-500', text: 'Snake Item #2', image: snake01, pageloc:"/snake" },
  { id: 9, name: 'snake02', color: 'bg-orange-500', text: 'Snake Item #3', image: snake02, pageloc:"/snake" },
  { id: 10, name: 'snake03', color: 'bg-gray-500', text: 'Snake Item #4', image: snake03, pageloc:"/snake" },
];



export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (direction === 'right' && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )


  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
<div className="">

  <div className="w-[500px] mx-auto py-8 text-center">

    <div className="w-[480px] mx-auto py-4 text-center">
    <h1 className="text-1xl sm:text-2xl font-bold">✨ Candibar NFT Collection! ✨</h1>
    <h2 className="text-xl sm:text-1xl mt-2">Own a Piece of Digital Art Built on Solana!</h2>
    </div>

    <div
      {...handlers}
      className="w-full h-[480px] relative border-4 border-gray-300 rounded-2xl shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={items[currentIndex].id}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.4 }}
          //className={`w-full h-full ${items[currentIndex].color} flex items-center justify-center text-white text-2xl font-bold rounded-2xl`}
        >
          <Image
            src={items[currentIndex].image}
            alt={items[currentIndex].text}
            layout="fill"
            objectFit="cover"
          />

           
            
            {items[currentIndex].collectionCover ? (
               <div className="absolute top-0 w-full bg-black bg-opacity-50 text-white text-xs p-1 text-center">
              {items[currentIndex].titledesc}
              <br/>
              {items[currentIndex].subtitledesc}
              <br/>
              {items[currentIndex].text}
              </div>
            ) : (
              <div className="absolute top-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 text-center">
              {items[currentIndex].text}
              </div>
            )}


          

          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-xs p-1 text-center">
            <Link href={items[currentIndex].pageloc}>
              <div className="text-white underline">Get it now!</div>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      {currentIndex > 0 && (
        <div
          onClick={() => handleSwipe('right')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 bg-white/50 rounded-full hover:bg-white transition"
        >
          {isHovered ? (
            <ChevronLeftCircle className="w-6 h-6 text-blue-500" />
          ) : (
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          )}
        </div>
      )}

      {/* Right Arrow */}
      {currentIndex < items.length - 1 && (
        <div
          onClick={() => handleSwipe('left')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 bg-white/50 rounded-full hover:bg-white transition"
        >
          {isHovered ? (
            <ChevronRightCircle className="w-6 h-6 text-blue-500" />
          ) : (
            <ArrowRight className="w-5 h-5 text-gray-700" />
          )}
        </div>
      )}
    </div>

    {/* Dots Indicator */}
    <div className="flex justify-center mt-4 space-x-2">
      {items.map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
            currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-400'
          }`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  </div>
</div>
  );
};