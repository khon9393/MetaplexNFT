"use client";

import {
  WalletProvider
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import React, { FC, useMemo, useState, useEffect } from "react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

type Props = {
  children?: React.ReactNode;
};

export const WalletAdapterProvider: FC<Props> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  const wallets = useMemo(() => {
    try {
      return [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
        new TorusWalletAdapter(),
      ];
    } catch (err) {
      setError("Failed to load Solana wallets. Please refresh the page.");
      console.error("Wallet Adapter Error:", err);
      return [];
    }
  }, []);

  useEffect(() => {
    if (error) {
      console.warn("Wallet Provider encountered an error:", error);
    }
  }, [error]);

  return (
    <>
      {error ? (
        <div className="wallet-error">
          <p>{error}</p>
        </div>
      ) : (
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            {children}
          </WalletModalProvider>
        </WalletProvider>
      )}
    </>
  );
};
