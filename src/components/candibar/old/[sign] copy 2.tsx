"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function HoroscopePage() {
  const router = useRouter();
  const { sign } = router.query;
  const [horoscope, setHoroscope] = useState("");

  useEffect(() => {
    if (!sign) return;

    fetch(`/api/horoscope?sign=${sign}`)
      .then((res) => res.json())
      .then((data) => setHoroscope(data.horoscope || "No horoscope available."))
      .catch(() => setHoroscope("Failed to load horoscope."));
  }, [sign]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* ✅ Only add an <h1> if OpenAI doesn’t return one */}
      {!horoscope.includes("<h1>") && (
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white capitalize text-center">
          {sign} Monthly Horoscope
        </h1>
      )}

      {/* Horoscope content from API */}
      <div
  className="mt-4 space-y-4 text-gray-900 dark:text-white prose prose-lg prose-gray 
             prose-h1:text-gray-900 dark:prose-h1:text-white"
  dangerouslySetInnerHTML={{ __html: horoscope }}
/>
    </div>
  );
}
