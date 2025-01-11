import type { NextPage } from "next";
import Head from "next/head";
import { NFTSwapView } from "views";

const NFTSwap: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Candibarnft.io</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <NFTSwapView />
    </div>
  );
};

export default NFTSwap;
