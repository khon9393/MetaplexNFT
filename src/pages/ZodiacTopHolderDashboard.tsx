import type { NextPage } from "next";
import Head from "next/head";
import { AstrologyZodiacTopHoldersChartView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Candibarnft.com</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <AstrologyZodiacTopHoldersChartView />
    </div>
  );
};

export default Basics;
