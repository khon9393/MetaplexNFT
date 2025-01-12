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

      {/* <p className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-500 to-purple-600 drop-shadow-lg animate-pulse p-7"> */}
      <p className="text-center text-4xl font-extrabold p-3">
        Unlock the future of digital assets with Snake Coin 2025 NFT!
      </p>

      <div className="flex flex-col text-2xl items-center justify-center p-5">
        <p className="text-center max-w-7xl leading-relaxed">
          Embodying the wisdom and mystique of the Year of the Snake, this NFT represents
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
            &nbsp;transformation
          </span>,
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-pulse">
            &nbsp;intelligence
          </span>, and
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-500 to-green-600 animate-pulse">
            &nbsp;prosperity
          </span>.
          By owning one or more of these unique collectibles, you tap into the Snake&apos;s energy—symbolizing
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 animate-pulse">
            &nbsp;intuition
          </span>,
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-green-600 animate-pulse">
            &nbsp;adaptability
          </span>, and
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-teal-600 animate-pulse">
            &nbsp;resourcefulness
          </span>.
          &nbsp;Each NFT reflects these qualities through its rarity and value. Seize the opportunity to be part of this zodiac-inspired evolution. Claim your piece of the movement today!
        </p>
      </div>

      <div className="flex p-2">
        <Card2025 />
      </div>
      {/* <div className="mb-6 items-center mx-auto max-w-screen-lg p-7">
      <DrawerWindow />
      </div> */}
      <div className="mb-6 items-center mx-auto max-w-screen-lg p-4">
      Each wallet is limited to a maximum of two NFTs per collection set, with a total limit of 8 NFTs across all four collections.
      </div>
     
    </div>
  );
};

