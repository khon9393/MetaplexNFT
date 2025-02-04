import type { NextPage } from "next";
import Head from "next/head";
import { TermsOfServiceView } from "../views";

const TermOfService: NextPage = (props) => {
  return (
      <>
      <Head>
      <title>Candibarnft - Term of Service</title>
      <meta
        name="Candibarnft - Term of Service"
        content="Term of Service for Candibar"
      />
      </Head>
      <TermsOfServiceView />      
      </>
  );
};

export default TermOfService;