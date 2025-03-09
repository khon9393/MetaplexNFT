
import { FC, useMemo } from "react";

import { Toaster } from "@/components/ui/toaster";
import { publicKey, PublicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";
import { useState } from "react";

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

  const [selectedSigns, setSelectedSigns] = useState<string[]>([]);

  const handleSignClick = (sign: string) => {
    setSelectedSigns((prevSelectedSigns) =>
      prevSelectedSigns.includes(sign)
        ? prevSelectedSigns.filter((s) => s !== sign)
        : [...prevSelectedSigns, sign]
    );
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-extrabold p-1">
        Unlock the future of digital assets with candi confection art NFTc!
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-purple-700">
        {Object.entries(CandiZodiacSigns).map(([sign, { icon, dateRange }]) => (
          <div
            key={sign}
            className={`cursor-pointer p-1 border rounded-lg ${
              selectedSigns.includes(sign) ? "bg-blue-200" : "bg-white"
            }`}
            onClick={() => handleSignClick(sign)}
          >
            <p className="flex text-lg sm:text-xl md:text-2xl font-extrabold text-center">{icon} {sign}</p>
            <p className="text-center hidden sm:block text-sm sm:text-base md:text-lg">{dateRange}</p>

          </div>
        ))}
      </div>

      {selectedSigns.map((sign) => (
        <div key={sign}>
          <p className="text-3xl font-extrabold p-3 text-center">
            {sign} Dates: {CandiZodiacSigns[sign].dateRange}
          </p>
          <CardContainer candyMachineKeys={[publicKey(CandiZodiacSigns[sign].PublicKey)]} />
        </div>
      ))}

      <Toaster />
    </div>
  );

};
