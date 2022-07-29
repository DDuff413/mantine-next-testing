import { Button } from '@mantine/core';
import { setCookie } from 'cookies-next';
import { useState } from 'react';

export const IncrementButton = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
    setCookie('number', number + 1, { maxAge: 60 * 60 * 24 * 30 });
  };

  return <Button onClick={() => increment()}>Increment {number}</Button>;
};
