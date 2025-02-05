import React, { useState } from "react";
import axios from "axios";

const API_KEY = "ory_at_G2kzE-xtjWuKVCw9SKMDW7G5P8pA4biNyzPcHprZUkE.nQUqfga8rpG8KwJxRjsZ_sZ-aUuzd3IYa8P2oxJPvh4"; // Replace with actual API Key

function SolToUsdtConverter() {
  const [solAmount, setSolAmount] = useState(1);
  const [usdtAmount, setUsdtAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExchangeRate = async () => {
    setLoading(true);
    setError(null);

    const query = {
      query: `{
        solana(network: solana) {
          dexTrades(
            baseCurrency: {is: "So11111111111111111111111111111111111111112"} 
            quoteCurrency: {is: "Es9vMFrzaCER1ziGxxTTNqFvNDoJJ6Vt5xgZYzUz3o9M"} 
            options: {desc: "block.height", limit: 1}
          ) {
            tradeAmount(in: USD)
            price
          }
        }
      }`,
    };

    try {
      const response = await axios.post(
        "https://graphql.bitquery.io/",
        query,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`, // Bearer Token Authentication
          },
        }
      );

      if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
      }

      const rate = response.data.data.solana.dexTrades[0]?.price;
      if (!rate) throw new Error("No exchange rate found");

      setExchangeRate(rate);
      setUsdtAmount((solAmount * rate).toFixed(2));
    } catch (err) {
      console.error("Error fetching exchange rate:", err);
      setError("Failed to fetch exchange rate. Check API key and limits.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>SOL to USDT Converter (BitQuery)</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>
        Amount in SOL:
        <input
          type="number"
          value={solAmount}
          onChange={(e) => setSolAmount(Number(e.target.value))}
          style={{ marginLeft: "10px", padding: "5px", color: "black" }} // Black text
        />
      </label>

      <button
        onClick={fetchExchangeRate}
        style={{
          marginLeft: "10px",
          padding: "8px 15px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Convert"}
      </button>

      <p>Exchange Rate: {exchangeRate ? exchangeRate : "Click Convert"}</p>
      <p>Equivalent in USDT: {usdtAmount !== null ? usdtAmount : "N/A"}</p>
    </div>
  );
}

export default SolToUsdtConverter;
