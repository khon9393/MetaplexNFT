import fetchTokenBalance from "../../lib/fetchTokenBalance";
import fetchMetadataByMint from "../../lib/mpl-token-metadata/fetchMetadataByMint";
import { JsonMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { Token } from "@metaplex-foundation/mpl-toolbox";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useEscrowStore from "../../store/useEscrowStore";
import { formatTokenAmount } from "../../lib/utils";
const TokenEscrowSummary = () => {
  const escrow = useEscrowStore.getState().escrow;

  const [escrowTokenAccount, setEscrowTokenAccount] = useState<Token>();
  const [metadata, setMetadata] = useState<Metadata & JsonMetadata>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (escrow && escrow.token) {
      // fetch escrow token balance
      fetchTokenBalance(escrow.token, escrow.publicKey).then(
        (escrowTokenAccount) => {
          console.log({ escrowTokenAccount });
          setEscrowTokenAccount(escrowTokenAccount);

          // fetch metadata and json metadata
          fetchMetadataByMint(escrow.token).then((metadata) => {
            console.log({ metadata });
            setMetadata(metadata);
          });
        }
      );
    }
  }, [escrow]);

  return (
    <Card className="flex flex-col min-h-[300px] p-8 lg:aspect-square">
      <div className="text-xl">Token Escrow</div>
      <div className="flex flex-1 flex-col justify-center w-full items-center gap-4">
        {metadata?.image ? (
          <img alt="" 
          src={metadata.image} className="w-24 h-24 rounded-full" />
        ) : (
          <Skeleton className="w-24 h-24 rounded-full" />
        )}
        <div>Name: {metadata ? metadata.name : "n/a"}</div>
        <div>
          Balance:{" "}
          {escrowTokenAccount &&
            formatTokenAmount(escrowTokenAccount,8)
            }
        </div>
      </div>
    </Card>
  );
};

export default TokenEscrowSummary;
