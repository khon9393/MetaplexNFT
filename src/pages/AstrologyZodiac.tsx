import type { NextPage } from "next";
import Head from "next/head";
import {AstrologyZodiacView } from "../views";

const AstrologyZodiac: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft - Snake NFT</title>
        <meta name="description" content="Discover the unique Snake NFT on Candibarnft. Explore the astrology zodiac collection and get your exclusive Snake NFT today." />
        <meta name="keywords" content="Candibarnft, Snake NFT, astrology zodiac, NFT collection, exclusive NFT" />
        <meta name="author" content="Candibarnft" />
        <meta property="og:title" content="Candibarnft - Snake NFT" />
        <meta property="og:description" content="Discover the unique Snake NFT on Candibarnft. Explore the astrology zodiac collection and get your exclusive Snake NFT today." />
        <meta property="og:image" content="/path/to/snake-nft-image.jpg" />
        <meta property="og:url" content="https://www.candibarnft.com/astrology-zodiac" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibarnft - Snake NFT" />
        <meta name="twitter:description" content="Discover the unique Snake NFT on Candibarnft. Explore the astrology zodiac collection and get your exclusive Snake NFT today." />
        <meta name="twitter:image" content="/path/to/snake-nft-image.jpg" />
      </Head>
      <AstrologyZodiacView />
    </div>
  );
};

export default AstrologyZodiac;
