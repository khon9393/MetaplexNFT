import React, { useState, useEffect } from 'react';
import ccxt from 'ccxt';

function SolToUsdtConverter() {
  const [solAmount, setSolAmount] = useState(1);
  const [usdtAmount, setUsdtAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const exchange = new ccxt.binance(); // Using Binance for SOL/USDT
        const ticker = await exchange.fetchTicker('SOL/USDT');
        const rate = ticker.last;
        setExchangeRate(rate);
        setUsdtAmount((solAmount * rate).toFixed(2));
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
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
        <input type="number" value={solAmount} onChange={handleSolAmountChange} />
      </label>
      <p>Exchange Rate: {exchangeRate ? exchangeRate : 'Loading...'}</p>
      <p>Equivalent in USDT: {usdtAmount !== null ? usdtAmount : 'Calculating...'}</p>
    </div>
  );
}

export default SolToUsdtConverter;
