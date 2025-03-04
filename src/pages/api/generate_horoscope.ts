import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { query } from "../../lib/db";
// curl -X POST http://localhost:3003/api/generate_horoscope
//6. (Optional) Manually Trigger the Cron Job
//curl -X GET https://your-vercel-app.vercel.app/api/generate_horoscope
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API,
});

const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });
    if (req.method !== "GET") return res.status(405).json({ error: "Method Not Allowed" });
    
    try {
        for (let sign of zodiacSigns) {
            const currentYear = new Date().getFullYear();
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `Write a detailed monthly horoscope for ${sign} for the year ${currentYear}.
                  - Do not include <!DOCTYPE html><html><body> tags
                  - Immediately follow with an <h2> showing the date range for ${sign}
                  - Use <h2> for sections (Overview, Love, Career, etc.)
                  - Use <p> for body text
                  - Use <ul><li> for lucky days and colors
                  - Theme and tone should be all about all candy sugary sweet confections outlook
                  - Tone should be whimsical, comical, entertaining, funny, joking
                  - Include spaces between sections
                  - Include spaces before recommend sugary sweet items
                  - Instead of lucky numbers recommend sugary sweet items
                  - Do not change background color
                  - End with a riskay sightly offensive quote in <blockquote> 
                  - For <blockquote> style use text-lg italic text-gray-600 dark:text-gray-400 p-2`
                }],
                max_tokens: 800,
            });

            const reading = response.choices[0]?.message?.content ?? "No reading available.";
            await query(
                "INSERT INTO zodiac_readings (sign, reading) VALUES ($1, $2) ON CONFLICT (sign) DO UPDATE SET reading = EXCLUDED.reading, created_at = NOW()",
                [sign, reading]
            );
        }

        res.status(200).json({ message: "Readings updated successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
