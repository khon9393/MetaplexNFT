import type { NextPage } from "next";
import Head from "next/head";
import { TestMintView } from "../views";
import { UmiProvider } from "@/providers/umiProvider";

const Testmint: NextPage = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <Head>
        <title>Candibarnft - NFT Swap</title>
        <meta
          name="Candibar NFT - Swap NFT"
          content="Swap NFT for Candibar tokens"
        />
      </Head>
      <TestMintView />
    </div>
  );
};

export default Testmint;
