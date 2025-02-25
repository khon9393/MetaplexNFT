import type { NextPage } from "next";
import Head from "next/head";
import { CandiView } from "../views";

const Candi: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft.io - Get Your Candi NFT</title>
        <meta name="description" content="Candibar NFT - Get your unique Candi NFT. Join the Candibar community and explore the world of digital collectibles." />
        <meta name="keywords" content="Candibar, NFT, Candi NFT, digital collectibles, blockchain, crypto" />
        <meta name="author" content="Candibar Team" />
        <meta property="og:title" content="Candibarnft.io - Get Your Candi NFT" />
        <meta property="og:description" content="Candibar NFT - Get your unique Candi NFT. Join the Candibar community and explore the world of digital collectibles." />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://candibarnft.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibarnft.io - Get Your Candi NFT" />
        <meta name="twitter:description" content="Candibar NFT - Get your unique Candi NFT. Join the Candibar community and explore the world of digital collectibles." />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>
      <CandiView />
    </div>
  );
};

export default Candi;
