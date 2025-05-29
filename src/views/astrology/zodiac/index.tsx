import { FC, useEffect, useMemo, useState } from "react";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";
import { getCurrentZodiacSign } from "../../../stores/useCandiZodiacSignsStore";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { FilterAstrologyZodiacView } from "./FilterAstrologyZodiacView";
import { motion } from "framer-motion";

export const AstrologyZodiacView: FC = () => {

  const [isOpen, setIsOpen] = useState(() => {
    const storedData = localStorage.getItem("zodiacsetIsOpen");
    if (storedData) {
      const { isOpen: storedIsOpen, timestamp } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

      if (currentTime - timestamp < oneDayInMilliseconds) {
        return storedIsOpen;
      } else {
        localStorage.removeItem("zodiacsetIsOpen");
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
    localStorage.setItem("zodiacsetIsOpen", JSON.stringify(data));
  }, [isOpen]);

  return (
    <div>
      <div className="text-center mt-8 p-5">
        <div className="max-w-6xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="bg-gradient-to-br from-pink-400 to-blue-400 p-4">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h1 className="text-center text-lg sm:text-2xl md:pl-6 font-bold text-black">
                    Unlock the future of digital assets with candi confection art NFT!
                  </h1>
                  <motion.div whileHover={{ scale: 1.2 }}>
                  <CollapsibleTrigger onClick={() => setIsOpen(!isOpen)}>
                    <ChevronsUpDown className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className="sr-only">Toggle</span>
                  </CollapsibleTrigger>  
                  </motion.div>
                </div>
          
            </div>
            <hr className="my-0 border-t-2 border-gray-100" />
            <div className="p-2">
              <div className="text-center sm:text-2xl md:pl-6 ">
              <div className="flex flex-col sm:text-1xl p-2">
                  <CollapsibleContent>
                    <h2 className="leading-relaxed break-words">
<<<<<<< HEAD
                      Step into the cosmic realm of the Zodiac with this exclusive NFT collection, emboing the essence of
=======
                      Step into the cosmic realm of the Zodiac with these exclusive NFT collection, embodying the essence of
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
                        &nbsp;destiny
                      </span>,
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-600 animate-pulse">
                        &nbsp;wisdom
                      </span>, and
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-orange-600 animate-pulse">
                        &nbsp;prosperity
                      </span>.
                      Whether you channel the strength of the Lion, the resilience of the Bull, or the agility of the Ram, each NFT captures the distinct energy of its zodiac sign.
                      By owning one or more of these celestial collectibles, you harness the energy of
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
                        &nbsp;fortune
                      </span>,
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 animate-pulse">
                        &nbsp;growth
                      </span>, and
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-600 animate-pulse">
                        &nbsp;success
                      </span>.
                      Each NFT is crafted to reflect the qualities and cosmic influence of its sign, making it a unique addition to your digital portfolio.
                      Seize this rare opportunity to connect with the power of the Zodiac—collect yours today!
                    </h2>
                    <hr className="my-4 border-t-2 border-gray-300" />
                  </CollapsibleContent>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>
        <FilterAstrologyZodiacView />
      </div>
    </div>
  );
};