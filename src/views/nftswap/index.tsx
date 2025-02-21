
import { FC } from "react";
import { SwapDrawerWindow } from '@/components//candibar/swapWrapper/SwapDrawerWindow';


import { Inter } from "next/font/google";
import { UmiProvider } from "@/providers/umiProvider";
import jadeEmperor from '../../../public/images/jadeEmp2.jpeg';

const inter = Inter({ subsets: ["latin"] });

export const NFTSwapView: FC = ({ }) => {

  return (
    <div 
    className="w-full h-[100%] flex items-center justify-center"
    style={{ backgroundImage: `url(${jadeEmperor.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
    >
      <div className="md:hero-content flex flex-col">
          <UmiProvider>
            <SwapDrawerWindow />
          </UmiProvider>


          {/* <div className='absolute bottom-[20%] text-center border-gray-300 bg-gray-800 '>
            <div className="text-white px-2 font-mono text-1xl animate-pulse">
            Qualified Candi Collection 2025 NFT 
for 
trading Candibar Tokens
            </div>
          </div> */}
        </div>
      </div>
  );
};
