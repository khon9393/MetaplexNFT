import { mplCandyMachine, safeFetchMintCounterFromSeeds } from "@metaplex-foundation/mpl-core-candy-machine";
import useUmiStore from "../../stores/useUmiStore";
import { publicKey} from '@metaplex-foundation/umi';
<<<<<<< HEAD

const fetchCandyGuardUserMintlimit = async (userpk: string, candyMachinekey: string, candyGuardkey: string, candyGuardId: number) => {
  const umi = useUmiStore.getState().umi;

  const mintCounter = await safeFetchMintCounterFromSeeds(umi, {
    id: candyGuardId, // The mintLimit id you set in your guard config
    user: publicKey(userpk),
=======
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { Connection} from "@solana/web3.js";


const fetchCandyGuardUserMintlimit = async (userpk: string, candyMachinekey: string, candyGuardkey: string, candyGuardId: number) => {
  // const umi = useUmiStore.getState().umi;
  const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
const SOLANA_CONNECTION = new Connection(quicknodeEndpoint)

const umi = createUmi(SOLANA_CONNECTION)
 .use(mplCandyMachine());

  const mintCounter = await safeFetchMintCounterFromSeeds(umi, {
    id: candyGuardId, // The mintLimit id you set in your guard config
     user: publicKey(userpk),
    //user: publicKey('9edke98gDD1MYwjc9pgnhDu9bmXngip82YWKwHMHboai'),

>>>>>>> 512e5360dcfc79e95f622d3ff68c966bfb184451
    candyMachine: publicKey(candyMachinekey),
    candyGuard: publicKey(candyGuardkey),
  });
  
  return mintCounter ? mintCounter.count : -1;// Amount already minted
};

export default fetchCandyGuardUserMintlimit;
