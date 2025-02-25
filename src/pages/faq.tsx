import type { NextPage } from "next";
import Head from "next/head";
import { FAQView } from "../views";

const faq: NextPage = (props) => {

  return (
    <div>
      <Head>
        <title>Candibarnft.io - Frequently Asked Questions</title>
        <meta name="description" content="Find answers to the most frequently asked questions about Candibar NFT. Learn more about our platform, features, and how to get started." />
        <meta name="keywords" content="Candibar, NFT, FAQ, blockchain, crypto, questions, answers" />
        <meta property="og:title" content="Candibarnft.io - Frequently Asked Questions" />
        <meta property="og:description" content="Find answers to the most frequently asked questions about Candibar NFT. Learn more about our platform, features, and how to get started." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://candibarnft.io/faq" />
        <meta property="og:image" content="https://candibarnft.io/images/faq-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibarnft.io - Frequently Asked Questions" />
        <meta name="twitter:description" content="Find answers to the most frequently asked questions about Candibar NFT. Learn more about our platform, features, and how to get started." />
        <meta name="twitter:image" content="https://candibarnft.io/images/faq-banner.png" />
      </Head>
      <FAQView />
      
    </div>
  );
};

export default faq;
