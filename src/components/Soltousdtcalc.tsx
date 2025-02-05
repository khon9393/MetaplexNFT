import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SolToUsdtConverter() {
  const [solAmount, setSolAmount] = useState(1);
  const [usdtAmount, setUsdtAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    // Fetch the current SOL to USDT exchange rate
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usdt'
        );
        const rate = response.data.solana.usdt;
        setExchangeRate(rate);
        setUsdtAmount((solAmount * rate).toFixed(2));
      } catch (error) {
        console.error('Error fetching the exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [solAmount]);

  const handleSolAmountChange = (e) => {
    const amount = e.target.value;
    setSolAmount(amount);
    if (exchangeRate) {
      setUsdtAmount((amount * exchangeRate).toFixed(2));
    }
  };

  return (
    <div>
      <h1>SOL to USDT Converter</h1>
      <label>
        Amount in SOL:
        <input
          type="number"
          value={solAmount}
          onChange={handleSolAmountChange}
        />
      </label>
      <p>
        Equivalent in USDT: {usdtAmount !== null ? usdtAmount : 'Loading...'}
      </p>
    </div>
  );
}

export default SolToUsdtConverter;
