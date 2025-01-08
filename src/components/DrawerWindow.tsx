
import { FC, useCallback } from 'react';
import * as React from "react";
import Candibar from "/home/ksayakho/myapp/Candibar/CandibarNFTs/public/2025/CandiBarNoBG.png";
import snake00 from "/home/ksayakho/myapp/Candibar/CandibarNFTs/public/2025/snake0_2025_500.jpg";

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
import CandiBarpng from "/home/ksayakho/myapp/Candibar/CandibarNFTs/public/2025/CandiBarNoBG.png";

export const DrawerWindow: FC = () => {

  const [goal, setGoal] = React.useState(750)
  function onClick(adjustment: number) {
  }

  return (

    <div className="flex flex-row justify-center">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="text-black">Exchange NFT</Button>
        </DrawerTrigger>
        <DrawerContent className="h-[40vh] bg-gray-400"> {/* Background color added */}
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-black">Check back soon!</DrawerTitle>
              <DrawerDescription>Value to your NFT is ###.###</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-8"> {/* Adjust spacing */}
                <img
                  className="w-24 h-24 object-cover" /* Consistent image size */
                  src={snake00.src}
                  alt="Snake NFT"
                />
                <span className="text-4xl font-bold text-gray-700 mx-4"> {/* Bigger arrow */}
                &#10233;
                </span>
                <img
                  className="w-24 h-24 object-cover" /* Consistent image size */
                  src={Candibar.src}
                  alt="Candibar tokens"
                />
              </div>
            </div>
            <DrawerFooter>
              <Button>Comming Soon!</Button>
              <DrawerClose asChild>
                <Button variant="outline" className="text-black">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )

}