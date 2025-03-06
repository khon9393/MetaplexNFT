
import { FC, useEffect, useState } from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import bgreading from '../../../../public/images/bgreading1.jpeg';

import { XMarkIcon } from "@heroicons/react/24/outline";
import parse from "html-react-parser";
import { Spinner } from '../../ui/spinner';

interface ZodiacReading {
  sign: string;
  reading: string;
  duration: string; // day, week, month
}

interface HoroscopeProps {
  sign: string;
  month?: string;
  year?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ZodiacReadingDrawerWindow: FC<HoroscopeProps> = ({ sign, isOpen, onClose }) => {
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
          .replace(/<h1>/g, '<h1 class="text-3xl p-2 font-semibold text-indigo-700">')
          .replace(/<h2>/g, '<h2 class="text-2xl p-2 font-semibold text-indigo-700">');

        setHoroscope(styledReading || null);
      })
      .catch((error) => console.error("Error fetching reading:", error))
      .finally(() => setIsLoading(false));
  }, [sign, readingType]);

  return (
    <div className="flex flex-row justify-center">
      <Drawer open={isOpen} onClose={onClose}>
        <DrawerTrigger>
        </DrawerTrigger>

        <DrawerContent className="h-[90vh] bg-gray-400"
          style={{ backgroundImage: `url(${bgreading.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
         // style={{ backgroundImage: `url(/api/image/CandibarImg/Candi/collection_01-d2uDCK56e8T5KJCGR2aTRayvFYVYZL.jpeg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
        >

          <DrawerHeader className="flex flex-col justify-center items-center text-center"
          >
            <DrawerClose>
            </DrawerClose>

          </DrawerHeader>

          <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center p-4">
            <div className="bg-red-800 bg-opacity-85 dark:bg-gray-800 p-6 rounded-lg max-w-xl shadow-lg w-full max-h-[80vh] overflow-hidden">

              <div className="flex items-end justify-end">
                <XMarkIcon
                  className='w-6 h-6 m-0 bg-gray-600 text-grey-900 hover:text-blue-600 cursor-pointer rounded-lg'
                  onClick={onClose}
                />
              </div>
              <div className="mt-0 text-gray-1000 dark:text-white flex flex-wrap justify-center items-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  {sign.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')} Horoscope Outlook
                </h1>
              </div>

              {/* Scrollable content area */}
              <div className="mt-4 bg-white bg-opacity-100 rounded-lg text-lg text-black overflow-y-auto max-h-[50vh] px-5 py-1"
              >
                {isLoading ? (
                  <>
                    <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
                    <p>Loading...</p>
                  </>
                ) : parse(horoscope)}
              </div>

              {/* Buttons for selecting reading type */}
              <div className="flex justify-around mt-4">
              {/* Buttons for selecting reading type */}
              <button
                onClick={() => setReadingType("day")}
                className={`px-4 py-2 rounded-full ${readingType === "day" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"} hover:bg-blue-600 hover:text-white`}
              >
                Day
              </button>
              <button
                onClick={() => setReadingType("week")}
                className={`px-4 py-2 rounded-full ${readingType === "week" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"} hover:bg-blue-600 hover:text-white`}
              >
                Week
              </button>
              <button
                onClick={() => setReadingType("month")}
                className={`px-4 py-2 rounded-full ${readingType === "month" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"} hover:bg-blue-600 hover:text-white`}
              >
                Month
              </button>
              </div>
            </div>
          </div>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
