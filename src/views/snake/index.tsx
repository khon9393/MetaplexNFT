// Next, React
import { FC, useEffect, useState } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import Card2025 from '@/components/candibar/Card2025';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { Toaster } from '@/components/ui/toaster';



export const SnakeView: FC = ({ }) => {

  return (
    <div className="">
        <Card2025 />
         <Toaster />
      </div>
  );
};

