import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Candibarnft.io</title>
        <meta
          name="Candibar"
          content="Candibar NFT"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
