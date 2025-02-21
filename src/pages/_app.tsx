import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useState } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');
import FirstVisitModal from '@/components/candibar/FirstVisitModal'; // adjust path as necessary
import { Toaster } from '@/components/ui/toaster';
import { UmiProvider } from "../providers/umiProvider";
import Starfield from '@/components/candibar/Starfield';

const App: FC<AppProps> = ({ Component, pageProps }) => {

    return (
        <>
         <Starfield />
          <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /> */}
            <title>Candibar NFTs</title>
          </Head>
          <FirstVisitModal />

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
