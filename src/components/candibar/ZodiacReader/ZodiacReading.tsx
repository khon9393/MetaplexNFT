"use client";

import { useState, useCallback, FC } from "react";
import CandibarModal from "../CandibarModal";
import { useWallet } from "@solana/wallet-adapter-react";
import fetchTokenBalance from "@/lib/fetchTokenBalance";
import { formatTokenAmount } from "@/lib/utils";
import { publicKey } from "@metaplex-foundation/umi";
import {ZodiacReadingDrawerWindow} from "./ZodiacReadingDrawerWindow";
import HoroscopeModal from "./HoroscopeModal";

const tokenMint = publicKey(process.env.NEXT_PUBLIC_TOKEN);

interface ZodiacReadingProps {
  sign: string;
}

export const ZodiacReading: FC<ZodiacReadingProps> = ({ sign }) => {
  const [hasCandbarToken, setHasCandbarToken] = useState(false);
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const wallet = useWallet();
  const [isCandibarModalOpen, setIsCandibarModalOpen] = useState(false);

  const onClick = useCallback(async () => {
    setSelectedSign(sign);
    const fetchBalance = async () => {
      let UserTokenBalance = '';
      try {
        const fetchedBalance = await fetchTokenBalance(tokenMint, wallet.publicKey.toString());
        const formattedBalance = formatTokenAmount(fetchedBalance.amount, 8);
<<<<<<< HEAD
        UserTokenBalance = formattedBalance;
=======
        UserTokenBalance = formattedBalance.toLocaleString();
>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
      } catch (error) {
        UserTokenBalance = '0';
      }

      if (parseFloat(UserTokenBalance) > 0) {
        setHasCandbarToken(true); // Set the token state to true if the user has the token
        setIsCandibarModalOpen(false); // Close the modal if the user has the token
      } else {
        setHasCandbarToken(false); // Set the token state to false if the user does not have the token
        setIsCandibarModalOpen(true); // Open the modal if the user does not have the token
      }
    };

    if (wallet.publicKey) {
      fetchBalance();
    } else {
      setHasCandbarToken(false); // Set the token state to false if the user does not have the token
      setIsCandibarModalOpen(true); // Open the modal if the user does not have the token
    }
  }, [wallet, setHasCandbarToken, setIsCandibarModalOpen, sign]);

  return (
    <>
      <button
        className="px-2 p-0 rounded-md border hover:underline animate-pulse bg-gradient-to-br from-lime-400 to-yellow-500 hover:from-white hover:to-purple-300 text-black hover:text-blue-500"
        onClick={onClick}
      >
        <span>{`View ${sign} Zodiac Reading`}</span>
      </button>

      {hasCandbarToken && selectedSign && (
        <HoroscopeModal
          sign={selectedSign}
          isOpen={true}
          onClose={() => setSelectedSign(null)}
        />
      )}
      {/* Display the CandibarModal component if the user does not have the token and a sign is selected */}
      {isCandibarModalOpen && (
        <CandibarModal
          isOpen={isCandibarModalOpen}
          onClose={() => setIsCandibarModalOpen(false)}
          MessageTitle="Candibar Token Required"
          MessageTxt={
            <>
              No Candibar tokens detected. If you have tokens, please connect your wallet. Otherwise, refer to the Getting Started guide to learn how to obtain tokens.
            </>
          }
        />
      )}
    </>
  );
};