import { FC, useMemo } from "react";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../components/candibar/CardContainer";
import { motion } from "framer-motion";


export const CandiView: FC = ({ }) => {

  const candyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
  ], []);

  return (
    <div>
      <div className="text-center mt-8 p-5">
        <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }}>
          <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4">
            <h1 className="text-center text-3xl md:pl-6 font-bold text-black">
              Own & Trade with the Exclusive Candi NFT Collection!
            </h1>
          </div>
          </motion.div>
          <hr className="my-0 border-t-2 border-gray-100" />
          <div className="p-2">
            <div className="text-center text-2xl md:pl-6 ">
              <div className="flex flex-col text-xl text-left max-w-5xl mx-auto ">
                <h2 className="p-2">
                  Welcome to the next evolution of digital assets—where collectibles are as sweet as they look!
                </h2>
                <h1 className="p-2">
                  The Candi NFT Collection isn&rsquo;t just another NFT—it&rsquo;s your
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
                    &nbsp;key to unlocking Candibar Tokens&nbsp;
                  </span>
                  and
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
                    &nbsp;seamlessly trading&nbsp;
                  </span>
                  between both worlds.
                </h1>

                <div className="justify-left">
                  <h2 className="text-xl font-bold text-left  max-w-5xl mx-auto p-2">Why Own a Candi NFT?</h2>
                  <ul className="list-disc list-inside text-left text-xl max-w-5xl mx-auto p-2">
                    <li>
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
                        Trade with ease:
                      </span>
                      &nbsp;Swap your Candi NFT for Candibar Tokens anytime.
                    </li>
                    <li>
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
                        Exclusive access:
                      </span>
                      &nbsp;Unlock future perks, special drops, and rewards.
                    </li>
                    <li>
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-500 to-green-600 animate-pulse">
                        True digital ownership:
                      </span>
                      &nbsp;A scarce and valuable asset in a growing ecosystem.
                    </li>
                  </ul>

                  <h1 className="text-xl text-left max-w-5xl mx-auto p-2">
                    Don&rsquo;t just collect—
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
                      be part of something bigger
                    </span>.
                    Secure your Candi NFT today and step into the future of digital value!
                  </h1>
                </div>

              </div>
              <hr className="my-8 border-t-2 border-gray-300" />
              <CardContainer candyMachineKeys={candyMachineKeys} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
