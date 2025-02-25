
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
import jadeEmperor from '../../../../public/images/jadeEmp.jpeg';
import SwapWrapper from './swapWrapper';
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useWallet } from "@solana/wallet-adapter-react";
import Link from 'next/link';



export const SwapDrawerWindow: FC = () => {
  const wallet = useWallet();

  return (

    <div className="flex flex-row justify-center">
      <Drawer>

        <DrawerTrigger>

          <div className='absolute top-3 left-1/2 transform -translate-x-1/2 '>
            {wallet.connected && process.env.NEXT_PUBLIC_RPC_ENABLE_SWAPPING ==='1' && (
              <Button
                className="text-white hover:text-blue-600 text-1xl md:text-2xl "
                variant="default"
              >
                Swap
                <ArrowUpTrayIcon
                  className='w-15 h-15 m-1'
                />
              </Button>
            )}
          </div>


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
                className='w-10 h-10 m-1 bg-gray-800 text-grey-900 hover:text-blue-600 cursor-pointer rounded-lg'
              />
            </DrawerClose>
          </DrawerHeader>
          <SwapWrapper />
          <DrawerFooter>
          <strong> Note: Currently, the sole collection available for exchanging Candibar Tokens is the Candi Collection 2025.</strong>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </div>
  )

}