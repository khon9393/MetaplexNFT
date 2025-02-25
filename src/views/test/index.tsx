
import { FC } from "react";
import { SwapDrawerWindow } from '@/components//candibar/swapWrapper/SwapDrawerWindow';
import {Testminter} from '@/components/candibar/swapWrapper/Testminter';


import { Inter } from "next/font/google";
import { UmiProvider } from "@/providers/umiProvider";
import jadeEmperor from '../../../public/images/jadeEmp2.jpeg';

const inter = Inter({ subsets: ["latin"] });

export const TestMintView: FC = ({ }) => {

  return (
    <div 
    className="w-full h-[100%] flex items-center justify-center"
      //  className="w-full h-[100%] flex items-center justify-center"
    //style={{ backgroundImage: `url(${jadeEmperor.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 15%', opacity: 1 }}
    >
      <div className="md:hero-content flex flex-col">
      {/* <UmiProvider>
      <Testminter candyMachineId={process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05} collectionId={process.env.NEXT_PUBLIC_COLLECTION_ID05} />
  
          </UmiProvider> */}
        </div>
      </div>
  );
};
