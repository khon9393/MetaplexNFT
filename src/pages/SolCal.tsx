import Head from "next/head";
import fetchExchangeRate from "../pages/api/Soltousdtcalc";
import { useEffect, useState } from "react";

const SolCalc = () => {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      const rate = await fetchExchangeRate();
      setExchangeRate(1);
    };

    getExchangeRate();
  }, []);

  return (
    <div>
      <Head>
        <title>Candibarnft - Sol Calculator</title>
        <meta
          name="Candibar NFT - Sol Calculator"
          content="Sol Calculator"
        />
      </Head>

      <div>Exchange Rate: {exchangeRate !== null ? exchangeRate : "Loading..."}</div>
    </div>
  );
};

export default SolCalc;
