// Next, React
import { FC, useEffect, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import Card2025 from 'components/Card2025';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';


export const HomeView: FC = ({ }) => {
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
      {/* <div className="flex items-center justify-center max-w-7xl p-2"> */}
        <Card2025 />
      </div>
    // </div>
  );
};

