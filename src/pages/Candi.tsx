import type { NextPage } from "next";
import Head from "next/head";
import { CandiView } from "../views";

const Candi: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft.io</title>
        <meta
          name="Candibar NFT - Get Candi NFT"
          content="Candi NFT"
        />
      </Head>
      <CandiView />
    </div>
  );
};

export default Candi;
