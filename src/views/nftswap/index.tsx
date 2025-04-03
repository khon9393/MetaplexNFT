import { FC, useState } from "react";
import { SwapDrawerWindow } from "@/components/candibar/swapWrapper/SwapDrawerWindow";
import { Inter } from "next/font/google";
import { UmiProvider } from "@/providers/umiProvider";
import jadeEmperor from "../../../public/images/jadeEmp2.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const NFTSwapView: FC = () => {
  const [selectedOption, setSelectedOption] = useState<"default" | "zodiac">("default");

  
  return (
    <div
      className="w-full h-[100%]"
      style={{
        backgroundImage: `url(${jadeEmperor.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 15%",
        opacity: 1,
      }}
    >
      <div className="mt-4 flex justify-center items-center">
        {/* Dropdown or Button Selection */}
        <div className="mb-4">
            <select
            id="swap-selection"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value as "default" | "zodiac")}
            className="p-2 rounded bg-gray-800 text-white"
            >
            <option value="default" disabled>Choose Swap Type</option>
            <option value="candi">Candi Swap</option>
            <option value="zodiac">Complete Collection Swap</option>
            </select>
            </div>

            <UmiProvider>
            {selectedOption !== "default" && 
              <SwapDrawerWindow swapArg={{ name: selectedOption }} />
            }
          </UmiProvider>
      </div>
    </div>
  );
};