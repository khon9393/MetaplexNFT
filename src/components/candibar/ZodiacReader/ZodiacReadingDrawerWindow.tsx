import { FC, useEffect, useRef, useState } from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import bgreading from '../../../../public/images/bgreading1.jpeg';

import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import parse from "html-react-parser";
import { Spinner } from '../../ui/spinner';

interface ZodiacReading {
  sign: string;
  reading: string;
  created_at: string;
  duration: string; // day, week, month
}

interface HoroscopeProps {
  sign: string;
  month?: string;
  year?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const zodiacSigns = {
  capricorn: { icon: "♑", dateRange: "Dec 21 - Jan 20" },
  aquarius: { icon: "♒", dateRange: "Jan 21 - Feb 19" },
  pisces: { icon: "♓", dateRange: "Feb 20 - Mar 20" },
  aries: { icon: "♈", dateRange: "Mar 21 - Apr 19" },
  taurus: { icon: "♉", dateRange: "Apr 20 - May 20" },
  gemini: { icon: "♊", dateRange: "May 21 - Jun 20" },
  cancer: { icon: "♋", dateRange: "Jun 21 - Jul 22" },
  leo: { icon: "♌", dateRange: "Jul 23 - Aug 22" },
  virgo: { icon: "♍", dateRange: "Aug 23 - Sep 22" },
  libra: { icon: "♎", dateRange: "Sep 23 - Oct 22" },
  scorpio: { icon: "♏", dateRange: "Oct 23 - Nov 21" },
  sagittarius: { icon: "♐", dateRange: "Nov 22 - Dec 21" },
  "wood snake": { icon: "🐍", dateRange: "2025" },
};

export const ZodiacReadingDrawerWindow: FC<HoroscopeProps> = ({ sign }) => {
  const [horoscope, setHoroscope] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [readingType, setReadingType] = useState("week");
  const formattedSign = sign.toLowerCase();
  const zodiacSign = zodiacSigns[formattedSign];
  const [lastupdate, setlastupdate] = useState("");

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
          .replace(/<h1>/g, '<h1 class="text-2xl p-2 font-semibold text-indigo-700">')
          .replace(/<h2>/g, '<h2 class="text-2xl p-2 font-semibold text-indigo-700">');

        setHoroscope(styledReading || null);
        setlastupdate(new Date(zodiac.created_at).toLocaleDateString());
      })
      .catch((error) => console.error("Error fetching reading:", error))
      .finally(() => setIsLoading(false));
  }, [sign, readingType]);

  return (
    <div className="flex flex-row justify-center">
      <Drawer>

        <DrawerTrigger>
          <button
            className="px-2 p-0 rounded-md border hover:underline animate-pulse bg-gradient-to-br from-lime-400 to-yellow-500 hover:from-white hover:to-purple-300 text-black hover:text-blue-500"
          >
            <span>{`View ${sign} Zodiac Reading`}</span>
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-[90vh] bg-gray-400"
          style={{ backgroundImage: `url(${bgreading.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
        // style={{ backgroundImage: `url(/api/image/CandibarImg/Candi/collection_01-d2uDCK56e8T5KJCGR2aTRayvFYVYZL.jpeg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: 1 }}
        >
          <DrawerHeader className="flex flex-col justify-center items-center text-center"
          >
            {horoscope && (
              <p className="text-xs absolute top-2 left-2">
                Reading updated: {lastupdate}
              </p>
            )}
            <DrawerClose asChild>

              <div className='absolute top-3 right-2'>
                <XMarkIcon
                  className='w-6 h-6 m-0 bg-white text-black hover:text-blue-600 cursor-pointer rounded-lg'
                />

              </div>
            </DrawerClose>

          </DrawerHeader>

          <div className="flex inset-0 bg-black bg-opacity-5 flex items-center justify-center">
            <div className="bg-red-800 bg-opacity-85 dark:bg-gray-800 p-4 rounded-lg max-w-xl shadow-lg w-full max-h-[80vh] overflow-hidden">
              <div className="px-3 mt-0 text-gray-1000 dark:text-white flex flex-wrap justify-center items-center min-w-[400px] space-x-0">
                <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">

                  {zodiacSign ? `${zodiacSign.icon} ${sign.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')} Horoscope ${zodiacSign.icon}` : sign.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}


                  {/* : {zodiac.dateRange} */}
                </span>
              </div>

              {/* Scrollable content area */}
              <div className="mt-4 bg-white bg-opacity-100 rounded-lg text-lg text-black overflow-y-auto max-h-[60vh] px-5 py-1"
              >
                {isLoading ? (
                  <>
                    <Spinner size="lg" className="bg-red-500 dark:bg-red-500" />
                    <p>Loading...</p>
                  </>
                ) : parse(horoscope)}
              </div>

              <div className="flex justify-around mt-4">
                {/* <button
                  onClick={() => setReadingType("day")}
                  className={`px-5 py-0 rounded-lg ${readingType === "day" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"} hover:bg-blue-600 hover:text-white`}
                >
                  Day
                </button> */}
                <button
                  onClick={() => setReadingType("week")}
                  className={`px-3 py-0 rounded-lg ${readingType === "week" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"} hover:bg-blue-600 hover:text-white`}
                >
                  Week
                </button>
                {/* <button
                  onClick={() => setReadingType("month")}
                  className={`px-3 py-0 rounded-lg ${readingType === "month" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"} hover:bg-blue-600 hover:text-white`}
                >
                  Month
                </button> */}
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