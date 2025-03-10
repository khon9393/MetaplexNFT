import { FC, useEffect, useState } from 'react';

interface CountdownProps {
  endDate: Date;
}

const Countdown: FC<CountdownProps> = ({ endDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const timeRemaining = endDate.getTime() - now.getTime();
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  if (!timeRemaining) {
    return <div>Loading...</div>;
  }

  return (
    <p className="text-red-800 font-bold text-lg sm:text-sm">
      Time remaining: {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
    </p>
  );
};

export default Countdown;