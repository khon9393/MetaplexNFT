import { create } from 'zustand';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
const quicknodeEndpoint = process.env.NEXT_PUBLIC_RPC;
interface UserSOLBalanceStore {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey) => void;
}

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey) => {
    let balance = 0;
    try {
      const SOLANA_CONNECTION = new Connection(quicknodeEndpoint);
      balance = await SOLANA_CONNECTION.getBalance(new PublicKey(publicKey));
      balance = balance / LAMPORTS_PER_SOL;
    } catch (e) {
      console.log(`error getting balance: `, e);
    }
    set((s) => ({ ...s, balance }));
    return balance ?? 0;
  },
}));

export default useUserSOLBalanceStore;