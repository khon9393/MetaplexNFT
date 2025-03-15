
import { FC, useEffect, useMemo, useState } from "react";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";
import { motion } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

export const AstrologySignView: FC = ({ }) => {

  const [isOpen, setIsOpen] = useState(() => {
    const storedData = localStorage.getItem("signsetIsOpen");
    if (storedData) {
      const { isOpen: storedIsOpen, timestamp } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

      if (currentTime - timestamp < oneDayInMilliseconds) {
        return storedIsOpen;
      } else {
        localStorage.removeItem("signsetIsOpen");
      }
    }
    return true;
  });

  // Save isOpen state to localStorage whenever it changes
  useEffect(() => {
    const data = {
      isOpen,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem("signsetIsOpen", JSON.stringify(data));
  }, [isOpen]);

  


  

  const candyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04),
  ], []);


  return (
    <div>

      <div className="text-center mt-8 p-5">
        <div className="max-w-5xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          
          <div className="flex items-center justify-between space-x-4 px-4 bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 p-4">
          <h1 className="text-center text-2xl md:pl-6 font-bold text-black">
              Unlock the future of digital assets with Snake Coin 2025 NFT!
            </h1>
            <motion.div whileHover={{ scale: 1.2 }}>
                  <CollapsibleTrigger onClick={() => setIsOpen(!isOpen)}>
                    <ChevronsUpDown className={`h-8 w-8 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className="sr-only">Toggle</span>
                  </CollapsibleTrigger>  
                  </motion.div>
          </div>
          <hr className="my-0 border-t-2 border-gray-100" />
          <div className="p-2">
            <div className="text-center text-2xl md:pl-6">
              <div className="flex flex-col text-xl md:text-base lg:text-lg p-2">     
                <CollapsibleContent>

                <h2 className="leading-relaxed break-words">
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
                </CollapsibleContent>
              </div>
            </div>
            <hr className="my-4 border-t-2 border-gray-300" />
          
   
          </div>
          </Collapsible>
        </div>
      </div>
      <div>
            <CardContainer candyMachineKeys={candyMachineKeys} />
            </div>
    </div>
  );
};
