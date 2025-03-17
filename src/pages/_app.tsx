import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useState } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
// require('@solana/wallet-adapter-react-ui/styles.css');
// require('../styles/globals.css');
import "../styles/globals.css"; // ✅ Recommended
import "@solana/wallet-adapter-react-ui/styles.css"; // ✅ Recommended
import FirstVisitModal from '@/components/candibar/FirstVisitModal'; 
import appletouch from '../../public/apple-touch-icon.png';
import { Toaster } from '@/components/ui/toaster';
import { UmiProvider } from "../providers/umiProvider";


const App: FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=.9" />
            <title>Candibar NFTs - Buy, Trade, NFT, Candibar Tokens</title>
            <meta name="description" content="Candibar NFTs - Buy & Trade Unique Digital Assets. Candibar Tokens Marketplace." />
            <meta name="keywords" content="Candibar, NFTs, Buy, Trade, Tokens, Digital Assets, Collectibles, Digital Art" />
            <meta name="author" content="Candibar" />
            <meta property="og:title" content="Candibar NFTs" />
            <meta property="og:description" content="Candibar NFTs - Buy, and Trade Unique Digital Assets | Candibar Tokens Marketplace" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.candibar.com" />
            <meta property="og:image" content="https://www.candibar.com/images/og-image.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Candibar NFTs" />
            <meta name="twitter:description" content="Candibar NFTs - Buy, and Trade Unique Digital Assets | Candibar Tokens Marketplace" />
            <meta name="twitter:image" content="https://www.candibar.com/images/twitter-image.jpg" />
            <meta name="seobility" content="c04242ff42b70e2b459d7520c519e14e" />
            {/* <link rel="apple-touch-icon" sizes="180x180" href={appletouch.src} /> */}
            </Head>
          {/* <FirstVisitModal /> */}

          <UmiProvider>

          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar/>
              <ContentContainer>
              
              <Component {...pageProps} /> 
              <Footer/>
              </ContentContainer>
            </div>
          </ContextProvider>

          </UmiProvider>
          <Toaster />
        </>
    );
};

export default App;
