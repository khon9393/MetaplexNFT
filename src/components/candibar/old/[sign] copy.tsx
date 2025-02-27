"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
//import "@/styles/globals.css"; // ✅ Import Global CSS here
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
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center capitalize text-indigo-600">{sign} Monthly Horoscope</h1>
      <div className="mt-4 space-y-4 text-gray-800" dangerouslySetInnerHTML={{ __html: horoscope }} />
    </div>
  );
}
