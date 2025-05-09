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

const items = [
  {
    id: 1,
    name: 'collection',
    text: 'Snake Collection 2025 Cover',
    titledesc: '🐍 Introducing the Snake Collection 2025! 🐍',
    subtitledesc: 'A Limited Collection to Celebrate the Year of the Wood Snake!',
    image: "/api/image/CandibarImg/Woodsnake/collection_2025_500-xKfCll1tDurgiRl02yLvmHu1ryvJvs.jpg",
    pageloc: "/AstrologySign",
  },
];

export const HomeView: FC = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  const PromotioncandyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05!),
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
      getUserSOLBalance(wallet.publicKey);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <main className="space-y-20 px-4 md:px-12 py-10">
      {/* Hero Section */}
      <motion.section
        className="max-w-4xl mx-auto bg-gray-950 text-white rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-400 to-blue-400">
            Welcome to Candibar
          </h1>


          <Image src={tokenimg} alt="Candibar Token" width={100} height={100} className="mx-auto rounded-xl" />



        </div>
        
      </motion.section>



      {/* Swap Details Section */}
      <motion.section
        className="max-w-4xl mx-auto bg-gray-950 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
          Swap Full Zodiac Collection Set
        </h2>
        <p className="text-lg text-center mb-6">Exchange your Full Zodiac NFT Collection Set for exciting rewards tailored to the current month&apos;s sign!</p>
        <p className="text-lg text-center mb-6">Complete a full set of Zodiac NFTs from the same sign and trade them for exclusive benefits.</p>
        <div className="flex justify-center">
          <SwapDetails />
        </div>
        <div className="text-center mt-4">

          <Link href="/nftswap" className="text-blue-400 hover:underline inline-flex items-center gap-2">
            <LinkIcon /> Swap Full Zodiac Collection Set for 1,200,000 Candi Tokens
          </Link>
        </div>
      </motion.section>


    </main>
  );
};

export default HomeView;
