import { useEffect, useRef } from "react";

export const usePrevLocation = (location) => {
  const prevLocRef = useRef(location);

  useEffect(() => {
    prevLocRef.current = location;
  }, [location]);

  return prevLocRef.current;
};
