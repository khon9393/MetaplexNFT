import type { NextPage } from "next";
import Head from "next/head";
import { SnakeView } from "../views";

const Candi0: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft.io</title>
        <meta
          name="Candibar"
          content="Candi"
        />
      </Head>
      <SnakeView />
    </div>
  );
};

export default Candi0;
