"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Head from "next/head";


export default function HoroscopePage() {
  const router = useRouter();
  const { sign } = router.query;
  const [horoscope, setHoroscope] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!sign) return;

    setIsLoading(true);

    fetch(`/api/horoscope?sign=${sign}`)
      .then((res) => res.json())
      .then((data) => {
        setHoroscope(data.horoscope || "No horoscope available.");
      })
      .catch(() => setHoroscope("Failed to load horoscope."))
      .finally(() => setIsLoading(false));
  }, [sign]);

  // ✅ List of all zodiac signs for navigation
  const zodiacSigns = [
    "capricorn", , "aquarius", "pisces", "aries", "taurus", 
    "gemini", "cancer","leo", "virgo", "libra", "scorpio",
    "sagittarius", 
  ];

  return (
    <>
    <Head>
      <title>{typeof sign === "string" ? `${sign.charAt(0).toUpperCase() + sign.slice(1)} Monthly Horoscope - Candibarnft.com` : "Candibarnft.com - Free Zodiac Personal Reading"}</title>
      <meta name="description" content={`Discover the monthly horoscope for ${typeof sign === "string" ? sign.charAt(0).toUpperCase() + sign.slice(1) : "your zodiac sign"} on Candibarnft. Explore the astrology zodiac collection and get your exclusive NFT today.`} />
      <meta name="keywords" content={`Candibarnft, ${typeof sign === "string" ? sign + " horoscope" : "zodiac horoscope"}, astrology zodiac, NFT collection, exclusive NFT`} />
      <meta name="author" content="Candibarnft" />
      <meta property="og:title" content={`${typeof sign === "string" ? sign.charAt(0).toUpperCase() + sign.slice(1) + " Monthly Horoscope" : "Candibarnft - Free Zodiac Personal Reading"}`} />
      <meta property="og:description" content={`Discover the monthly horoscope for ${typeof sign === "string" ? sign.charAt(0).toUpperCase() + sign.slice(1) : "your zodiac sign"} on Candibarnft. Explore the astrology zodiac collection and get your exclusive NFT today.`} />
      <meta property="og:image" content="/path/to/snake-nft-image.jpg" />
      <meta property="og:url" content={`https://www.candibarnft.com/horoscope/${sign}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${typeof sign === "string" ? sign.charAt(0).toUpperCase() + sign.slice(1) + " Monthly Horoscope" : "Candibarnft - Free Zodiac Personal Reading"}`} />
      <meta name="twitter:description" content={`Discover the monthly horoscope for ${typeof sign === "string" ? sign.charAt(0).toUpperCase() + sign.slice(1) : "your zodiac sign"} on Candibarnft. Explore the astrology zodiac collection and get your exclusive NFT today.`} />
      <meta name="twitter:image" content="/path/to/snake-nft-image.jpg" />
    </Head>

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center capitalize">
          {sign} Monthly Horoscope
        </h1>

        {/* ✅ Spinner while loading */}
        {isLoading ? (
          <div className="flex justify-center items-center mt-6">
            <svg className="animate-spin h-10 w-10 text-indigo-600 dark:text-indigo-300" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          </div>
        ) : (
          <div className="mt-4 space-y-4 text-gray-900 dark:text-white prose prose-lg prose-gray">
            {parse(horoscope)}
          </div>
        )}
      </div>

      {/* ✅ Close Button to Return to Previous Page */}
      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        Close and Return
      </button>

      {/* ✅ Zodiac Sign Navigation */}
      <div className="mt-8 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">Read Other Signs</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {zodiacSigns.map((zodiac) => (
            <Link key={zodiac} href={`/horoscope/${zodiac}`} className="block text-center p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              {zodiac.charAt(0).toUpperCase() + zodiac.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
