import { FC, useEffect, useMemo, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import jadeEmperor from '../../../public/images/jadeEmp3.jpeg';

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import Link from "next/link";
import Image from "next/image";

import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../components/candibar/CardContainer";
import { getCurrentZodiacSignTopN, CandiZodiacSigns, ZodiacSign } from "../../stores/useCandiZodiacSignsStore";
import { AnyAaaaRecord } from 'dns';

/*
1. Cotton Candy (Pink & Blue Swirl)
className="text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-400 mb-4"

2. Caramel & Chocolate Swirl (Warm & Rich)
className="text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-brown-600 mb-4"

3. Sour Candy Pop (Bright & Tangy)
className="text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-yellow-500 mb-4"

4. Lollipop Swirl (Rainbow & Fun)
className="text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 mb-4"

5. Grape & Berry Burst (Rich Purples & Blues)
className="text-center text-4xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500 mb-4"

*/


const items = [
  // {
  //   id: 1, name: 'collection', collectionCover: 1, color: 'bg-red-500', text: 'Candi Collection 2025 Cover', titledesc: '🍭 Introducing the Candibar NFT Collection! 🍭', subtitledesc: 'Sugar Rush Starts Now With 1,000 Sweet Opportunities. ',
  //   image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69"
  //   , pageloc: "/Candi"
  // },

  // {
  //   id: 2, name: 'candi00', color: 'bg-green-500', text: 'Candi Item #1',
  //   image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYJ4d44GLtHCvMJQsuTAqznvoDEZZyKmjhgwuEhjWYdpo"
  //   , pageloc: "/Candi"
  // },

  // {
  //   id: 3, name: 'candi01', color: 'bg-blue-500', text: 'Candi Item #2',
  //   image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdyA45Tw3nfZnUUjgawh9QdpscNgY8sg1nMpe8JME1UmQ"
  //   , pageloc: "/Candi"
  // },

  // {
  //   id: 4, name: 'candi02', color: 'bg-yellow-500', text: 'Candi Item #3',
  //   image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbjeEgD5aGMgFFpX3MWsvxDxzhGQDT9KCLroB5htgE7Gg"
  //   , pageloc: "/Candi"
  // },

  // {
  //   id: 5, name: 'candi03', color: 'bg-purple-500', text: 'Candi Item #4',
  //   image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmNknJSTgZTuxTkn9RP8HtPxQjeyzo69Eq476juYyym4Tu"
  //   , pageloc: "/Candi"
  // },

  {
    id: 6, name: 'collection', collectionCover: 1, color: 'bg-pink-500', text: 'Snake Collection 2025 Cover', titledesc: '🐍 Introducing the Snake Collection 2025! 🐍', subtitledesc: 'A Limited Collection to Celebrate the Year of the Wood Snake!',
    image: "/api/image/CandibarImg/Woodsnake/collection_2025_500-xKfCll1tDurgiRl02yLvmHu1ryvJvs.jpg"
    , pageloc: "/AstrologySign"
  },

  {
    id: 7, name: 'snake00', color: 'bg-indigo-500', text: 'Snake Item #1',
    image: "/api/image/CandibarImg/Woodsnake/snake0_2025_500-bJMtUmup4TT8xdikHCLhEcf2a4QiBj.jpg"
    , pageloc: "/AstrologySign"
  },

  {
    id: 8, name: 'snake01', color: 'bg-teal-500', text: 'Snake Item #2',
    image: "/api/image/CandibarImg/Woodsnake/snake1_2025_500-MGjeQCWhDX4auQ7ioZ6a4rN6x6QaMU.jpg"
    , pageloc: "/AstrologySign"
  },

  {
    id: 9, name: 'snake02', color: 'bg-orange-500', text: 'Snake Item #3',
    image: "/api/image/CandibarImg/Woodsnake/snake2_2025_500-cuGv4oWV1r1L9O1BKd5sU6lDOu8SDJ.jpg"
    , pageloc: "/AstrologySign"
  },

  {
    id: 10, name: 'snake03', color: 'bg-gray-500', text: 'Snake Item #4',
    image: "/api/image/CandibarImg/Woodsnake/snake3_2025_500-KgeF1pu8XxUEtF4PKIk2MCwl4jyPRw.jpg"
    , pageloc: "/AstrologySign"
  },
];

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();
  const [isOpenStates, setIsOpenStates] = useState([false]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);


  const PromotioncandyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
  ], []);

  const [zodiacSigns, setZodiacSigns] = useState<ZodiacSign[]>([]);

  useEffect(() => {
    const currentSigns = getCurrentZodiacSignTopN(1);
    if (currentSigns) {
      setZodiacSigns(currentSigns);
    }
  }, []);

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

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

  return (
    <>

      <div className="text-center mt-4 p-2"></div>
      <div className="max-w-7xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <motion.div whileHover={{ scale: 1.02 }}>
          <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4 rounded-lg shadow-lg">
            <h1 className="text-center text-2xl font-bold text-black mb-0">
              Discover the Candibar Platform
            </h1>
            <h2 className="text-md mx-auto text-center">
              <Link href={"/CPAG"} className="text-center text-lg md:pl-6 font-semibold text-black text-gray-900 hover:underline hover:text-gray-100 hover:underline">
                Candibar Platform Asset Guide (CPAG)
              </Link>
            </h2>
          </div>
        </motion.div>
        <hr className="my-0 border-t-2 border-gray-100" />

        <div className="p-4">
          <h6 className="text-center text-2xl font-bold text-black mb-0">

          </h6>
          <h6 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
            {/* Swap your Candi NFTs for Candibar Tokens to access exclusive Candibar NFTs. 
              Join the Candibar Promotional NFT Collection by exchanging Candi NFTs for Candibar Tokens with the Jade Emperor. 
              Explore unique collections and exclusive items available only with Candibar Tokens. */}
            Become part of the sugar rush revolution: a place where digital art and sugar converge.
          </h6>
          <hr className="my-4 border-t-2 border-gray-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center mt-4 p-2">
            <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <motion.div whileHover={{ scale: 1.02 }}>

                <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-2">
                  <h1 className="text-center text-2xl md:pl-4 font-bold text-black">
                    1. Promotional NFT
                  </h1>
                </div>
              </motion.div>
              <hr className="my-0 border-t-2 border-gray-100" />
              <div className="p-4">
                <h2 className="text-center text-lg md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                  Join the Candibar Promotional NFT Collection: Exchange your Candi NFTs for Candibar Tokens.<br />* Swap by visiting the Jade Emperor *
                </h2>
                <hr className="my-6 border-t-2 border-gray-300" />
                <div>
                  <CardContainer candyMachineKeys={PromotioncandyMachineKeys} />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 p-2">
            <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <motion.div whileHover={{ scale: 1.02 }}>

                <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-2">
                  <h1 className="text-center text-2xl md:pl-4 font-bold text-black">
                    2. Swap Candi NFT
                  </h1>
                </div>
              </motion.div>
              <hr className="my-0 border-t-2 border-gray-100" />
              <div className="p-4">
                <h2 className="text-center text-lg md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                  Swap your Candi NFTs with the Jade Emperor to receive Candibar Tokens, which can be used to obtain exclusive Candibar NFTs.
                </h2>
                <hr className="my-6 border-t-2 border-gray-300" />
                <div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <div className="relative w-full h-[480px] rounded-lg overflow-hidden">
                      <Image
                        src={jadeEmperor.src}
                        alt="Jade Emperor"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                      />
                    </div>
                  </motion.div>
                  <Link
                    href="/nftswap"
                    className=" w-full btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                  >
                    <span className='text-lg'>Candi Swap</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 p-2">
            <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <motion.div whileHover={{ scale: 1.02 }}>
                <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-2">
                  <h1 className="text-center text-2xl md:pl-4 font-bold text-black">
                    3. Zodiac Candi Art NFT
                  </h1>
                </div>
              </motion.div>
              <hr className="my-0 border-t-2 border-gray-100" />
              <div className="p-4">
                <h2 className="mb-2 text-center text-lg md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                  Discover our exclusive collections and one-of-a-kind items—available only with Candibar tokens.
                </h2>
                {/* * This Month&apos;s Highlight * */}
                <br />
                <hr className="my-6 border-t-2 border-gray-300" />
                {/* <h3 className="text-center text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                  * This Month&apos;s Highlight *
                </h3> */}

                {zodiacSigns.length > 0 && zodiacSigns.map((sign, index) => (
                  <CardContainer key={index} candyMachineKeys={[publicKey(sign.machinePublicKey)]} />
                ))}

                <h3 className="text-center text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                  * This Month&apos;s Highlight *
                </h3>

                <h6 className="text-lg mx-auto text-center">
                  <Link href={"/AstrologyZodiac"} className="text-blue-500 hover:underline hover:text-gray-100 hover:underline">
                    Explore the Full Zodiac Collection
                  </Link>
                </h6>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8 mt-8">
        <motion.div whileHover={{ scale: 1.02 }}>
          <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4">
            <h1 className="text-center text-2xl md:pl-6 font-bold text-black">
              Join the Ranks of Our Early Sponsors and Donors
            </h1>
          </div>
        </motion.div>
        <hr className="my-0 border-t-2 border-gray-100" />
        <div className="p-4">
          <h2 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
            Join our amazing sponsors and donors who are propelling the Candibar NFT Kickstarter to new heights! Exciting perks are on the way.
            Own one or more Snake Coin NFTs—built on the Solana blockchain—and enjoy well-deserved recognition and appreciation for your support.
          </h2>
          <hr className="my-8 border-t-2 border-gray-300" />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">


            {items.slice(0, 1).map((item) => (
              <div key={item.id} className="flex flex-col items-center relative">
              <motion.div whileHover={{ scale: 1.05 }} className="w-full">
                <Image
                src={item.image}
                alt={item.text}
                layout="responsive"
                objectFit="cover"
                width={300}
                height={300}
                className="rounded-lg"
                />
              </motion.div>
              {item.name === "collection" ? (
                <div className="absolute top-0 w-full bg-black bg-opacity-50 text-white text-md p-1 text-center rounded-lg">
                {item.titledesc}
                <br />
                {item.subtitledesc}
                </div>
              ) : (
                <div className="absolute top-1 right-2 bg-black bg-opacity-50 text-white text-md p-1 text-center rounded-lg">
                {item.text}
                </div>
              )}
              <h3 className="text-xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                {item.text}
              </h3>
              <Link href={item.pageloc}
              className="text-xl text-blue-500 hover:underline hover:text-gray-100 hover:underline mt-2"
              >
                Learn more ...
              </Link>
              </div>
            ))}
            
          </div>
        </div>
      </div>

    </>
  );
};

export default HomeView;