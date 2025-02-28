import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Make sure this is correctly set
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const sign = req.query.sign as string;
  if (!sign) {
    return res.status(400).json({ error: "Missing zodiac sign" });
  }

  try {
    console.log("Fetching horoscope for:", sign);

    // Use chat completion instead of old completion method
    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo", // 🔄 Switch from "gpt-4" to "gpt-3.5-turbo"
    //   messages: [{ role: "user", content: `Write a detailed monthly horoscope for ${sign} in structured HTML format and tailwinds css.
    //     - include how zodiac aligns with your astrological sign
    //     - Use a light theme
    //     - Inlcude date of zodiac sign
    //     - Use <h2> for sections (Overview, Love, Career, etc.)
    //     - Use <p> for body text
    //     - Use <ul><li> for lucky days and colors
    //     - End with a motivational quote in <blockquote>` }],
    //   max_tokens: 800,
    // });
    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo", // 🔄 Switch from "gpt-4" to "gpt-3.5-turbo"
    //   messages: [{ role: "user", content: `Write a detailed monthly horoscope for ${sign}.
    //     - Inlcude date of zodiac sign
    //     - include how zodiac aligns with your astrological sign
    //     - Include spaces between sections
    //     - Do not change background color
    //     - For <h2> style use text-2xl p-2 font-semibold text-indigo-700 dark:text-indigo-300
    //     - Use <h2> for sections (Overview, Love, Career, etc.)
    //     - Use <p> for body text
    //     - Use <ul><li> for lucky days and colors
    //     - End with a motivational quote in <blockquote> 
    //     - For <blockquote> style use text-lg italic text-gray-600 dark:text-gray-400 p-2`
    //   }],
    //   max_tokens: 800,
    // });
    // console.log("OpenAI Response:", response);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // 🔄 Switch from "gpt-4" to "gpt-3.5-turbo"
      messages: [{ role: "user", content: `Write a detailed monthly horoscope for ${sign}.
        - Immediately follow with an <h2> showing the date range for ${sign}
        - Theme and tone should be all about all candy sugary sweet confections outlook
	      - Tone should be whimsical, comical, entertaining, funny, joking
        - Include spaces between sections
        - Include spaces brfore recommend sugary sweet items
	      - Instead of lucky numbers recommend sugary sweet items
        - Do not change background color
        - For <h2> style use text-2xl p-2 font-Seibold text-indigo-700 dark:text-indigo-300
        - Use <h2> for sections (Overview, Love, Career, etc.)
        - Use <p> for body text
        - Use <ul><li> for lucky days and colors
        - End with a riskay sightly offensive quote in <blockquote> 
        - For <blockquote> style use text-lg italic text-gray-600 dark:text-gray-400 p-2`
      }],
      max_tokens: 800,
    });
    console.log("OpenAI Response:", response);

    res.status(200).json({ horoscope: response.choices[0].message.content.trim() });
  } catch (error: any) {
    console.error("OpenAI API Error:", error);

    res.status(500).json({
      error: "Failed to fetch horoscope",
      details: error.message || "Unknown error",
    });
  }
}
