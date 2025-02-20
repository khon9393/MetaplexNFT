import { mplCandyMachine, safeFetchMintCounterFromSeeds } from "@metaplex-foundation/mpl-core-candy-machine";
import useUmiStore from "../../stores/useUmiStore";
import { PublicKey, publicKey} from '@metaplex-foundation/umi';
import { clusterApiUrl } from "@solana/web3.js";
const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC || clusterApiUrl('devnet');

const fetchCandyGuardUserMintlimit = async (userpk: string, candyMachinekey: string, candyGuardkey: string, candyGuardId: number) => {
  const umi = useUmiStore.getState().umi;

  const mintCounter = await safeFetchMintCounterFromSeeds(umi, {
    id: candyGuardId, // The mintLimit id you set in your guard config
    user: publicKey(userpk),
    candyMachine: publicKey(candyMachinekey),
    candyGuard: publicKey(candyGuardkey),
  });
  
  return mintCounter ? mintCounter.count : -1;
};

export default fetchCandyGuardUserMintlimit;
