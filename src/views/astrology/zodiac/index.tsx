import { FC, useEffect, useState } from "react";
import Select from "react-select";
import { publicKey } from "@metaplex-foundation/umi";
import { CardContainer } from "../../../components/candibar/CardContainer";

export const AstrologyZodiacView: FC = () => {
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

  const handleSignChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    setSelectedSigns(selectedValues.includes("View All") ? Object.keys(CandiZodiacSigns) : selectedValues);
  };

  useEffect(() => {
    const getCurrentZodiacSign = () => {
      const currentDate = new Date();
 
      for (const [sign, { dateRange }] of Object.entries(CandiZodiacSigns)) {
        const [start, end] = dateRange.split("-");
        const [startMonth, startDay] = start.split(" ");
        const [endMonth, endDay] = end.split(" ");

        const startDate = new Date(`${startMonth} ${startDay}, ${currentDate.getFullYear()}`);
        const endDate = new Date(`${endMonth} ${endDay}, ${currentDate.getFullYear()}`);

        if (startDate <= currentDate && currentDate <= endDate) {
          return sign;
        }
      }
      return null;
    };

    const currentSign = getCurrentZodiacSign();
    if (currentSign) {
      setSelectedSigns([currentSign]);
    }
  }, []);

  const options = [
    ...Object.entries(CandiZodiacSigns).map(([sign, { icon }]) => ({
      value: sign,
      label: `${icon} ${sign}`,
    })),
    { value: "View All", label: "View All" },
  ];

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

      <div className="flex justify-center p-4 ">
      <Select
        isMulti
        options={options}
        value={options.filter(option => selectedSigns.includes(option.value))}
        onChange={handleSignChange}
        className="w-full max-w-lg"
        styles={{
        multiValueLabel: (base) => ({
          ...base,
          color: 'purple',
        }),
        singleValue: (base) => ({
          ...base,
          color: 'purple',
        }),
        option: (base, state) => ({
          ...base,
          color: state.isSelected ? 'white' : 'purple',
          backgroundColor: state.isSelected ? 'purple' : 'white',
        }),
        control: (base) => ({
          ...base,
          backgroundColor: 'white',
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: 'lightgray',
        }),
        }}
      />
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
      {selectedSigns.map((sign) => (
        <div key={sign} className="p-2">
        <CardContainer candyMachineKeys={[publicKey(CandiZodiacSigns[sign].PublicKey)]} />
        </div>
      ))}
      </div>
    </div>
  );
};