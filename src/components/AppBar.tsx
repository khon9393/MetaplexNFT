import Link from "next/link";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from "react";
import { useAutoConnect } from '../contexts/AutoConnectProvider';
import NavElement from './nav-element';
//import { CandiNavigationMenu } from './nav-element/navmenu';
import { CandibarDropdownMenu1 } from './nav-element/nftnavmenu';
import NetworkSwitcher from './NetworkSwitcher';
import Image from 'next/image';
import solanaLogo from '../../public/logos/solana-logo_1.svg';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useUserSOLBalanceStore from "../stores/useUserSOLBalanceStore";
import ThemeSwitcher from "./themeSwitcher";
import TokenBalance from "./tokenBalance";
import { UmiProvider } from "@/providers/umiProvider";
import Breadcrumbs from "./Breadcrumbs";
import { CandibarDropdownMenu2 } from "./nav-element/nftnavmenu2";

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
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
      <div className="md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">


      </div>
      <div className="navbar flex flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">

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
        <h1 className="text-3xl md:pl-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500">
          <Link href="/"
          >
            Candibar  
            </Link>
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
            {/* <NavElement
              label="Home"
              href="/"
            /> */}
            {/* <NavElement
              label="Getting&nbsp;Started"
              href="/getstarted"
            /> */}
            <div>
              < CandibarDropdownMenu1 />
            </div>

            <div>
              < CandibarDropdownMenu2 />
            </div>

            <div className="flex flex-col items-center gap-2 pt-0" style={{ width: '180px' }}>
              <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mb-2" />
            </div>
          </div>
        </div>
      </div>
      {typeof window !== 'undefined'
        && window.location.pathname === '/AstrologyZodiac'
        && (
          <div className='border-gray-300 bg-gray-800 text-center min-w-[400px]'>
            <div className="text-white px-2 font-mono text-1xl md:text-2xl font-bold animate-pulse hover:animate-none">
              <Link href="/Candi" className="hover:underline hover:text-blue-600">
                Get NFTs tradable for Candibar Tokens!
              </Link>
            </div>
          </div>
        )}

      {/* <div className="flex justify-center items-center bg-yellow-300 text-black p-4 rounded-lg shadow-lg mt-4">
        <h4 className="text-center text-lg font-bold">
          🚨 We are actively working with <strong>Phantom Wallet</strong> to resolve ongoing issues affecting minting requests. In the meantime, we recommend using <strong>Solflare Wallet</strong> for a smoother and more reliable minting experience. Thank you for your patience and understanding. 🚨
        </h4>
      </div> */}

      {!wallet.connected && (
      <div className='border-gray-300 bg-orange-500 text-center w-full min-w-[400px]'>
         <div className="text-black px-2 font-mono text-sm md:text-lg lg:text-xl xl:text-2xl animate-pulse whitespace-nowrap overflow-hidden text-ellipsis">
           Please connect your wallet
         </div>
       </div>
      )}

      {/* {!wallet.connected && (
        <div className='bg-yellow-300 text-black p-4 rounded-lg shadow-lg mt-4" text-center w-full min-w-[400px]'>
          <div className="text-white px-2 font-mono text-sm md:text-lg lg:text-xl xl:text-2xl animate-pulse whitespace-nowrap overflow-hidden text-ellipsis">
            Please connect your wallet
          </div>
        </div>
      )} */}

      <UmiProvider>

        <Breadcrumbs />
        {wallet.connected && (
          <div className="flex justify-center mx-auto text-center text-white">
            <div className="flex items-center gap-2 justify-center font-mono text-sm md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
              <Image src={solanaLogo} alt="Solana Logo" width={15} height={15} />
              <span>{(wallet.connected ? balance : 0).toLocaleString()} | </span>
              <TokenBalance />
            </div>
          </div>
        )}

      </UmiProvider>


    </div>



  );
};