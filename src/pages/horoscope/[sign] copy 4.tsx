"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
//import "@/styles/globals.css"; // ✅ Import Global CSS here
export default function HoroscopePage() {
  const router = useRouter();
  const { sign } = router.query;
  const [horoscope, setHoroscope] = useState("");
  const [isLoading, setIsLoading] = useState(true); // ✅ Track loading state

  useEffect(() => {
    if (!sign) return;

    setIsLoading(true); // ✅ Start loading when fetching

    fetch(`/api/horoscope?sign=${sign}`)
      .then((res) => res.json())
      .then((data) => setHoroscope(data.horoscope || "No horoscope available."))
      .catch(() => setHoroscope("Failed to load horoscope."))
      .finally(() => setIsLoading(false)); // ✅ Stop loading after fetching
  }, [sign]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center capitalize text-indigo-600">{sign} Monthly Horoscope</h1>

        {/* ✅ Show spinner while loading */}
        {isLoading ? (
          <div className="flex justify-center items-center mt-6">
            <svg className="animate-spin h-10 w-10 text-indigo-600 dark:text-indigo-300" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          </div>
        ) : (
          // ✅ Render horoscope once loaded
          <div className="mt-4 space-y-4 text-gray-800" dangerouslySetInnerHTML={{ __html: horoscope }} />
  
        )}















      
    </div>
  );
}
