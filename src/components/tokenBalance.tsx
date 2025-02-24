"use client";

import fetchUserTokenAccount from "../lib/fetchUserTokenAccount";
import useTokenStore from "../stores/useTokenStore";
import useUmiStore from "../stores/useUmiStore";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import TokenImg from '../../public/images/token.jpg';
import { formatTokenAmount} from "../lib/utils";
import Image from "next/image";
import { useWallet } from "@solana/wallet-adapter-react";

const TokenBalance = () => {
  const umiSigner = useUmiStore().signer;
  const { updateTokenAccount, tokenAccount } = useTokenStore();
    const wallet = useWallet();
  useEffect(() => {
    console.log(umiSigner);
    if (!umiSigner) {
      return;
    }
    
    console.log("fetching token account of user " + umiSigner.publicKey);
    fetchUserTokenAccount()
      .then((account) => {
        updateTokenAccount(account);
      })
      .catch((e) => {
        if (
          e.message.includes(
            "The account of type [Token] was not found at the provided address"
          )
        ) {
          updateTokenAccount(null);
        }
      });
  }, [umiSigner, updateTokenAccount]);

  return (
    <div className="flex gap-2 items-center">
    <Image
        width={200}
        height={200}
        src={TokenImg.src}
        className="aspect-square w-8 h-8 rounded-full"
        alt="token image"
      />
      {tokenAccount || tokenAccount === null ? (
        <div className="w-full text-center">
          {tokenAccount === null || !wallet.connected
            ? "0"
            : "Balance: " +  formatTokenAmount(tokenAccount,8)}
        </div>
      ) : (
        <Skeleton className="w-full min-w-[150px] h-8" /> 
      )}
    </div>
  );
};

export default TokenBalance;
