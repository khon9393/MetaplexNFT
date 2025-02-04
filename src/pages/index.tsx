import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {


  return (
    <div>
      <Head>
        <title>Candibar NFT</title>
        <meta
          name="Candibar NFT Home"
          content="Candibar NFT"
        />
      </Head>
      <HomeView />
    </div>
   
  );
};

export default Home;
