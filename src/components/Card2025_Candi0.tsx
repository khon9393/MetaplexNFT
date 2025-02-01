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
import { getExplorerUrl } from "utils/explorer";
import { clusterApiUrl} from "@solana/web3.js";

const images = [candcollection, candi00, candi01, candi02, candi03];
const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;

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
    { publicKey: string,
      itemsRedeemed: number,
      itemsAvailable: number, 
      collectionMint: string, 
      collectionName: string, 
      SolCost: number,
      candyGuardMinLimit: number,
    }[]
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
    cost: `${balance.SolCost} SOL`,
    candibarValue: [50][index],
    image: [candi00.src, candi01.src, candi02.src, candi03.src][index],
    itemsAvailable: balance.itemsAvailable,
    itemsRedeemed: balance.itemsRedeemed,
    collectionMint: balance.collectionMint,
    collectionName: balance.collectionName,
    candyGuardMinLimit: balance.candyGuardMinLimit,
  }));



  return (
<>   
    <div className="text-center justify-center flex flex-col">
      <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap mt-4">
        <Carousel setApi={setApi} className="w-full max-w-lg">
        {candyMachines.map((machine, index) => (
          
          <div key={machine.id} className="w-full max-w-lg">
            <Collapsible
              open={isOpenStates[index]}
              onOpenChange={(isOpen) => {
                const updatedStates = [...isOpenStates];
                updatedStates[index] = isOpen;
                setIsOpenStates(updatedStates);
              }}
              className="rounded-md space-y-2"
            >
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-1xl font-semibold">
                {machine.collectionName}
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
                  Wallet mint limit: {machine.candyGuardMinLimit}
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                  Candibar value: {machine.candibarValue}
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                  Collection address: 
                  <div className="rounded-md px-4 py-2 font-mono text-sm shadow-sm flex items-center">
                          <span>{machine.collectionMint}</span>
                            <a 
                            href={getExplorerUrl(quicknodeEndpoint, machine.collectionMint)}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-1 text-white rounded"
                            style={{ display: 'inline-block', width: '20px', height: '20px', textAlign: 'center' }}
                            >
                            🔗
                            </a>
                        </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
        
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
          {/* NFT # {current} */}
        </Carousel>
      </div>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current === 1 ? "NFT Collection" : `NFT ${current-1} of ${count - 1}`}
      </div>
      <MintCandiRandom />
    </div>
    </>
  );
};

export default Card2025_candi0;