
import { FC, useMemo } from "react";

import { Toaster } from "@/components/ui/toaster";
import { publicKey, PublicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";

export const AstrologyZodiacView: FC = ({ }) => {

  const CandiZodiacSigns = {
    Capricorn: { icon: "♑", dateRange: "December 21-January 20", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_CAPRIC1 },
    Aquarius: { icon: "♒", dateRange: "January 21-February 18", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_AQUIC1 },
    Pisces: { icon: "♓", dateRange: "February 19-March 20", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_PISCC1 },
    Aries: { icon: "♈", dateRange: "March 21-April 19", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_ARIESC1 },
    Taurus: { icon: "♉", dateRange: "April 20-May 20", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_TAURC1 },
    Gemini: { icon: "♊", dateRange: "May 21-June 20", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_GEMINIC1 },
    Cancer: { icon: "♋", dateRange: "June 21-July 22", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_CANCERC1 },
    Leo: { icon: "♌", dateRange: "July 23-August 22", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEOC1 },
    Virgo: { icon: "♍", dateRange: "August 23-September 22", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_VIRGOC1 },
    Libra: { icon: "♎", dateRange: "September 23-October 22", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_LEBRAC1 },
    Scorpio: { icon: "♏", dateRange: "October 23-November 21", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_SCOC1 },
    Sagittarius: { icon: "♐", dateRange: "November 22-December 21", PublicKey: process.env.NEXT_PUBLIC_CANDY_MACHINE_SAGC1 },
  };

  return (

    <div>
        <h1 className="text-center text-3xl font-extrabold p-3">
        Unlock the future of digital assets with candi confection art NFT!
      </h1>

      <div className="flex flex-col text-1xl items-center justify-center p-5">
        <h2 className="max-w-7xl leading-relaxed">
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
        </h2>
      </div>

      {Object.entries(CandiZodiacSigns).map(([sign, { dateRange, PublicKey }]) => (
        <div key={sign}>
          <p className="text-3xl font-extrabold p-3 text-center">
            {sign} Dates: {dateRange}
          </p>
          <CardContainer candyMachineKeys={[publicKey(PublicKey)]} />
        </div>
      ))}
      <Toaster />
    </div>
  );

};
