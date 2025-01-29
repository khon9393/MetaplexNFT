
import { FC } from "react";
import { DrawerWindow } from 'components/DrawerWindow';
import SwapWrapper from "components/swapWrapper/swapWrapper";
import { UmiProvider } from "../../providers/umiProvider";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const NFTSwapView: FC = ({ }) => {

  return (
     <div className={inter.className + " flex flex-col items-center pt-2 gap-4 w-1/4 h-2/3"}>
 
        {/* <h1 className="flex text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8 p-0">

        </h1> */}
        {/* CONTENT GOES HERE */}
          {/* <DrawerWindow/> */}
          
          <UmiProvider>
 
            <SwapWrapper />
            <Toaster />
         
          </UmiProvider>
          
    </div>
  );
};
