
import { FC, useMemo } from "react";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";
import { motion } from "framer-motion";

export const AstrologySignView: FC = ({ }) => {

  const candyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04),
  ], []);


  return (
    <div>

      <div className="text-center mt-8 p-5">
        <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }}>
          <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-4">
            <h1 className="text-3xl font-bold text-black">
              Unlock the future of digital assets with Snake Coin 2025 NFT!
            </h1>
          </div>
          </motion.div>
          <hr className="my-0 border-t-2 border-gray-100" />
          <div className="p-6">
            <div className="text-center text-2xl md:pl-2">
              <div className="flex flex-col text-1xl p-2">
                <h2 className="leading-relaxed ">
                  Embodying the wisdom and mystique of the Year of the Snake, this NFT represents
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
                    &nbsp;transformation
                  </span>,
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
                    &nbsp;intelligence
                  </span>, and
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-500 to-green-600 animate-pulse">
                    &nbsp;prosperity
                  </span>.
                  By owning one or more of these unique collectibles, you tap into the Snake&apos;s energy—symbolizing
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
                    &nbsp;intuition
                  </span>,
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-600 animate-pulse">
                    &nbsp;adaptability
                  </span>, and
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 animate-pulse">
                    &nbsp;resourcefulness
                  </span>.
                  &nbsp;Each NFT reflects these qualities through its rarity and value. Seize the opportunity to be part of this zodiac-inspired evolution. Claim your piece of the movement today!
                </h2>
              </div>
            </div>
            <hr className="my-4 border-t-2 border-gray-300" />
            <div>
            <CardContainer candyMachineKeys={candyMachineKeys} />
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};
