import React, { useState, useEffect, FC, useMemo } from "react";
import Image from 'next/image'
import snake00 from "../../public/2025/snake0_2025_500.jpg"
import snake01 from "../../public/2025//snake1_2025_500.jpg";
import snake02 from "../../public/2025//snake2_2025_500.jpg";
import snake03 from "../../public/2025//snake3_2025_500.jpg";

import { getCandyMachinesBalance } from '../stores/useCandyMachine';
import { publicKey } from '@metaplex-foundation/umi';
import {MintSnakes} from "../components/MintSnakes";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Button
} from "@/components/ui/button"
import { ChevronsUpDown } from 'lucide-react';
import { Card, CardContent } from "src/components/ui/card"

export const Card2025: FC = () => {

  const [isOpenStates, setIsOpenStates] = useState([false, false, false, false]);


  const [balances, setBalances] = useState<
    { publicKey: string; itemsRedeemed: number; itemsAvailable: number, collectionMint: string }[]
  >([]);

  const candyMachineKeys = useMemo(() => [
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03),
    publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04),
  ], []);


  useEffect(() => {
    const fetchBalances = async () => {
      const results = await getCandyMachinesBalance(candyMachineKeys);
      setBalances(results);
    };
    fetchBalances();

  }, [candyMachineKeys])

  const candyMachines = balances.map((balance, index) => ({
    id: index + 1,
    cost: `${(index + 1) * 0.1} SOL`,
    candibarValue: [500, 950, 1500, 2025][index],
    image: [snake00.src, snake01.src, snake02.src, snake03.src][index],
    itemsAvailable: balance.itemsAvailable,
    itemsRedeemed: balance.itemsRedeemed,
    collectionMint: balance.collectionMint,
    candyMachinekeyId: candyMachineKeys[index],
  }));

  return (
    <div className="text-center justify-center flex flex-col">

        <p className="text-center text-3xl font-extrabold p-3">
        Unlock the future of digital assets with Snake Coin 2025 NFT!
      </p>

      <div className="flex flex-col text-1xl items-center justify-center p-5">
        <p className="max-w-7xl leading-relaxed">
          Embodying the wisdom and mystique of the Year of the Snake, this NFT represents
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
            &nbsp;transformation
          </span>,
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
            &nbsp;intelligence
          </span>, and
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-500 to-green-600 animate-pulse">
            &nbsp;prosperity
          </span>.
          By owning one or more of these unique collectibles, you tap into the Snake&apos;s energy—symbolizing
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
            &nbsp;intuition
          </span>,
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-600 animate-pulse">
            &nbsp;adaptability
          </span>, and
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 animate-pulse">
            &nbsp;resourcefulness
          </span>.
          &nbsp;Each NFT reflects these qualities through its rarity and value. Seize the opportunity to be part of this zodiac-inspired evolution. Claim your piece of the movement today!
        </p>
      </div>  

    <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
        {candyMachines.map((machine, index) => (
          <div key={machine.id}>
            <Card className="flex">
              <CardContent className="flex aspect-square items-center justify-center p-1">
                <span className="text-1xl font-semibold">
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
                      <h4
                        className="text-sm font-semibold">
                        Snake Collection 2025 #{machine.id} </h4>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <ChevronsUpDown className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                      SOL cost: {parseFloat(machine.cost).toFixed(1)} | 
                      mints: {machine.itemsRedeemed} of {machine.itemsAvailable}
                      {/* {machine.cost} */}
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
                  <Image
                    width={500}
                    height={500}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} src={machine.image} alt={`Snake ${machine.id}`} />
                  <MintSnakes candyMachineId={machine.candyMachinekeyId} collectionId={machine.collectionMint} />
                </span>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="mb-6 p-4">
      Each wallet is limited to a maximum of two NFTs per collection set, with a total limit of 8 NFTs across all four collections.
      </div>
    </div>
  );

};
export default Card2025;
