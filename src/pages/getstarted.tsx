import type { NextPage } from "next";
import Head from "next/head";
import { GetStartedView } from "views";

const GetStarted: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Get Started</title>
        <meta
          name="description"
          content="Get Started Functionality"
        />
      </Head>
      <GetStartedView />
    </div>
  );
};

export default GetStarted;
