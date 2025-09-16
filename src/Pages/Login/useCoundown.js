// useCountdown.js
import { useState, useEffect } from 'react';

const useCountdown = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active) return;

    if (seconds === 0) {
      setActive(false);
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, active]);

  const reset = () => {
    setSeconds(initialSeconds);
    setActive(true);
  };

  return { seconds, reset, active };
};

export default useCountdown;
