
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
import jadeEmperor from '../../../public/images/jadeEmp.jpeg';
import SwapWrapper from './swapWrapper';
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useWallet } from "@solana/wallet-adapter-react";



export const SwapDrawerWindow: FC = () => {
  const wallet = useWallet();

  return (

    <div className="flex flex-row justify-center">
      <Drawer>
        <DrawerTrigger asChild>
        {wallet.connected && (
          <Button
            className="absolute top-3 px-2 text-white hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300 bg-opacity-0"
            variant="outline"
          >
            Swap
            <ArrowDownTrayIcon
              className='w-10 h-10 m-1'
            />
          </Button>

        )}  
        </DrawerTrigger>

        <DrawerContent className="h-[90vh] bg-gray-400"
          style={{ backgroundImage: `url(${jadeEmperor.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
        >
          <DrawerHeader
            //className="absolute left-0 top-0"
            className="justify-center items-center"
          >
            <DrawerClose asChild>

              <ArrowDownTrayIcon
                className='w-10 h-10 m-1 text-white hover:text-red-500 cursor-pointer'
              />
            </DrawerClose>
          </DrawerHeader>
          <SwapWrapper />
          <DrawerFooter>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </div>
  )

}