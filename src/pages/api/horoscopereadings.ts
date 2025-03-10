import { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../lib/db";
import Cache from '../../lib/cache';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") return res.status(405).json({ error: "Method Not Allowed" });

    const cacheKey = 'horoscope_readings';
    const cache = new Cache<Buffer>(3600000); // Cache TTL set to 1 hour (3600000 milliseconds)

    try {
        // Check if the reading is in the cache
        const cachedHoroscope = cache.get(cacheKey);
        if (cachedHoroscope) {
            return res.status(200).json(JSON.parse(cachedHoroscope.toString()));
        }

        // Fetch readings from the database
        const readings = await query("SELECT sign, duration, reading, created_at FROM zodiac_readings ORDER BY created_at DESC", []);

        // Store the readings in the cache
        cache.set(cacheKey, Buffer.from(JSON.stringify(readings)));

        res.status(200).json(readings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
