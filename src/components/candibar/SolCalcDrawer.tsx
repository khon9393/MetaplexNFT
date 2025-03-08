
import { FC } from 'react';
import * as React from "react";
import CandiCollection from "../../../public/images/candi_collection_cover.jpeg";
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
import { ArrowDownTrayIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import Soltousdtcalc from './convert';
import Link from 'next/link';


export const SolCalcDrawer: FC = () => {


  return (

    <div className="flex flex-row justify-center">
      <Drawer>

        <DrawerTrigger>
          
          <Button
            className="text-white hover:text-blue-600 text-1xl md:text-1xl mb-2"
            variant="default"
          >
            SOL &rarr; USD Calc.
            <ArrowUpTrayIcon className="w-15 h-15 m-1" />
          </Button>

        </DrawerTrigger>

        <DrawerContent className="h-[95vh] bg-gray-400"
        style={{ backgroundImage: `url(${CandiCollection.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
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
          <Soltousdtcalc />
          <DrawerFooter>
           
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </div>
  )

}