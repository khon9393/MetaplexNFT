"use client";

import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import parse from "html-react-parser";
import { Spinner } from '../ui/spinner';

interface HoroscopeProps {
  sign: string;
  month?: string;
  year?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function HoroscopeModal({ sign, month, year, isOpen, onClose }: HoroscopeProps) {
  const [horoscope, setHoroscope] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!sign) return;

    setIsLoading(true);
    
    fetch(`/api/horoscope?sign=${sign}&month=${month || "current"}&year=${year || "2025"}`)
      .then((res) => res.json())
      .then((data) => {
        setHoroscope(data.horoscope || "No horoscope available.");
      })
      .catch(() => setHoroscope("Failed to load horoscope."))
      .finally(() => setIsLoading(false));
  }, [sign, month, year]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-xl shadow-lg w-full max-h-[80vh] overflow-hidden">
            <Dialog.Title className="text-3xl font-bold text-gray-900 dark:text-white">
              {sign} Horoscope {month && ` - ${month}`} {year && `(${year})`}
            </Dialog.Title>

            {/* ✅ Scrollable content area */}
            <div className="mt-4 text-gray-700 dark:text-gray-300 overflow-y-auto max-h-[60vh] p-2">
              {isLoading ? (
                <>
                  <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
                  <p>Loading...</p>
                </>
              ) : parse(horoscope)}
            </div>

            {/* ✅ Close Button */}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
