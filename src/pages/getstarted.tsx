import type { NextPage } from "next";
import Head from "next/head";
import { GetStartedView } from "../views";

const GetStarted: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Candibar NFT - Get Started</title>
        <meta name="description" content="Get started with Candibar NFT by setting up your Solana Wallet. Follow our step-by-step guide to begin your journey in the world of NFTs." />
        <meta name="keywords" content="Candibar, NFT, Get Started, Solana Wallet, Blockchain, Cryptocurrency" />
        <meta name="author" content="Candibar Team" />
        <meta property="og:title" content="Candibar NFT - Get Started" />
        <meta property="og:description" content="Get started with Candibar NFT by setting up your Solana Wallet. Follow our step-by-step guide to begin your journey in the world of NFTs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/getstarted" />
        <meta property="og:image" content="https://yourwebsite.com/images/getstarted-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibar NFT - Get Started" />
        <meta name="twitter:description" content="Get started with Candibar NFT by setting up your Solana Wallet. Follow our step-by-step guide to begin your journey in the world of NFTs." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/getstarted-banner.png" />
      </Head>
      <GetStartedView />
    </div>
  );
};

export default GetStarted;
