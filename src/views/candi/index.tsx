import { FC, useEffect, useMemo, useState } from "react";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../components/candibar/CardContainer";
import { motion } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

export const CandiView: FC = ({ }) => {

  const [isOpen, setIsOpen] = useState(() => {
    const storedData = localStorage.getItem("candisetIsOpen");
    if (storedData) {
      const { isOpen: storedIsOpen, timestamp } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

      if (currentTime - timestamp < oneDayInMilliseconds) {
        return storedIsOpen;
      } else {
        localStorage.removeItem("candisetIsOpen");
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
    localStorage.setItem("candisetIsOpen", JSON.stringify(data));
  }, [isOpen]);

  const candyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
  ], []);

  return (
    <div>
      <div className="text-center mt-8 p-5">
        <div className="max-w-6xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between space-x-4 px-4 bg-gradient-to-br from-pink-400 to-blue-400 p-4">
              <h1 className="text-center text-lg sm:text-2xl md:pl-6 font-bold text-black">
                Own & Trade with the Exclusive Candi NFT Collection!
              </h1>
              <motion.div whileHover={{ scale: 1.2 }}>
                <CollapsibleTrigger onClick={() => setIsOpen(!isOpen)}>
                  <ChevronsUpDown className={`h-6 w-6 ${isOpen ? 'rotate-180' : ''}`} />
                  <span className="sr-only">Toggle</span>
                </CollapsibleTrigger>
              </motion.div>
            </div>
            <hr className="my-0 border-t-2 border-gray-100" />
            <div className="p-2">
              <div className="text-center sm:text-2xl md:pl-6 ">
                <CollapsibleContent>
                  <div className="flex flex-col sm:text-1xl text-left max-w-5xl mx-auto ">

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
                      <h2 className="sm:text-xl font-bold text-left max-w-5xl mx-auto p-2">Why Own a Candi NFT?</h2>
                      <ul className="list-disc list-inside text-left sm:text-1xl max-w-5xl mx-auto p-2">
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

                      <h1 className="sm:text-1xl text-left max-w-5xl mx-auto p-2">
                        Don&rsquo;t just collect—
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
                          be part of something bigger
                        </span>.
                        Secure your Candi NFT today and step into the future of digital value!
                      </h1>
                    </div>
                  </div>
                  <hr className="my-8 border-t-2 border-gray-300" />
                </CollapsibleContent>
              </div>
            </div>
          </Collapsible>
        </div>
        <CardContainer candyMachineKeys={candyMachineKeys} />
      </div>
    </div>
  );
};
