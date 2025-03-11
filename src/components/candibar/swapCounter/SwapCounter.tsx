import { FC, useEffect, useState } from 'react';
import Countdown from './Countdown';
import { motion } from 'framer-motion';
import { Card } from "src/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from '../../ui/button';
import { ChevronsUpDown } from 'lucide-react';

export default function SwapCounter() {
  const [serverDate, setServerDate] = useState<Date | null>(null);
  const [isOpenStates, setIsOpenStates] = useState([true, true]);

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
      <div className="max-w-[500px] mx-auto flex flex-col space-y-4">

        <motion.div
          whileHover={{ scale: 1.05 }}
        >
          <Card >
            <span className="text-1xl font-semibold ">
              <Collapsible
                open={true}
                className="space-y-2"
              >

                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-lg font-semibold">
                    Current Swap
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>

                <div className="rounded-md border font-mono text-sm md:text-md sm:text-base lg:text-1xl xl:text-1xl shadow-sm flex items-start justify-start break-all">
                  {Object.entries(zodiacSigns).map(([sign, { icon, dateRange }]) => {

                  const [startMonth, startDay] = dateRange.split(" - ")[0].split(" ");
                  const [endMonth, endDay] = dateRange.split(" - ")[1].split(" ");
                  const startDate = new Date(`${startMonth} ${startDay}, ${serverDate.getFullYear()}`);
                  const endDate = new Date(`${endMonth} ${endDay}, ${serverDate.getFullYear()}`);

                  const isActive = serverDate >= startDate && serverDate <= endDate;

                  if (isActive) {
                    return (
                    <div key={sign} className="p-4 border-gray-600 rounded-lg">
                      <p className="text-sm sm:text-sm">{icon} {sign} NFT Collection {dateRange}</p>
                      <p className='font-bold'><Countdown endDate={endDate} /></p>
                    </div>
                    );
                  }
                  return null;
                  })}
                </div>

                <CollapsibleContent className="space-y-2">
                </CollapsibleContent>
              </Collapsible>
            </span>
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
        >
          <Card >
            <span className="text-1xl font-semibold">
              <Collapsible
                // open={true}
                className="space-y-2"
              >
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-lg font-semibold">
                    Upcoming Swaps
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>

                <div className="rounded-md border font-mono text-sm md:text-md shadow-sm flex items-start justify-start overflow-x-auto break-all">

                    <div className="">

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
                        <div key={sign} className="flex justify-start items-start pl-1">

                          {index === 0 ? (
                            <>
                             <p className="space-y-2 mt-2">{icon} {sign} NFT Collection {dateRange}</p>
                             </>
                          ) : (
     
                            <CollapsibleContent className="space-y-2 mt-2">
                              <p>{icon} {sign} NFT Collection {dateRange}</p>
                            </CollapsibleContent>
                     
                          )}
                        </div>
                      ))}
                  </div>
                </div>

              </Collapsible>
            </span>
          </Card>
        </motion.div>
      </div>
  );
};