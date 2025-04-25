import { useEffect, useState } from 'react';

import { formatDuration } from '../functions/duration';

interface TimerProps {
  secondsDuration: number;
  isRunning: boolean;
  isPaused?: boolean; // Optional prop to indicate if the timer is paused
  complete?: () => void; // Optional callback function to be called when the timer is complete
  // you will need to add other props here
}

function Timer({ secondsDuration, isRunning, isPaused, complete }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(secondsDuration);
  useEffect(() => {
    if (isRunning && !isPaused) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            if (complete) complete(); // Call the complete callback if provided
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); // Update every second

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isRunning, isPaused]); // Only run when start changes
  return <h1>{formatDuration(timeLeft)}</h1>;
}

export default Timer;
