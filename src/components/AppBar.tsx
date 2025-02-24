import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NavElement from './nav-element';
//import { CandiNavigationMenu } from './nav-element/navmenu';
import {CandibarDropdownMenu1} from './nav-element/nftnavmenu';
import NetworkSwitcher from './NetworkSwitcher';
import Image from 'next/image';
import solanaLogo from '../../public/logos/solanaLogo.png';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useUserSOLBalanceStore from "../stores/useUserSOLBalanceStore";
import ThemeSwitcher from "./themeSwitcher";
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  //const { connection } = useConnection();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const wallet = useWallet();
  const [balance, setBalance] = useState(useUserSOLBalanceStore((s) => s.balance));
  const { getUserSOLBalance } = useUserSOLBalanceStore()


  useEffect(() => {
    const fetchBalance = async () => {
      if (wallet.publicKey) {
        console.log(wallet.publicKey.toBase58());
        const thebalance = await getUserSOLBalance(wallet.publicKey) as unknown as number;
        setBalance(thebalance || 0);
      }
    };
    fetchBalance();
  }, [wallet.publicKey, getUserSOLBalance, wallet, setBalance]);

  useEffect(() => {
    setAutoConnect(true);
  }, [setAutoConnect]);

  return (
    <div>
      {/* NavBar / Header */}

      <div className="navbar flex h-30 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <h1 className="text-center text-3xl md:pl-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
        <label
            htmlFor="my-drawer"
            className="btn-gh items-center justify-between md:hidden mr-6"
            onClick={() => setIsNavOpen(!isNavOpen)} // Optional, but you can still toggle the drawer visibility if needed
          >
            <div className="HAMBURGER-ICON space-y-2.5 ml-5">
              {/* The 3 horizontal lines */}
              <div className="h-0.5 w-8 bg-purple-600" />
              <div className="h-0.5 w-8 bg-purple-600" />
              <div className="h-0.5 w-8 bg-purple-600" />
            </div>
          </label>
          <Link href="/"
          >
            Candibar</Link>
        </h1>
        <div className="navbar-start align-items-center gap-1">
          <div className="btn-ghost btn-sm relative flex md:hidden items-center" style={{ width: '180px' }}>
            <WalletMultiButtonDynamic />
          </div>
        </div>
        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="hidden md:inline-flex items-center justify-center gap-2">
            <NavElement
              label="Home"
              href="/"
            />
            <div>

            < CandibarDropdownMenu1 />

            </div>

            <div className="flex flex-col items-center gap-2 pt-5" style={{ width: '180px' }}>
              <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mb-2" />
              <div className="flex items-center gap-2">
                <Image src={solanaLogo} alt="Solana Logo" width={80} />
                <span className="text-sm">SOL: {(wallet.connected ? balance : 0).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};