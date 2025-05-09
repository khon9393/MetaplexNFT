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
          <div className="text-lg md:text-xl font-medium">
            Explore and Trade Unique Digital Art NFTs on Solana — Powered by the Official Candibar Token.
          </div>

          <div className="text-lg md:text-xl font-medium">
            Explore Candibar metrics on Gecko Terminal
          </div>
          <a href="https://www.geckoterminal.com/solana/pools/64abbHKzpwxKDvG1h7ytY2F4tgS594s8HmBABntjGYme" target="_blank" rel="noopener noreferrer" className="mr-4">
            <Image
              src={coinGecko}
              alt="Coin Gecko Logo"
              width={175}
              height={175}
              className="inline-block p-2"
            />
          </a>

          <Image src={tokenimg} alt="Candibar Token" width={100} height={100} className="mx-auto rounded-xl" />

          <div className="flex justify-center items-center gap-2 mt-2">
            <LinkIcon className="text-blue-400" />
            <Link href={`https://solscan.io/token/${process.env.NEXT_PUBLIC_TOKEN}`} target="_blank" className="hover:underline">
              {process.env.NEXT_PUBLIC_TOKEN}
            </Link>
          </div>
          <div className="text-md md:text-lg font-medium py-2 text-gray-300">
            <span>Purchase and exchange CANDIBAR/SOL on platforms like </span>
            <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Raydium</a>,
            <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Dexscreener</a>,
            <a href="https://jup.ag/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Jupiter</a>,
            or directly via the
            <a href="https://solflare.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Solflare wallet</a>.
          </div>
        </div>
      </motion.section>

      {/* Platform Overview */}
      <motion.section
        className="max-w-6xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
            Discover the Candibar Platform
          </h2>
          <p className="text-lg mt-2">Become part of the sugar rush revolution: where digital art meets flavor.</p>
          <Link href="/getstarted" className="inline-flex items-center gap-2 text-blue-300 hover:underline mt-2">
            <LinkIcon /> Getting Started
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 ">

          {/* Promo NFT Card */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md h-[355px]">
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-teal-400">
              Total Circulating Supply
            </h3>
            <div className="text-3xl text-gray-300 mb-4 font-medium p-2">3 Billion</div>
            <div className="line-clamp-1 flex gap-2 font-medium text-gray-200">
              Entire Candibar Token Supply
            </div>
            <hr className="my-6 border-gray-700" />

            <div className="text-gray-300 mb-4">
              2 Billion available for trading (66.67%)
            </div>
            <div className="text-gray-300" >
              1 Billion in platform escrow (33.33%)
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-md h-[355px]">

            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-400">
              🔥 Token Burn Target
            </h3>
            <div className="text-3xl text-gray-300 mb-4 font-medium p-2">600 Million</div>
            <div className="line-clamp-1 flex gap-2 font-medium text-gray-200">
              Represents 20% of the Circulating Supply
            </div>
            <hr className="my-6 border-gray-700" />
            <div className="text-gray-300 mb-4">
              Exchange your Candibar tokens for exclusive NFTs by burning them.
            </div>
            <div className="text-gray-300">
              Token burning helps decrease the total supply, strenghthening the value of remaining tokens.
            </div>
          </div>

          {/* Swap Card */}
          {/* <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Swap Candi NFT</h3>
            <p className="text-lg text-gray-300 mb-[15%]">Trade your unique Candi NFTs with the Jade Emperor to access premium token benefits and rare collectibles.</p>
            <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Image src={jadeEmperor} alt="Jade Emperor" className="rounded-xl mb-4 object-cover h-[450px] w-full" width={600} height={600} />
              </motion.div>
            </motion.div>
            <Link href="/nftswap" className="block w-full text-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-black font-semibold rounded-lg">
              Candi Swap
            </Link>
          </div> */}

          {/* Zodiac Card */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Zodiac Candi Art NFT</h3>
            <p className="text-lg text-gray-300 mb-4">Exclusive NFTs available only with Candibar tokens.</p>
            {zodiacSigns.length > 0 && zodiacSigns.map((sign, index) => (
              <CardContainer key={index} candyMachineKeys={[publicKey(sign.machinePublicKey)]} />
            ))}
            <div className="flex justify-center">
              <Link href="/AstrologyZodiac" className="mt-4 inline-flex items-center gap-2 text-blue-300 hover:underline">
                <LinkIcon /> Explore Full Collection
              </Link>
            </div>
          </div>
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
            <LinkIcon /> Trade a Complete Zodiac Collection for 1,200,000 Candi Tokens
            </Link>
        </div>
      </motion.section>


    </main>
  );
};

export default HomeView;
