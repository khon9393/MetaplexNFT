
import { FC } from "react";
import { SwapDrawerWindow } from '@/components//candibar/swapWrapper/SwapDrawerWindow';


import { Inter } from "next/font/google";
import { UmiProvider } from "@/providers/umiProvider";
import jadeEmperor from '../../../public/images/jadeEmp2.jpeg';

const inter = Inter({ subsets: ["latin"] });

export const NFTSwapView: FC = ({ }) => {

  return (
    <div 
    //className="w-full h-[100%] flex items-center justify-center"
    style={{ backgroundImage: `url(${jadeEmperor.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
    >
      <div className="md:hero-content flex flex-col">
          <UmiProvider>
            <SwapDrawerWindow />
          </UmiProvider>
        </div>
      </div>
  );
};
