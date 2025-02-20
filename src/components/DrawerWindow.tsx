
import { FC} from 'react';
import * as React from "react";
import Candibar from "../../public/2025/CandiBarNoBG.png";
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

export const DrawerWindow: FC = () => {

  const [goal, setGoal] = React.useState(750)
  function onClick(adjustment: number) {
  }

  return (

    <div className="flex flex-row justify-center">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
          >Swap NFT/Candibar</Button>
        </DrawerTrigger>
        <DrawerContent className="h-[80vh] bg-gray-400"> {/* Background color added */}
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-black">Check back soon!</DrawerTitle>
              <DrawerDescription>Value of your NFT to Candibar tokens is 500</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-8"> {/* Adjust spacing */}
                <Image
                  className="p-2" /* Consistent image size */
                  width={0}
                  height={0}
                  sizes="25vw"
                  style={{ width: '50%', height: 'auto' }} 
                  src={"https://entire-wagon-fix.quicknode-ipfs.com/ipfs/QmcapCnprSUZGZf37nzb6JGJUDDPcyS1znAoFruVKW4wt6"}
                  alt="Snake NFT"
                />
                1 NFT
                <span className="text-4xl font-bold text-gray-700 mx-4"> {/* Bigger arrow */}
                &#10233;
                </span>
                <Image
                  className="p-2" /* Consistent image size */
                  width={0}
                  height={0}
                  sizes="10vw"
                  style={{ width: '50%', height: 'auto' }} 
                  src={Candibar}
                  alt="Candibar tokens"
                />
                500 Candibars
              </div>
            </div>
            <DrawerFooter>
              <Button>Comming Soon!</Button>
              <DrawerClose asChild>
             
                <Button variant="outline" className="text-black"
                >Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )

}