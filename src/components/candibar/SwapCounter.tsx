import { FC, useEffect, useState } from 'react';
import Countdown from './Countdown';

export default function SwapCounter() {
  const [serverDate, setServerDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchServerTime = async () => {
      try {
        const response = await fetch('/api/server-time');
        const data = await response.json();
        setServerDate(new Date(data.serverTime));
      } catch (error) {
        console.error('Error fetching server time:', error);
      }
    };

    fetchServerTime();
  }, []);

  if (!serverDate) {
    return <div>Loading...</div>;
  }

  const zodiacSigns = {
    Capricorn: { icon: "♑", dateRange: "Dec 21 - Jan 20" },
    Aquarius: { icon: "♒", dateRange: "Jan 21 - Feb 19" },
    Pisces: { icon: "♓", dateRange: "Feb 20 - Mar 20" },
    Aries: { icon: "♈", dateRange: "Mar 21 - Apr 19" },
    Taurus: { icon: "♉", dateRange: "Apr 20 - May 20" },
    Gemini: { icon: "♊", dateRange: "May 21 - Jun 20" },
    Cancer: { icon: "♋", dateRange: "Jun 21 - Jul 22" },
    Leo: { icon: "♌", dateRange: "Jul 23 - Aug 22" },
    Virgo: { icon: "♍", dateRange: "Aug 23 - Sep 22" },
    Libra: { icon: "♎", dateRange: "Sep 23 - Oct 22" },
    Scorpio: { icon: "♏", dateRange: "Oct 23 - Nov 21" },
    Sagittarius: { icon: "♐", dateRange: "Nov 22 - Dec 21" },
  };

  return (

    <div className="flex flex-col md:flex-row w-full h-full mb-6">

      <div className="flex-1 p-4">
        <h2 className="text-white mb-2 text-lg md:text-xl">Current Swap</h2>

        {Object.entries(zodiacSigns).map(([sign, { icon, dateRange }]) => {

          const [startMonth, startDay] = dateRange.split(" - ")[0].split(" ");
          const [endMonth, endDay] = dateRange.split(" - ")[1].split(" ");
          const startDate = new Date(`${startMonth} ${startDay}, ${serverDate.getFullYear()}`);
          const endDate = new Date(`${endMonth} ${endDay}, ${serverDate.getFullYear()}`);

          const isActive = serverDate >= startDate && serverDate <= endDate;

          if (isActive) {
            return (
              <div key={sign} className="p-4 bg-gray-800 border-2 border-gray-600 rounded-lg">
                <p className="text-white text-sm md:text-base">{icon} {sign} NFT Collection {dateRange}</p>
                <p className="text-gray-100 pl-10 text-sm md:text-base"><Countdown endDate={endDate} /></p>
              </div>
            );
          }
          return null;
        }
        )}

      </div>
      
      <div className="flex-1 p-4 bg-gray-800 border-l-2 border-gray-600 rounded-lg">
        <h2 className="text-white mb-2 text-lg md:text-xl">Upcoming Swaps</h2>
        {Object.entries(zodiacSigns)
          .map(([sign, { icon, dateRange }]) => {
            const [startMonth, startDay] = dateRange.split(" - ")[0].split(" ");
            const [endMonth, endDay] = dateRange.split(" - ")[1].split(" ");
            const startDate = new Date(`${startMonth} ${startDay}, ${serverDate.getFullYear()}`);
            const endDate = new Date(`${endMonth} ${endDay}, ${serverDate.getFullYear()}`);

            return { sign, icon, dateRange, startDate, endDate };
          })
          .filter(({ startDate }) => startDate > serverDate)
          .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
          .map(({ sign, icon, dateRange }, index) => (
            <div key={sign} className="p-0 items-start flex justify-start mb-2">
                <p className={`text-sm md:text-base ${index === 0 ? 'text-white' : 'text-gray-400'}`}>{icon} {sign} NFT Collection {dateRange}</p>
            </div>
          ))}
      </div>
    </div>
  );
};