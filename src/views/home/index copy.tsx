import { FC, useEffect, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

import { ArrowLeft, ArrowRight, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import Link from "next/link";
import Image from "next/image";

const items = [
  { id: 1, name: 'collection', collectionCover: 1, color: 'bg-red-500', text: 'Candi Collection 2025 Cover', titledesc: '🍭 Introducing the Candibar NFT Collection! 🍭', subtitledesc: 'Sugar Rush Starts Now With 1,000 Sweet Opportunities. ', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmPZVgoX9kmpzURvJS98oAhAw1aftQ3fomqzK5V9dR8X69"
    , pageloc: "/Candi" },

  { id: 2, name: 'candi00', color: 'bg-green-500', text: 'Candi Item #1', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmYJ4d44GLtHCvMJQsuTAqznvoDEZZyKmjhgwuEhjWYdpo"
    , pageloc: "/Candi" },

  { id: 3, name: 'candi01', color: 'bg-blue-500', text: 'Candi Item #2', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmdyA45Tw3nfZnUUjgawh9QdpscNgY8sg1nMpe8JME1UmQ"
    , pageloc: "/Candi" },

  { id: 4, name: 'candi02', color: 'bg-yellow-500', text: 'Candi Item #3', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmbjeEgD5aGMgFFpX3MWsvxDxzhGQDT9KCLroB5htgE7Gg"
    , pageloc: "/Candi" },

  { id: 5, name: 'candi03', color: 'bg-purple-500', text: 'Candi Item #4', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmNknJSTgZTuxTkn9RP8HtPxQjeyzo69Eq476juYyym4Tu"
    , pageloc: "/Candi" },

  { id: 6, name: 'collection', collectionCover: 1, color: 'bg-pink-500', text: 'Snake Collection 2025 Cover', titledesc: '🐍 Introducing the Snake Collection 2025! 🐍', subtitledesc: 'A Limited Collection to Celebrate the Year of the Wood Snake!', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmUuMz8Y8wcfvdcQsZFGJK5CTMNFQTC952VQvXXRcNA6C2"
    , pageloc: "/AstrologySign" },

  { id: 7, name: 'snake00', color: 'bg-indigo-500', text: 'Snake Item #1', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmcapCnprSUZGZf37nzb6JGJUDDPcyS1znAoFruVKW4wt6"
    , pageloc: "/AstrologySign" },

  { id: 8, name: 'snake01', color: 'bg-teal-500', text: 'Snake Item #2', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmTFLHTphBCnuhpjW6grPbdCYNtSVcoQXAXobexgwKnKP6" 
    , pageloc: "/AstrologySign" },

  { id: 9, name: 'snake02', color: 'bg-orange-500', text: 'Snake Item #3', 
    image:  "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmVEvqAAJpy1db4C9dLdiTXVyvTXvHUJyZyF8SGw4cRr11"
    , pageloc: "/AstrologySign" },

  { id: 10, name: 'snake03', color: 'bg-gray-500', text: 'Snake Item #4', 
    image: "https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmSqT7h7Q2XwYXUXzCJruSt9aN4EVGEv2VJEoXWAjXbq1u"  
    , pageloc: "/AstrologySign" },
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
  const [isHovered, setIsHovered] = useState(false);

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
      <Carousel setApi={setApi} className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto p-4">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={item.id} className="relative">
              <div className="rounded-lg overflow-hidden"> {/* ✅ Added overflow-hidden */}
                <Card className="overflow-hidden rounded-lg w-full relative">
                  <CardContent className="p-0">
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }} // ✅ Motion effect inside the box
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
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <div className="absolute bottom-15 left-20 right-20 flex justify-between p-5 bg-transparent text-blue-500">
          <CarouselPrevious
            size='lg'
            className="bg-transparent text-blue-500"
          />
          <CarouselNext
            size='lg'
            className="bg-transparent text-blue-500"
          />
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2 p-10">
          {items.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current - 1 ? 'bg-blue-500 scale-125' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>
      </Carousel>





      
    </>
  );
};

export default HomeView;