import { FC, useMemo } from "react";
import { Toaster } from "@/components/ui/toaster";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../components/candibar/CardContainer";


export const CandiView: FC = ({ }) => {

  const candyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
  ], []);

  return (
    <div>

      <p className="text-center text-3xl font-extrabold p-3">
        Own & Trade with the Exclusive Candi NFT Collection!
      </p>

      <div className="flex flex-col text-xl text-left max-w-5xl mx-auto p-5">
        <p className="p-2">
          Welcome to the next evolution of digital assets—where collectibles are as sweet as they look!
        </p>
        <p className="p-2">
          The Candi NFT Collection isn&rsquo;t just another NFT—it&rsquo;s your
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
            &nbsp;key to unlocking Candibar Tokens&nbsp;
          </span>
          and
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
            &nbsp;seamlessly trading&nbsp;
          </span>
          between both worlds.
        </p>

        <div className="justify-left">
        <p className="text-xl font-bold text-left  max-w-5xl mx-auto p-2">Why Own a Candi NFT?</p>
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

      <p className="text-xl text-left max-w-5xl mx-auto p-2">
        Don&rsquo;t just collect—
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
          be part of something bigger
        </span>.
        Secure your Candi NFT today and step into the future of digital value!
      </p>
      </div>
      
      </div>


      <CardContainer candyMachineKeys={candyMachineKeys} />
      <Toaster />
    </div>
  );
};
