"use client";

import { useState, useEffect, Fragment } from "react";
import { Dialog, DialogTitle, Transition } from "@headlessui/react";
import parse from "html-react-parser";
import { Spinner } from '../../ui/spinner';

interface ZodiacReading {
  sign: string;
  reading: string;
  duration: string; // Add type to the interface to distinguish between daily, weekly, and monthly readings
}
interface HoroscopeProps {
  sign: string;
  month?: string;
  year?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function HoroscopeModal({ sign, isOpen, onClose }: HoroscopeProps) {
  const [horoscope, setHoroscope] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [readingType, setReadingType] = useState("day");

  useEffect(() => {
    if (!sign) return;

    setIsLoading(true);

    fetch(`/api/horoscopereadings`)
      .then((res) => res.json())
      .then((data: ZodiacReading[]) => {
        const zodiac = data.find((z) => 
          (z.sign.toLowerCase() === sign.toLowerCase() &&
          z.duration.toLowerCase() === readingType.toLowerCase())
        );

        if (!zodiac) {
          setHoroscope("No horoscope available.");
          return;
        }
        const styledReading = zodiac.reading
          .replace(/<h1>/g, '<h1 class="text-3xl p-2 font-semibold text-indigo-700 dark:text-indigo-300">')
          .replace(/<h2>/g, '<h2 class="text-2xl p-2 font-semibold text-indigo-700 dark:text-indigo-300">');

        setHoroscope(styledReading || null);
      })
      .catch((error) => console.error("Error fetching reading:", error))
      .finally(() => setIsLoading(false));
  }, [sign, readingType]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-xl shadow-lg w-full max-h-[95vh] overflow-hidden">
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              {sign} Horoscope
               {/* {month && ` - ${month}`} {year && `(${year})`} */}
            </DialogTitle>

            {/* Buttons for selecting reading type */}
            <div className="flex justify-around mt-4">
              <button
                onClick={() => setReadingType("day")}
                className={`px-4 py-2 rounded-full ${readingType === "day" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"}`}
              >
                Daily
              </button>
              <button
                onClick={() => setReadingType("week")}
                className={`px-4 py-2 rounded-full ${readingType === "week" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"}`}
              >
                Weekly
              </button>
              <button
                onClick={() => setReadingType("month")}
                className={`px-4 py-2 rounded-full ${readingType === "month" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"}`}
              >
                Monthly
              </button>
            </div>

            {/* Scrollable content area */}
            <div className="mt-4 text-gray-700 dark:text-gray-300 overflow-y-auto max-h-[60vh] p-2">
              {isLoading ? (
                <>
                  <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
                  <p>Loading...</p>
                </>
              ) : parse(horoscope)}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}