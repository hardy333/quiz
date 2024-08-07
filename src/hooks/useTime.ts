import { useState, useEffect } from "react";

interface Time {
  seconds: number;
  minutes: number;
  hours: number;
}

function useTime(): Time {
  const [time, setTime] = useState<Time>({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  useEffect(() => {
    const tick = () => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
        const newHours = prevTime.hours + Math.floor(newMinutes / 60);

        return {
          seconds: newSeconds % 60,
          minutes: newMinutes % 60,
          hours: newHours,
        };
      });
    };

    const intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
}

export default useTime;
