"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  deadline: Date;
  title: string;
  category: string;
}

interface CountdownTimeLeft {
  Days?: number;
  Hrs?: number;
  Mins?: number;
  Secs?: number;
}

const INITIAL_TIME_LEFT: CountdownTimeLeft = {
  Days: 0,
  Hrs: 0,
  Mins: 0,
  Secs: 0,
};

export default function CountdownTimer({
  deadline,
  title,
  category,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME_LEFT);

  useEffect(() => {
    function calculateTimeLeft(): CountdownTimeLeft {
      let timeleft: CountdownTimeLeft = {};
      const currentDate = new Date();
      const diffence = deadline.getTime() - currentDate.getTime();

      if (diffence > 0) {
        timeleft = {
          Days: Math.floor(diffence / (1000 * 60 * 60 * 24)),
          Hrs: Math.floor((diffence / (1000 * 60 * 60)) % 24),
          Mins: Math.floor((diffence / (1000 * 60)) % 60),
          Secs: Math.floor((diffence / 1000) % 60),
        };
      }

      return timeleft;
    }

    // Initializing the timer
    setTimeLeft(calculateTimeLeft());

    // Updatinging every Secsond
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up function to clear data?
    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <section>
      <div className=" text-xl flex flex-col gap-4 w-fit px-2 py-2">
        <h3 className="!text-xl text-(--text-invert)/90 ">
          <span className="text-(--yellow) text-xs block">{category}</span>
          {title}
        </h3>

        <div className="flex gap-2">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className=" border-1 border-(--yellow)/20 rounded-md text-center max-w-[52px] py-1 w-[46px] px-2"
            >
              <p className="font-bold text-(--yellow)">{value}</p>
              <p className="text-sm text-(--text-invert)/80 font-semibold">
                {unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
