import type { NextPage } from "next";
import Head from "next/head";
import { TermsOfServiceView } from "../views";

const TermOfService: NextPage = (props) => {
  return (
      <>
      <Head>
      <title>Candibarnft.com - Term of Service</title>
      <meta
        name="description"
        content="Read the terms of service for Candibar, the leading platform for NFT enthusiasts. Understand our policies and guidelines."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Candibarnft - Term of Service" />
      <meta
        property="og:description"
        content="Read the terms of service for Candibar, the leading platform for NFT enthusiasts. Understand our policies and guidelines."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.candibarnft.com/termofservice" />
      <meta property="og:image" content="https://www.candibarnft.com/images/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Candibarnft - Term of Service" />
      <meta
        name="twitter:description"
        content="Read the terms of service for Candibar, the leading platform for NFT enthusiasts. Understand our policies and guidelines."
      />
      <meta name="twitter:image" content="https://www.candibarnft.com/images/twitter-image.jpg" />
      </Head>
      <TermsOfServiceView />      
      </>
  );
};

export default TermOfService;