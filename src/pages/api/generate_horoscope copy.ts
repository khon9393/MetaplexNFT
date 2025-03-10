import type { NextRequest } from 'next/server';
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import { query } from "../../lib/db";
// curl -X GET http://localhost:3000/api/generate_horoscope
//6. (Optional) Manually Trigger the Cron Job
//curl -X GET https://your-vercel-app.vercel.app/api/generate_horoscope
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API,
});

const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo","Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", "2025 Wood Snake"
];

const durations = ["Day", "Week", "Month"];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") return res.status(405).json({ error: "Method Not Allowed" });

    try {
        const tasks = [];

        for (let sign of zodiacSigns) {
            for (let duration of durations) {
                tasks.push(generateHoroscope(sign, duration));
            }
        }

        await Promise.all(tasks);

        res.status(200).json({ message: "Readings updated successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function generateHoroscope(sign: string, duration: string) {
    try {
        console.log(`Fetching horoscope for ${sign} (${duration})`);

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user", content: `Write a detailed horoscope for zodiac sign ${sign} for the ${duration}.
                - Based on current year.
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
                - End with a riskay sightly offensive quote in <blockquote> 
                - For <blockquote> style use text-lg italic text-gray-600 dark:text-gray-400 p-2`
            }],
            max_tokens: 800,
            // timeout: 10000, // Set a timeout of 10 seconds
        });

        const reading = response.choices[0]?.message?.content ?? "No reading available.";
        const signToInsert = sign.includes("2025") ? sign.replace("2025", "").trim() : sign;
        await query(
            "INSERT INTO zodiac_readings (sign, reading, duration) VALUES ($1, $2, $3) ON CONFLICT (sign,duration) DO UPDATE SET reading = EXCLUDED.reading, created_at = NOW()",
            [signToInsert, reading, duration]
        );

        console.log(`Horoscope for ${sign} (${duration}) updated successfully`);
    } catch (error) {
        console.error(`Error generating horoscope for ${sign} (${duration}):`, error);
    }
}

export async function GET(request: NextRequest) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', {
            status: 401,
        });
    }

    return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}