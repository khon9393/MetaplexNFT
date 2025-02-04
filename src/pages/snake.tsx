import type { NextPage } from "next";
import Head from "next/head";
import { SnakeView } from "../views";

const Candi0: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft - Snake NFT</title>
        <meta
          name="Candibar NFT - Get Snake NFT"
          content="Snake NFT"
        />
      </Head>
      <SnakeView />
    </div>
  );
};

export default Candi0;
