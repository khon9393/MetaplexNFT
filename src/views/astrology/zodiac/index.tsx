
import { FC, useMemo } from "react";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";

export const AstrologyZodiacView: FC = ({ }) => {
``

  const candyMachineKeys = useMemo(() => [

    // publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_CAPRI1),
    // publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_AQUI1),
    // publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ARIES1),
    // publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_GEMINI1),
    // publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_LEO1),
    
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_CAPRIC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_AQUIC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_PISCC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ARIESC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_TAURC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_GEMINIC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_CANCERC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_LEOC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_VIRGOC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_LEBRAC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_SCOC1),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_SAGC1),
    
    
    


        // publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_CANCER1), - messed up. need to update json file


  ], []);

  return (
  <div>

<p className="text-center text-3xl font-extrabold p-3">
        Unlock the future of digital assets with candi confection art NFT!
      </p>

      <div className="flex flex-col text-1xl items-center justify-center p-5">
        <p className="max-w-7xl leading-relaxed">
          Step into the cosmic realm of the Zodiac with this exclusive NFT collection, embodying the essence of
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
            &nbsp;destiny
          </span>,
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-600 animate-pulse">
            &nbsp;wisdom
          </span>, and
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-orange-600 animate-pulse">
            &nbsp;prosperity
          </span>.
          Whether you channel the strength of the Lion, the resilience of the Ox, or the agility of the Ram, each NFT captures the distinct energy of its zodiac sign.
          By owning one or more of these celestial collectibles, you harness the power of
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
        </p>
      </div>

        <CardContainer candyMachineKeys={candyMachineKeys} />
  </div>
  );
};
