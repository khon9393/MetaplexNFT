import type { NextPage } from "next";
import Head from "next/head";
import { CPAGView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
      <title>Candibarnft.com - Candibar Platform Asset Guide (CPAG)</title>
      <meta
        name="description"
        content="Explore the Candibar Platform Asset Guide (CPAG) to understand the basic prospectives of the Candibarnft.com."
      />
      <meta name="keywords" content="Candibar, CPAG, NFT, Asset Guide, Platform, Candibarnft" />
      <meta name="author" content="Candibar Team" />
      <meta property="og:title" content="Candibar Platform Asset Guide (CPAG) - Candibarnft.com" />
      <meta
        property="og:description"
        content="Explore the Candibar Platform Asset Guide (CPAG) to understand the basics prospectives of Candibarnft.com."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://candibarnft.com/cpag" />
      <meta property="og:image" content="https://candibarnft.com/images/cpag-thumbnail.png" />
      </Head>
      <CPAGView />
    </div>
  );
};

export default Basics;
