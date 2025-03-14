import { FC, useEffect, useMemo, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';


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
      <div className="text-center mt-8 p-5">
        <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }}>

          <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-4">
            <h1 className="text-center text-3xl md:pl-6 font-bold text-black">
              Candibar Promotional NFT Collection
            </h1>
          </div>
          </motion.div>
          <hr className="my-0 border-t-2 border-gray-100" />
          <div className="p-6 text-sm md:text-base lg:text-lg xl:text-xl">
            <h2 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
              Candi NFTs can be exchanged for Candibar Tokens, which can then be used to acquire exclusive collections in the Candibar NFT marketplace.
            </h2>
            <hr className="my-8 border-t-2 border-gray-300" />
            <div>
              <CardContainer candyMachineKeys={PromotioncandyMachineKeys} />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 p-5">
        <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }}>
          <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-4">
            <h1 className="text-center text-3xl md:pl-6 font-bold text-black">
              Exclusive Featured Zodiac Candi Confection Art NFT Collection
            </h1>
          </div> 
          </motion.div>
          <hr className="my-0 border-t-2 border-gray-100" />
          <div className="p-6 text-sm md:text-base lg:text-lg xl:text-xl">
            <h2 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
              Discover our exclusive collections and one-of-a-kind items—available only with Candibar tokens.
            </h2>
            <hr className="my-8 border-t-2 border-gray-300" />
            <h3 className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
              Current Month
            </h3>
            {zodiacSigns.length > 0 && zodiacSigns.map((sign, index) => (
              <CardContainer key={index} candyMachineKeys={[publicKey(sign.publicKey)]} />
            ))}
            <h5 className="text-lg mt-2 md:w-[70%] mx-auto text-center">
              <Link href={"/AstrologyZodiac"} className="text-blue-500 underline">
                Browse Entire Zodiac Collection
              </Link>
            </h5>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 p-5">
        <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        {/* <motion.div whileHover={{ scale: 1.05 }}> */}
          <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-4">
            <h1 className="text-center text-3xl md:pl-6 font-bold text-black">
              Join the Ranks of Our Early Sponsors and Donors
            </h1>
          </div>  
          {/* </motion.div> */}
          <hr className="my-0 border-t-2 border-gray-100" />
            <div className="p-6 text-sm md:text-base lg:text-lg xl:text-xl">
            <h2 className="text-center text-2xl md:pl-6 font-bold text-gray-700 mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
              Join our amazing sponsors and donors who are propelling the Candibar NFT Kickstarter to new heights! Exciting perks are on the way.
              Own one or more Snake Coin NFTs—built on the Solana blockchain—and enjoy well-deserved recognition and appreciation for your support.
            </h2>
            <hr className="my-8 border-t-2 border-gray-300" />
            {/* <Carousel setApi={setApi} className="max-w-[90%] sm:w-full mx-auto p-4">
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem key={item.id} className="relative">
                    <div className="rounded-lg overflow-hidden">
                      <div className="overflow-hidden rounded-lg w-full relative">
                        <div className="p-0">
                          <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-full h-full"
                          >
                            <Image
                              src={item.image}
                              alt={item.text}
                              layout="responsive"
                              objectFit="cover"
                              width={600}
                              height={600}
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
                          <div className="absolute bottom-1 w-full bg-black bg-opacity-50 text-white text-md p-1 text-center rounded-lg">
                            {item.name === "collection" ? (
                              <>
                                {item.text}
                              </>
                            ) : (
                              <>
                                <Link href={item.pageloc}>
                                  <div className="text-white underline">Learn more ...</div>
                                </Link>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-15 left-20 right-20 flex justify-between p-5 bg-transparent text-blue-500">
                <CarouselPrevious size='lg' className="bg-transparent text-blue-500" />
                <CarouselNext size='lg' className="bg-transparent text-blue-500" />
              </div>
              <div className="flex justify-center mt-4 space-x-2 p-10">
                {items.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current - 1 ? 'bg-blue-500 scale-125' : 'bg-gray-400'}`}
                  />
                ))}
              </div>
            </Carousel> */}
          </div>
        </div>
      </div>
      <Carousel setApi={setApi} className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto p-5">
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem key={item.id} className="relative">
                    <div className="rounded-lg overflow-hidden">
                      <div className="overflow-hidden rounded-lg w-full relative">
                        <div className="p-0">
                          <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            // className="w-full h-full"
                          >
                            <Image
                              src={item.image}
                              alt={item.text}
                              layout="responsive"
                              objectFit="cover"
                              width={600}
                              height={600}
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
                          <div className="absolute bottom-1 w-full bg-black bg-opacity-50 text-white text-md p-1 text-center rounded-lg">
                            {item.name === "collection" ? (
                              <>
                                {item.text}
                              </>
                            ) : (
                              <>
                                <Link href={item.pageloc}>
                                  <div className="text-white underline">Learn more ...</div>
                                </Link>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-15 left-20 right-20 flex justify-between p-5 bg-transparent text-blue-500">
                <CarouselPrevious size='lg' className="bg-transparent text-blue-500" />
                <CarouselNext size='lg' className="bg-transparent text-blue-500" />
              </div>
              <div className="flex justify-center mt-4 space-x-2 p-10">
                {items.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current - 1 ? 'bg-blue-500 scale-125' : 'bg-gray-400'}`}
                  />
                ))}
              </div>
            </Carousel>
    </>
  );
};

export default HomeView;