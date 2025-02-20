
import { FC } from "react";
import { DrawerWindow } from '@/components/DrawerWindow';
import SwapWrapper from "@/components/swapWrapper/swapWrapper";

import { Inter } from "next/font/google";
import { UmiProvider } from "@/providers/umiProvider";
import jadeEmperor from '../../../public/images/jadeEmp.jpeg';

const inter = Inter({ subsets: ["latin"] });

export const NFTSwapView: FC = ({ }) => {

  return (
    <div 
    //className="md:hero mx-auto p-4"
    //className="w-full h-screen bg-gradient-to-b from-[#000000] to-[#000000] flex items-center justify-center"
    className="w-full h-[100%] flex items-center justify-center"
    style={{ backgroundImage: `url(${jadeEmperor.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
    >
      <div className="md:hero-content flex flex-col">
        {/* <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8 p-2">
          Comming Soon!
        </h1> */}
        <div className="text-center">
          {/* <DrawerWindow /> */}

          <UmiProvider>
            <SwapWrapper />
          </UmiProvider>
        </div>
      </div>
    </div>
  );
};
