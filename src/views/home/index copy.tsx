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
import Candibardashboard from '@/components/candibar/dashboard/candibardashboard';

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
  }, [setZodiacSigns]);

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
            <span>Acquire and trade CANDIBAR/SOL on platforms such as </span>
            <a href="https://raydium.io/swap/?inputMint=sol&outputMint=AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Raydium</a>,
            <a href="https://dexscreener.com/solana/afmyy9uivm7z3twx3a8cc8v5jw8fy3escegux6tgny4s" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Dexscreener</a>,
            <a href="https://jup.ag/tokens/AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Jupiter</a>,
            or directly via the Solflare wallet.
          </div>
        </div>
      </motion.section>


{/* <iframe
  src="https://jup.ag/swap/SOL-CANDIBAR"
  width="50%"
  height="800"
  allowFullScreen
  style={{ borderRadius: '12px' }}
></iframe> */}
{/* <button
  onClick={() => window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s', '_blank')}
  style={{
    background: '#8b4513',
    color: 'white',
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer'
  }}
>
  🔥 Buy CANDIBAR Now
</button> */}

      {/* Platform Overview */}
      <motion.section
        className="max-w-8x1 mx-auto space-y-12"
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


          {/* Zodiac Card */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Zodiac Candi Art NFT</h3>
            <div className="text-lg text-gray-300 mb-4">Exclusive NFTs available only with Candibar tokens.</div>

            <ul className="text-lg text-gray-300 mb-4 list-disc list-outside text-left">
                 <li className="text-yellow-400 font-semibold">What&apos;s your sign? <Link href="/AstrologyZodiac" className="text-blue-400 hover:underline">Free Candi Zodiac Reading!</Link></li>
              <li>Candibar tokens are automatically burned 🔥 upon redemption for Zodiac NFTs.</li>
                <li>Each NFT is compatible on leading Solana NFT marketplaces.</li> 
                <li>Collaborate with other collectors in the <a href="https://twitter.com/i/communities/1923819855888908676" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">X Candibar Trade Zone Community</a> to complete your collection.</li>
              <li>Complete NFT sets can be redeemed for exclusive rewards on the Candibar platform. </li>
              
                
            </ul>
            <h3 className="text-xl font-bold">Featured Month:</h3>
            {zodiacSigns.length > 0 && zodiacSigns.map((sign, index) => (
              <CardContainer key={index} candyMachineKeys={[publicKey(sign.machinePublicKey)]} />
            ))}
            <div className="flex justify-center">
              <Link href="/AstrologyZodiac" className="mt-4 inline-flex items-center gap-2 text-blue-300 hover:underline">
              <LinkIcon /> Explore Full Collection
              </Link>
            </div>
            <div className="text-center mt-4"></div>
          </div>

          {/* Swap full collection */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Exchange Your Full Zodiac NFT Collection Tailored To The Current Month&apos;s Sign.</h3>
            <div className="text-lg text-gray-300 mb-4">Complete a set and exchange it for exclusive perks.</div>
            <div className="flex justify-center">
              <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              >
              <SwapDetails />
              </motion.section>
            </div>
            <div className="text-center mt-4">
              <Link href="/nftswap" className="text-blue-400 hover:underline inline-flex items-center gap-2">
              <LinkIcon /> Trade a Complete Zodiac Collection for 1,200,000 Candi Tokens
              </Link>
            </div>
            </div>

            {/* Swap Card */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-2">Swap Candi NFT</h3>
            <p className="text-lg text-gray-300 mb-[15%]">Trade your unique Candi NFTs with the Jade Emperor to access premium token benefits and rare collectibles.</p>
            <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }}>
                <motion.div whileHover={{ scale: 1.02 }} className="flex justify-center">
                <Image src={jadeEmperor} alt="Jade Emperor" className="rounded-xl mb-4 object-cover h-[450px] w-[400px]" width={600} height={600} />
                </motion.div>
            </motion.div>
            <Link href="/nftswap" className="block w-full text-center bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-black font-semibold rounded-lg">
              Candi Swap
            </Link>
          </div>

        </div>
      </motion.section>

      {/* Swap Burn Metrics Section */}
      <motion.section
        className="max-w-7xl mx-auto bg-gray-950 p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-400 to-red-500 text-center mb-6">
          Be Part of the Sweet Revolution: Candibar Token Burn
        </h2>
        {/* <h2 className="text-2xl text-center font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-orange-400 p-3">
            Token burning reduces the overall supply, thereby enhancing the candibar ecosystem.
            </h2> */}
        <div className="text-2xl text-center text-gray-300 mb-4 font-medium p-2">
          600 Million Tokens to Burn From a Total Supply of 3 Billion
        </div>

        <div className="flex justify-center rounded-2xl">
          <Candibardashboard />
        </div>
        <div className="text-center mt-4">
        </div>
      </motion.section>

    </main>
  );
};

export default HomeView;