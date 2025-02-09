import type { NextPage } from "next";
import Head from "next/head";
import { AstrologySignView } from "../views";

const AstrologySign: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft - Astrology Sign NFT</title>
        <meta
          name="Candibar NFT - Astrology Sign NFT"
          content="2025 Snake NFT"
        />
      </Head>
      <AstrologySignView />
    </div>
  );
};

export default AstrologySign;
