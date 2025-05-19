import { mplCandyMachine, safeFetchMintCounterFromSeeds } from "@metaplex-foundation/mpl-core-candy-machine";
import useUmiStore from "../../stores/useUmiStore";
import { publicKey} from '@metaplex-foundation/umi';

const fetchCandyGuardUserMintlimit = async (userpk: string, candyMachinekey: string, candyGuardkey: string, candyGuardId: number) => {
  const umi = useUmiStore.getState().umi;

  const mintCounter = await safeFetchMintCounterFromSeeds(umi, {
    id: candyGuardId, // The mintLimit id you set in your guard config
    // user: publicKey(userpk),
    user: publicKey('9edke98gDD1MYwjc9pgnhDu9bmXngip82YWKwHMHboai'),

    candyMachine: publicKey(candyMachinekey),
    candyGuard: publicKey(candyGuardkey),
  });
  
  return mintCounter ? mintCounter.count : -1;// Amount already minted
};

export default fetchCandyGuardUserMintlimit;
