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
        <title>Candibarnft.com - Sol Calculator</title>
        <meta name="description" content="Calculate the exchange rate of Sol to USD with Candibarnft's Sol Calculator." />
        <meta name="keywords" content="Candibarnft, Sol Calculator, Sol to USD, cryptocurrency, exchange rate" />
        <meta name="author" content="Candibarnft" />
        <meta property="og:title" content="Candibarnft - Sol Calculator" />
        <meta property="og:description" content="Calculate the exchange rate of Sol to USD with Candibarnft's Sol Calculator." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.candibarnft.com/sol-calculator" />
        <meta property="og:image" content="https://www.candibarnft.com/images/sol-calculator.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Candibarnft - Sol Calculator" />
        <meta name="twitter:description" content="Calculate the exchange rate of Sol to USD with Candibarnft's Sol Calculator." />
        <meta name="twitter:image" content="https://www.candibarnft.com/images/sol-calculator.png" />
      </Head>

      <div>Exchange Rate: {exchangeRate !== null ? exchangeRate : "Loading..."}</div>
    </div>
  );
};

export default SolCalc;
