import React, { FC, useEffect, useState } from "react";
import Image from 'next/image';
import candcollection from "../../public/2025_Candi0/collection_01_500.jpg";
import candi00 from "../../public/2025_Candi0/candi_00_500.jpg";
import candi01 from "../../public/2025_Candi0/candi_01_500.jpg";
import candi02 from "../../public/2025_Candi0/candi_02_500.jpg";
import candi03 from "../../public/2025_Candi0/candi_03_500.jpg";
import { MintCandiRandom } from "./MintCandiRandom"; 

import { publicKey } from '@metaplex-foundation/umi';
import { getCandyMachinesBalance } from '../stores/useCandyMachine';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Button
} from "@/components/ui/button";
import { ChevronsUpDown } from 'lucide-react';
import { Card, CardContent } from "src/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [candcollection, candi00, candi01, candi02, candi03];

export const Card2025_candi0: FC = () => {
  const [isOpenStates, setIsOpenStates] = useState([false]);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const [balances, setBalances] = useState<
    { publicKey: string; itemsRedeemed: number; itemsAvailable: number, collectionMint: string }[]
  >([]);

  useEffect(() => {
    const fetchBalances = async () => {
      const candyMachineKeys = [
        publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID05),
      ];

      const results = await getCandyMachinesBalance(candyMachineKeys);
      setBalances(results);
    };
    fetchBalances();
  }, []);

  const candyMachines = balances.map((balance, index) => ({
    id: index + 1,
    cost: `${0.05} SOL`,
    candibarValue: [50][index],
    image: [candi00.src, candi01.src, candi02.src, candi03.src][index],
    itemsAvailable: balance.itemsAvailable,
    itemsRedeemed: balance.itemsRedeemed,
    collectionMint: balance.collectionMint,
  }));

  return (
<>   

    <div className="text-center justify-center flex flex-col">
      <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
        {candyMachines.map((machine, index) => (
          <div key={machine.id} className="w-full max-w-lg">
            <Collapsible
              open={isOpenStates[index]}
              onOpenChange={(isOpen) => {
                const updatedStates = [...isOpenStates];
                updatedStates[index] = isOpen;
                setIsOpenStates(updatedStates);
              }}
              className="md:w-full space-y-2"
            >
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  Candi Collection 2025
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                SOL cost: {machine.cost} | 
                mints: {machine.itemsRedeemed} of {machine.itemsAvailable}
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                  Candibar value: {machine.candibarValue}
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                  Collection address: {machine.collectionMint}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap mt-4">
        <Carousel setApi={setApi} className="w-full max-w-lg">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Image src={image} alt={`Candi ${index}`} width={500} height={500} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
      <MintCandiRandom />
    </div>
    </>
  );
};

export default Card2025_candi0;