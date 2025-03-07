import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Call CoinGecko API to get the SOL to USD price
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
        
        // Extract the price from the response
        const solPrice = response.data.solana.usd;

        res.status(200).json({ solToUsd: solPrice });
    } catch (error: any) {
        console.error("❌ Error fetching SOL price:", error.message);
        res.status(500).json({ error: "Failed to fetch SOL price" });
    }
}
