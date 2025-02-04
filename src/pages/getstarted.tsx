import type { NextPage } from "next";
import Head from "next/head";
import { GetStartedView } from "../views";

const GetStarted: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Candibar NFT - Get Started</title>
        <meta
          name="Candibar NFT - Get Started"
          content="Get Started Solana Wallet"
        />
      </Head>
      <GetStartedView />
    </div>
  );
};

export default GetStarted;
