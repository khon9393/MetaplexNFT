import type { NextPage } from "next";
import Head from "next/head";
import { AstrologySignView } from "../views";

const AstrologySign: NextPage = (props) => {

  return (
    <div>
        <Head>
        <title>Candibarnft.com - Snake NFT</title>
        <meta name="description" content="Discover the unique Snake NFT on Candibarnft. Explore the astrology zodiac collection and get your exclusive Snake NFT today." />
        <meta name="keywords" content="Candibarnft, Snake NFT, astrology zodiac, NFT collection, exclusive NFT" />
        <meta name="author" content="Candibarnft" />
        <meta property="og:title" content="Candibarnft - Snake NFT" />
        <meta property="og:description" content="Discover the unique Snake NFT on Candibarnft. Explore the astrology zodiac collection and get your exclusive Snake NFT today." />
        <meta property="og:image" content="/path/to/snake-nft-image.jpg" />
        <meta property="og:url" content="https://www.candibarnft.com/AstrologySign" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibarnft - Snake NFT" />
        <meta name="twitter:description" content="Discover the unique Snake NFT on Candibarnft. Explore the astrology zodiac collection and get your exclusive Snake NFT today." />
        <meta name="twitter:image" content="/path/to/snake-nft-image.jpg" />
      </Head>
      <AstrologySignView />
    </div>
  );
};

export default AstrologySign;
