import { FC, useEffect, useMemo, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import jadeEmperor from '../../../public/images/jadeEmp2.jpeg';
import { motion } from "framer-motion";
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import Link from "next/link";
import Image from "next/image";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../components/candibar/CardContainer";
import { getCurrentZodiacSignTopN, ZodiacSign } from "../../stores/useCandiZodiacSignsStore";
import tokenimg from '../../../public/images/token.jpg';
import { LinkIcon } from 'lucide-react';
import SwapDetails from '@/components/candibar/swapCounter/SwapDetails';

const items = [
  {
    id: 1, name: 'collection', collectionCover: 1, color: 'bg-pink-500', text: 'Snake Collection 2025 Cover', titledesc: '🐍 Introducing the Snake Collection 2025! 🐍', subtitledesc: 'A Limited Collection to Celebrate the Year of the Wood Snake!',
    image: "/api/image/CandibarImg/Woodsnake/collection_2025_500-xKfCll1tDurgiRl02yLvmHu1ryvJvs.jpg"
    , pageloc: "/AstrologySign"
  },
];

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const { getUserSOLBalance } = useUserSOLBalanceStore();

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

  return (
    <>

      {/* start content 1 */}
      <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-8 p-[3%] mb-8">
        <div className="max-w-lg mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4">
              <h1 className="text-center text-2xl md:pl-6 font-bold text-black">
                Welcome to Candibar
              </h1>
              <p className="text-center text-lg md:pl-6 font-semibold text-black">
                Buy & Trade Unique Digital Art NFTs on the Solana Blockchain.
              </p>
            </div>
          </motion.div>
          <hr className="my-0 border-t-2 border-gray-100" />
          <div className="p-6">
            <h6 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
              A Sweet Haven for NFT Enthusiasts, Digital Art Lovers, and Home to the Official Candibar SPL Token
            </h6>
            <hr className="my-4 border-t-2 border-gray-300" />
            <div className="flex justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }}>

                <motion.div
                  whileInView={{
                    scale: [.8, .9, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                  }}
                >

                  <Image
                    src={tokenimg.src}
                    alt="Candibar Token"
                    width={75}
                    height={100}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </motion.div>


            </div>
            <div className="flex items-center justify-center">
              <LinkIcon
                height={24}
                width={24}
                className="text-blue-600 hover:text-blue-400 p-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Link
                href={'https://solscan.io/token/AfMyy9uiVM7Z3Twx3A8cc8V5jW8fY3escEgUX6tGnY4s'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs ml-2 sm:text-sm word-break-all word-wrap font-semibold text-gray-100 hover:underline hover:text-gray-100 hover:underline"
              >
               {process.env.NEXT_PUBLIC_TOKEN}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      {/* end content 1 */}

      {/* start content 2 */}
      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-4 p-[6%]">
        <div className="max-w-7xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4 rounded-lg shadow-lg">
              <h1 className="text-center text-2xl font-bold text-black mb-0">
                Discover the Candibar Platform
              </h1>
              <h2 className="text-md mx-auto text-center flex items-center justify-center">
                <LinkIcon
                  height={24}
                  width={24}
                  className="text-blue-600 hover:text-blue-400 p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Link href={"/getstarted"} className="text-center text-lg font-semibold text-gray-100 hover:underline hover:text-gray-100 hover:underline">
                  Getting Started
                </Link>
              </h2>
            </div>
          </motion.div>
          <hr className="my-0 border-t-2 border-gray-100" />

          <div className="p-4">
            <h6 className="text-center text-2xl font-bold text-black mb-0">

            </h6>
            <h6 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
              Become part of the sugar rush revolution: a place where digital art and sugar converge.
            </h6>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-4 p-2">
              <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8">
                <motion.div whileHover={{ scale: 1.05 }}>

                  <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-2">
                    <h1 className="text-center text-2xl md:pl-4 font-bold text-black">
                      1. Promotional NFT
                    </h1>
                  </div>
                </motion.div>
                <hr className="my-0 border-t-2 border-gray-100" />
                <div className="p-4">
                    <h2 className="text-center text-lg md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                    Participate in the Candibar Promotional Candi NFT Collection: Trade your Candi NFTs for Candibar Tokens.<br />* Swap available through the Jade Emperor *
                    </h2>
                  <hr className="my-6 border-t-2 border-gray-300" />
                  <div>
                    <CardContainer candyMachineKeys={PromotioncandyMachineKeys} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-4 p-2">
              <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8">
                <motion.div whileHover={{ scale: 1.05 }}>

                  <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-2">
                    <h1 className="text-center text-2xl md:pl-4 font-bold text-black">
                      2. Swap Candi NFT
                    </h1>
                  </div>
                </motion.div>
                <hr className="my-0 border-t-2 border-gray-100" />
                <div className="p-4">
                    <h2 className="text-center text-lg md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                    Exchange your Candi NFTs with the Jade Emperor to earn Candibar Tokens, which unlock access to exclusive Candibar NFTs.
                    </h2>
                  <hr className="my-6 border-t-2 border-gray-300" />
                  <div>
                    <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-4 p-2">
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <div className="relative w-[95%] h-[480px] rounded-lg overflow-hidden items-center justify-center mx-auto">
                          <Image
                            src={jadeEmperor.src}
                            alt="Jade Emperor"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                    <Link
                      href="/nftswap"
                      className=" w-full btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black">
                      <span className='text-lg'>Candi Swap</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-4 p-2">
              <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8">
                <motion.div whileHover={{ scale: 1.05 }}>
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
                  <br />
                  <hr className="my-5 border-t-2 border-gray-300" />
                  {zodiacSigns.length > 0 && zodiacSigns.map((sign, index) => (
                    <CardContainer key={index} candyMachineKeys={[publicKey(sign.machinePublicKey)]} />
                  ))}
                  <h3 className="text-center text-1xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
                    * This Month&apos;s Highlight *
                  </h3>
                  <h6 className="text-lg flex items-center justify-center">
                    <LinkIcon
                      height={24}
                      width={24}
                      className="text-blue-600 hover:text-blue-400 p-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Link href={"/AstrologyZodiac"} className="text-center text-lg font-semibold text-gray-100 hover:underline hover:text-gray-100 hover:underline">
                      Explore the Full Zodiac Collection
                    </Link>
                  </h6>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* end content 2 */}

      {/* start content 3*/}
      <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="text-center mt-8 p-[3%] mb-8">
        <div className="max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4">
              <h1 className="text-center text-2xl md:pl-6 font-bold text-black">
                Swap Zodiac Collections
              </h1>
              {/* <p className="text-center text-lg md:pl-6 font-semibold text-black">
                Collect all Zodiac NFTs of a single sign
                </p> */}
            </div>
          </motion.div>
          <hr className="my-0 border-t-2 border-gray-100" />
          <div className="p-6">
            <h6 className="text-center text-2xl md:pl-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500">
              Trade your Zodiac NFTs based on the current month for massive rewards!
            </h6>
            <hr className="my-4 border-t-2 border-gray-300" />
            <div className="flex justify-center items-center">

              <div className="p-8">
                <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="max-w-lg mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8 mt-8">
                  <SwapDetails />
                </motion.div>

              </div>


            </div>
            <div className="flex items-center justify-center">
              <LinkIcon
                height={24}
                width={24}
                className="text-blue-600 hover:text-blue-400 p-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Link
                href="/nftswap"
                className="text-center text-lg font-semibold text-gray-100 hover:underline hover:text-gray-100 hover:underline">
                Swap Full Zodiac Collection for 20,000 Candi Tokens
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      {/* end content 3*/}


      {/* start content 4*/}
      <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} className="max-w-lg mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden mb-8 mt-8">
        <motion.div whileHover={{ scale: 1.05 }}>
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
            <motion.div whileHover={{ scale: 1.05 }}>
              {items.slice(0, 1).map((item) => (
                <motion.div whileInView={{ opacity: 1, y: 0, scale: [0.9, 1] }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 1 }} key={item.id} className="flex flex-col items-center relative">
                  <Image
                    src={item.image}
                    alt={item.text}
                    layout="responsive"
                    objectFit="cover"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />

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

                  <div className="text-lg flex items-center justify-center">
                    <LinkIcon
                      height={24}
                      width={24}
                      className="text-blue-600 hover:text-blue-400 p-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Link href={item.pageloc}
                      className="text-center text-lg font-semibold text-gray-100 hover:underline hover:text-gray-100 hover:underline">
                      Learn more ...
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* end content 4*/}
    </>
  );
};

export default HomeView;