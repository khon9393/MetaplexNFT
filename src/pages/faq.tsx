import type { NextPage } from "next";
import Head from "next/head";
import { FAQView } from "../views";

const faq: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft.io</title>
        <meta
          name="Candibar NFT - FAQ"
          content="FAQ"
        />
      </Head>
      <FAQView />
      
    </div>
  );
};

export default faq;
