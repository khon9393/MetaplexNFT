import { FC, useEffect, useState } from 'react';
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
import { ArrowLeft, ArrowRight, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import Link from "next/link";
import Image from "next/image";

const items = [
  { id: 1, name: 'collection', collectionCover: 1, color: 'bg-red-500', text: 'Candi Collection 2025 Cover', titledesc: '🍭 Introducing the Candibar NFT Collection! 🍭', subtitledesc: 'Sugar Rush Starts Now With 1,000 Sweet Opportunities. ', image: candcollection, pageloc: "/candi0" },
  { id: 2, name: 'candi00', color: 'bg-green-500', text: 'Candi Item #1', image: candi00, pageloc: "/candi0" },
  { id: 3, name: 'candi01', color: 'bg-blue-500', text: 'Candi Item #2', image: candi01, pageloc: "/candi0" },
  { id: 4, name: 'candi02', color: 'bg-yellow-500', text: 'Candi Item #3', image: candi02, pageloc: "/candi0" },
  { id: 5, name: 'candi03', color: 'bg-purple-500', text: 'Candi Item #4', image: candi03, pageloc: "/candi0" },
  { id: 6, name: 'collection', collectionCover: 1, color: 'bg-pink-500', text: 'Snake Collection 2025 Cover', titledesc: '🐍 Introducing the Snake Collection 2025! 🐍', subtitledesc: 'A Limited Collection to Celebrate the Year of the Wood Snake!', image: snakecollection, pageloc: "/snake" },
  { id: 7, name: 'snake00', color: 'bg-indigo-500', text: 'Snake Item #1', image: snake00, pageloc: "/snake" },
  { id: 8, name: 'snake01', color: 'bg-teal-500', text: 'Snake Item #2', image: snake01, pageloc: "/snake" },
  { id: 9, name: 'snake02', color: 'bg-orange-500', text: 'Snake Item #3', image: snake02, pageloc: "/snake" },
  { id: 10, name: 'snake03', color: 'bg-gray-500', text: 'Snake Item #4', image: snake03, pageloc: "/snake" },
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
      getUserSOLBalance(wallet.publicKey, connection);
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
      <Carousel setApi={setApi} className="w-full max-w-lg bg-grey-800">
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
                            <div className="text-white underline">Get it now!</div>
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
        <div className="absolute bottom-15 left-12 right-12 flex justify-between p-5 bg-transparent text-blue-500">
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