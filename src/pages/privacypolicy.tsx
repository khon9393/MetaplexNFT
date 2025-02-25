import type { NextPage } from "next";
import Head from "next/head";
import { PrivacyPolicyView } from "../views";

const PrivacyPolicy: NextPage = (props) => {
  return (
      <>
      <Head>
        <title>Candibarnft - Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Candibar, detailing how we handle user data and privacy." />
        <meta name="keywords" content="Candibarnft, Privacy Policy, User Data, Privacy, Data Protection" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Candibarnft - Privacy Policy" />
        <meta property="og:description" content="Privacy Policy for Candibar, detailing how we handle user data and privacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.candibarnft.com/privacypolicy" />
        <meta property="og:image" content="https://www.candibarnft.com/images/privacypolicy.jpg" />
      </Head>
      <PrivacyPolicyView />      
      </>
  );
};

export default PrivacyPolicy;