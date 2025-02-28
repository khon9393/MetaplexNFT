import type { NextPage } from "next";
import Head from "next/head";
import { AstrologySignView } from "../views";
import ZodiacCardReading from "@/components/candibar/old/ZodiacCardReading";

const AstrologySign: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft.com - Astrology Sign NFT</title>
        <meta name="description" content="Discover and collect unique Astrology Sign NFTs on Candibarnft. Explore the {props.sign} NFT and more." />
        <meta name="keywords" content="Candibarnft, Astrology Sign NFT, {props.sign} NFT, NFT collection, digital art, blockchain" />
        <meta property="og:title" content="Candibarnft - Astrology Sign NFT" />
        <meta property="og:description" content="Discover and collect unique Astrology Sign NFTs on Candibarnft. Explore the {props.sign} NFT and more." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.candibarnft.com/astrology-sign" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibarnft - Astrology Sign NFT" />
        <meta name="twitter:description" content="Discover and collect unique Astrology Sign NFTs on Candibarnft. Explore the {props.sign} NFT and more." />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
      </Head>
      <AstrologySignView />
    </div>
  );
};

export default AstrologySign;
