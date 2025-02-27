"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import HoroscopeModal from "@/components/candibar/HoroscopeModal";

export default function HoroscopePage() {
  const router = useRouter();
  const { sign } = router.query;
  const [isOpen, setIsOpen] = useState(false); // Modal state

  if (!sign) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
          {sign} Monthly Horoscope
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          View Horoscope
        </button>
      </div>

      {/* ✅ Use the reusable HoroscopeModal */}
      <HoroscopeModal sign={sign as string} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
