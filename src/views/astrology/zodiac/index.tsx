import { FC, useEffect, useMemo, useState } from "react";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";
import { getCurrentZodiacSign } from "../../../stores/useCandiZodiacSignsStore";
import Link from "next/link";

export const AstrologyZodiacView: FC = () => {
  const [selectedSigns, setSelectedSigns] = useState('');

  useEffect(() => {
    const currentSign = getCurrentZodiacSign();
    if (currentSign) {
      setSelectedSigns(currentSign.publicKey);
    }
  }, []);

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
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {selectedSigns && (
          <CardContainer candyMachineKeys={[publicKey(selectedSigns)]} />
        )}
      </div>
      <h5 className="text-lg mt-2 md:w-[70%] mx-auto text-center mb-6">
        <Link
          href={"/AstrologyZodiacFilter"}
          className="text-blue-500 underline">Browse Entire Zodiac Collection
        </Link>
      </h5>
    </div>
  );
};