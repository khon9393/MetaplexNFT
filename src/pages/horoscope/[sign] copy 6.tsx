"use client";

import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import parse from "html-react-parser";

export default function HoroscopePage() {
  const router = useRouter();
  const { sign } = router.query;
  const [horoscope, setHoroscope] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // ✅ Controls the modal visibility

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        {/* ✅ Horoscope Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
          {sign} Monthly Horoscope
        </h1>

        {/* ✅ Button to open dialog */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          View Horoscope
        </button>
      </div>

      {/* ✅ AI Horoscope Dialog Box */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-xl shadow-lg">
              <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white">
                {sign} Horoscope
              </Dialog.Title>

              {/* ✅ Display Horoscope */}
              <div className="mt-4 text-gray-700 dark:text-gray-300">
                {isLoading ? <p>Loading...</p> : parse(horoscope)}
              </div>

              {/* ✅ Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
