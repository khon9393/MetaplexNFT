// Next, React
import { FC, useEffect, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import Card2025_candi0 from 'components/Card2025_Candi0';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { Toaster } from '@/components/ui/toaster';

export const CandiView0: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <div className="">
        <Card2025_candi0 />
         <Toaster />
      </div>
  );
};

