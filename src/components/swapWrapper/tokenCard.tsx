"use client";

import TokenImg from '../../../public/images/token.jpg';

import fetchAsset from "../../lib/das/fetchAsset";
import useEscrowStore from "../../stores/useEscrowStore";
import useTokenStore from "../../stores/useTokenStore";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TradeState } from "./swapWrapper";
import { set } from "@metaplex-foundation/umi/serializers";
import { formatTokenAmount } from "../../lib/utils";
import Image from "next/image";

interface TokenCardProps {
  tradeState: TradeState;
}

const TokenCard = (props: TokenCardProps) => {
  const { escrow } = useEscrowStore();
  const { tokenAsset, updateTokenAsset } = useTokenStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!tokenAsset && escrow?.token) {
      setLoading(true);
      fetchAsset(escrow.token).then((asset) => {
        updateTokenAsset(asset);
      });
    } else {
      setLoading(false);
    }
  }, [escrow, tokenAsset, updateTokenAsset]);

  return (
    <Card 
    //className="flex items-center w-full border border-foreground-muted rounded-xl shadow-lg p-4 gap-4"
    className="flex items-center px-3 bg-red-300 font-mono"
    >
      {tokenAsset ? (
        <Image
          src={TokenImg.src}
          className="rounded-xl w-12 h-12 aspect-square"
          alt="nft collection image"
          width={48}
          height={48}
        />
      ) : (
        <Skeleton className="w-24 h-24 rounded-xl" />
      )}

      {escrow && !loading ? (
        <div className="flex flex-col">
          {formatTokenAmount(escrow.amount,8)}{" "}
          {tokenAsset?.content.metadata.name}
        </div>
      ) : (
        <Skeleton className=" w-[250px] h-8" />
      )}
    </Card>
  );
};

export default TokenCard;
