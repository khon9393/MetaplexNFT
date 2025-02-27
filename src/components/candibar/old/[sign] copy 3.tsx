"use client";
// http://localhost:3000/api/horoscope?sign=Aries
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import parse, { domToReact } from "html-react-parser";

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

  // ✅ Map HTML elements to Tailwind-styled components
  const options = {
    replace: (node: any) => {
      if (node.type === "tag") {
        switch (node.name) {
          case "h1":
            return <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">{domToReact(node.children, options)}</h1>;
          case "h2":
            return <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 text-center">{domToReact(node.children, options)}</h2>;
          case "h3":
            return <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mt-4">{domToReact(node.children, options)}</h3>;
          case "p":
            return <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">{domToReact(node.children, options)}</p>;
          case "ul":
            return <ul className="list-disc list-inside mt-2">{domToReact(node.children, options)}</ul>;
          case "li":
            return <li className="text-gray-700 dark:text-gray-300">{domToReact(node.children, options)}</li>;
          case "blockquote":
            return <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 dark:text-gray-400">{domToReact(node.children, options)}</blockquote>;
          default:
            return undefined; // Leave other elements unchanged
        }
      }
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="max-w-2xl p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        {horoscope ? parse(horoscope, options) : <p>Loading...</p>}
      </div>
    </div>
  );
}
