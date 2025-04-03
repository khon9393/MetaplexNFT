
import { FC } from 'react';
import * as React from "react";
import Candibar from "../../../public/2025/CandiBarNoBG.png";
import Image from 'next/image'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import jadeEmp2 from '../../../../public/images/jadeEmp3.jpeg';
import jadeEmp1 from '../../../../public/images/jadeEmp.jpeg';

import SwapWrapperCompCollection from './swapWrapper';
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useWallet } from "@solana/wallet-adapter-react";
import SwapDetails from '../swapCounter/SwapDetails';
import {SwapArgs} from "../../../lib/swapselector";
import { getCurrentZodiacSign, ZodiacSign } from "../../../stores/useCandiZodiacSignsStore";


export const SwapDrawerWindow: FC<{ swapArg: SwapArgs }> = ({ swapArg }) => {
  const wallet = useWallet();

  const currentZodiacSign = getCurrentZodiacSign();
  
  return (

    <div className="flex flex-row justify-center">
      <Drawer>

        <DrawerTrigger>

          <div className='absolute top-[60px] left-1/2 transform -translate-x-1/2 '>
            {wallet.connected && process.env.NEXT_PUBLIC_RPC_ENABLE_SWAPPING === '1' && (
              <Button
                className="text-white hover:text-blue-600 sm:text-2xl"
                variant="default"
              >
                {swapArg.name === "zodiac" ? `Swap Entire ${currentZodiacSign.name} Zodiac Collection (${currentZodiacSign.dateRange})`: "Candi Swap"}
                <ArrowUpTrayIcon
                  className='w-15 h-15 m-1'
                />
              </Button>
            )}
          </div>


        </DrawerTrigger>

        <DrawerContent
          className="h-[90vh] bg-gray-400"
          style={{
            backgroundImage: `url(${swapArg.name === "zodiac" ? jadeEmp2.src : jadeEmp1.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 1,
          }}
        >
          <DrawerHeader className="justify-center items-center">
            <DrawerClose asChild>
              <ArrowDownTrayIcon
                className="w-10 h-10 m-1 bg-gray-800 text-grey-900 hover:text-blue-600 cursor-pointer rounded-lg z-50"
              />
            </DrawerClose>
          </DrawerHeader>
          {/* {swapArg.name === "zodiac" && (
            <div className="absolute top-2">
              <SwapDetails />
            </div>
          )} */}
          <SwapWrapperCompCollection {...swapArg} />
          <DrawerFooter>
            {/* <strong> Note: Currently, the sole collection available for exchanging Candibar Tokens is the Candi Collection 2025.</strong> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )

}