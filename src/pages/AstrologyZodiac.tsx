import type { NextPage } from "next";
import Head from "next/head";
import {AstrologyZodiacView } from "../views";

const AstrologyZodiac: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft - Snake NFT</title>
        <meta
          name="Candibar NFT - Get Snake NFT"
          content="Snake NFT"
        />
      </Head>
      <AstrologyZodiacView />
    </div>
  );
};

export default AstrologyZodiac;
