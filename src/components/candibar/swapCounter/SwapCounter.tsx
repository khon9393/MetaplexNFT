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
import { CandiZodiacSigns } from '../../../stores/useCandiZodiacSignsStore';

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

  return (
    <div className="max-w-[500px] mx-auto flex flex-col space-y-4">

      <motion.div
        whileHover={{ scale: 1.02 }}
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
                {Object.entries(CandiZodiacSigns).map(([sign, { icon, dateRange, name }]) => {

                  const [startMonth, startDay] = dateRange.split("-")[0].trim().split(" ");
                  const [endMonth, endDay] = dateRange.split("-")[1].trim().split(" ");
                  const startDate = new Date(`${startMonth} ${startDay}, ${serverDate.getFullYear()}`);
                  const endDate = new Date(`${endMonth} ${endDay}, ${serverDate.getFullYear()}`);
                  endDate.setHours(23, 59, 59, 999);

                  const isActive = serverDate >= startDate && serverDate <= endDate;

                  if (isActive) {
                  return (
                    <div key={sign} className="p-4 border-gray-600 rounded-lg">
                    <div className="text-sm sm:text-sm">{icon} {name} NFT Collection {dateRange}</div>
                    <div className='font-bold'><Countdown endDate={endDate} /></div>
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
        whileHover={{ scale: 1.02 }}
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

                    {Object.entries(CandiZodiacSigns)
                    .map(([sign, { icon, dateRange, name }]) => {
                      const [startMonth, startDay] = dateRange.split("-")[0].trim().split(" ");
                      const [endMonth, endDay] = dateRange.split("-")[1].trim().split(" ");
                      const startDate = new Date(`${startMonth} ${startDay}, ${serverDate.getFullYear()}`);
                      const endDate = new Date(`${endMonth} ${endDay}, ${serverDate.getFullYear()}`);

                      return { sign, icon, dateRange, name, startDate, endDate };
                    })
                    .filter(({ startDate }) => startDate > serverDate)
                    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
                    .map(({ name, icon, dateRange }, index) => (
                      <div key={name} className="flex justify-start items-start pl-1">

                      {index === 0 ? (
                        <>
                        <div className="space-y-2 mt-2">{icon} {name} NFT Collection {dateRange}</div>
                        </>
                      ) : (

                        <CollapsibleContent className="space-y-2 mt-2">
                        <div>{icon} {name} NFT Collection {dateRange}</div>
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