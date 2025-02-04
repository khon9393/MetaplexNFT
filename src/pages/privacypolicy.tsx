import type { NextPage } from "next";
import Head from "next/head";
import { PrivacyPolicyView } from "../views";

const PrivacyPolicy: NextPage = (props) => {
  return (
      <>
      <Head>
      <title>Candibarnft - Privacy Policy</title>
      <meta
        name="Candibarnft - Privacy Policy"
        content="Privacy Policy for Candibar"
      />
      </Head>
      <PrivacyPolicyView />      
      </>
  );
};

export default PrivacyPolicy;