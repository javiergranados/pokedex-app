import { useState, useEffect } from 'react';

const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setdebouncedValue] = useState<string>(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setdebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return { debouncedValue };
};

export { useDebouncedValue };
