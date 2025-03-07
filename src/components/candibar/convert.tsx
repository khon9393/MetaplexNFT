import { useState, useEffect } from "react";
import axios from "axios";

export default function Convert() {
    const [solPrice, setSolPrice] = useState<number | null>(null);
    const [solAmount, setSolAmount] = useState<number>(1);
    const [usdValue, setUsdValue] = useState<number | null>(null);

    useEffect(() => {
        fetchPrice();
    }, []);

    const fetchPrice = async () => {
        try {
            const response = await axios.get<{ solToUsd: number }>("/api/convert");
            setSolPrice(response.data.solToUsd);
        } catch (error) {
            console.error("❌ Error fetching SOL price:", error);
        }
    };

    const handleConvert = () => {
        if (solPrice) {
            setUsdValue(solAmount * solPrice);
        }
    };

    return (
        <div
            // style={{ backgroundImage: `url(${jadeEmp.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}

            // className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6"
            className="flex flex-col items-center justify-center px-2 pb-6"
            >

            <div className="flex flex-col items-center space-y-4 mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 border-2 border-gray-300 dark:border-gray-700">
             <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🔄</h1>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">SOL to USD Converter</h1>
                <p className="text-lg font-bold text-gray-600 dark:text-gray-300">
                    Current SOL Price: {solPrice ? `$${solPrice.toFixed(2)}` : "Loading..."}
                </p>

                <input
                    type="number"
                    value={solAmount}
                    onChange={(e) => setSolAmount(parseFloat(e.target.value) || 0)}
                    placeholder="Enter SOL amount"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleConvert}
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Convert
                </button>
                {usdValue !== null && (
                    <p className="text-xl font-semibold text-gray-700 dark:text-white">
                        💰 USD Value: ${usdValue.toFixed(2)}
                    </p>
                )}
            </div>


        </div>
    );
}
