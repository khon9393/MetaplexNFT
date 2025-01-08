import React, {useState, useEffect, useRef } from "react";
import Link from "next/link";
import Text from './Text';
import NavElement from './nav-element';

import snake00 from "/home/ksayakho/myapp/Candibar/CandibarNFTs/public/2025/snake0_2025_500.jpg";
import snake01 from "/home/ksayakho/myapp/Candibar/CandibarNFTs/public/2025/snake1_2025_500.jpg";
import snake02 from "/home/ksayakho/myapp/Candibar/CandibarNFTs/public/2025/snake2_2025_500.jpg";
import snake03 from "/home/ksayakho/myapp/Candibar/CandibarNFTs/public/2025/snake3_2025_500.jpg";

import {MintSnake01} from "/home/ksayakho/myapp/Candibar/CandibarNFTs/src/components/MintSnake01"
import {MintSnake02} from "/home/ksayakho/myapp/Candibar/CandibarNFTs/src/components/MintSnake02"
import {MintSnake03} from "/home/ksayakho/myapp/Candibar/CandibarNFTs/src/components/MintSnake03"
import {MintSnake04} from "/home/ksayakho/myapp/Candibar/CandibarNFTs/src/components/MintSnake04"
import {getCandyMachinesBalance}   from '../stores/useCandyMachine';
import { publicKey, PublicKey } from '@metaplex-foundation/umi';
import  customstyles from "../styles/NewsTicker.module.css";

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

interface Props {
    children: React.ReactNode;
  }

//export async function Card2025() {
export const Card2025: React.FC<Props> = ({ children}) => {

    const [isPaused, setIsPaused] = useState(false);
    const tickerRef = useRef(null);
  
    const newsItems = [
      "🚀 Exciting updates are coming to Candibar!",
      "💎 Swap your NFTs for Candibar Tokens soon!",
      "🎉 Join our community and stay ahead of the game!",
      "🔥 Only 2 NFTs per collection set per wallet!",
    ];

      const [isOpenStates, setIsOpenStates] = useState([false, false, false, false]);

        const candyMachineKeys = [
          publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID01),
          publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID02),
          publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID03),
          publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID04),
        ];
      
        const [balances, setBalances] = useState<
          { publicKey: string; itemsRedeemed: number; itemsAvailable: number, collectionMint: string}[]
        >([]);
      
        useEffect(() => {
          const fetchBalances = async () => {
            const results = await getCandyMachinesBalance(candyMachineKeys);
            setBalances(results);
          };
          fetchBalances();

          const ticker = tickerRef.current;
          let animationFrame;
          const scroll = () => {
            if (!isPaused && ticker) {
              const speed = Math.max(1, ticker.offsetWidth / 900); // Adjust speed
              ticker.scrollBy({ left: speed, behavior: "auto" });
      
              if (ticker.scrollLeft >= ticker.scrollWidth - ticker.offsetWidth) {
                ticker.scrollLeft = 0; // Loop back to start
              }
            }
            animationFrame = requestAnimationFrame(scroll);
          };
      
          animationFrame = requestAnimationFrame(scroll);
      
          return () => cancelAnimationFrame(animationFrame);
          
        }, [isPaused]);
      
        useEffect(() => {
          const handleResize = () => {
            if (tickerRef.current) {
              tickerRef.current.scrollLeft = 0; // Reset on resize/fullscreen
            }
          };
      
          window.addEventListener("resize", handleResize);
      
          return () => window.removeEventListener("resize", handleResize);
        }, []);

        const candyMachines = balances.map((balance, index) => ({
          id: index + 1,
          cost: `${(index + 1) * 0.1} SOL`,
          candibarValue: [500, 950, 1500, 2025][index],
          image: [snake00.src, snake01.src, snake02.src, snake03.src][index],
          MintComponent: [MintSnake01, MintSnake02, MintSnake03, MintSnake04][index],
          itemsAvailable: balance.itemsAvailable,
          itemsRedeemed: balance.itemsRedeemed,
          collectionMint: balance.collectionMint,
        }));
      
        return (
          <div className="md:w-full">


<div
      className={customstyles.newsTicker}
      ref={tickerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={customstyles.newsTickerTrack}>
        {newsItems.map((item, index) => (
          <span key={index} className={customstyles.newsItem}>
            {item}
          </span>
        ))}
      </div>
    </div>

            <div className="text-center p-3">
              <h4 className="md:w-full text-2x1 md:text-4xl text-center text-slate-100 my-2">
                {children}
                <p>Unlock the future of digital assets with Snake Coin 2025 NFT!</p>
                <br />
                <p className="text-slate-300 text-xl md:text-xl">
                  Embodying the wisdom and mystique of the Year of the Snake, this NFT represents transformation, intelligence, and prosperity. By owning one or more of these unique collectibles, you tap into the Snake's energy—symbolizing intuition, adaptability, and resourcefulness. Each NFT reflects these qualities through its rarity and value. Seize the opportunity to be part of this zodiac-inspired evolution. Claim your piece of the movement today!
                </p>
              </h4>
            </div>
      
            <div style={styles.container}>
              {candyMachines.map((machine, index) => (
                <div key={machine.id} style={styles.box}>
                  <Card className="flex">
                    <CardContent className="flex aspect-square items-center justify-center p-1">
                      <span className="text-1xl text-black font-semibold">
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
                            SOL cost: {parseFloat(machine.cost).toFixed(1)} | mints: {machine.itemsRedeemed} of {machine.itemsAvailable}
                            {/* {machine.cost} */}
                          </div>
                          <CollapsibleContent className="space-y-2">
                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                              mints: {machine.itemsRedeemed} of {machine.itemsAvailable}
                            </div>
                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                              Candibar value: {machine.candibarValue}
                            </div>
                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                              Collection address: {machine.collectionMint}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                        <img className="flex" src={machine.image} alt={`Snake ${machine.id}`} />
                        <machine.MintComponent />
                      </span>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        );

};
export default Card2025;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0px",
  },
  box: {
      flex: 1,
      margin: "0 10px",
      textAlign: "center",
      border: "0px solid #ccc",

  },
};

