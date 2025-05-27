
import { FC } from "react";
import TopzodiacNFTholder from "@/components/candibar/dashboard/TopzodiacNFTholder";

export const AstrologyZodiacTopHoldersChartView: FC = ({ }) => {
  return (

      <div className="p-4 max-w-7xl text-center mx-auto">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Candi Zodiac NFT Holders
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <TopzodiacNFTholder />
        </div>
      </div>

  );
};
