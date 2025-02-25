import type { NextPage } from "next";
import Head from "next/head";
import { NFTSwapView } from "../views";

const NFTSwap: NextPage = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <Head>
        <title>Candibarnft - NFT Swap</title>
        <meta
          name="description"
          content="Swap your NFTs for Candibar tokens on Candibarnft. Experience seamless and secure NFT trading."
        />
        <meta
          name="keywords"
          content="Candibarnft, NFT Swap, NFT Trading, Candibar tokens, Blockchain, Cryptocurrency"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Candibarnft - NFT Swap" />
        <meta
          property="og:description"
          content="Swap your NFTs for Candibar tokens on Candibarnft. Experience seamless and secure NFT trading."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.candibarnft.com/nftswap" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibarnft - NFT Swap" />
        <meta
          name="twitter:description"
          content="Swap your NFTs for Candibar tokens on Candibarnft. Experience seamless and secure NFT trading."
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
      </Head>
      <NFTSwapView />      
    </div>
  );
};

export default NFTSwap;
