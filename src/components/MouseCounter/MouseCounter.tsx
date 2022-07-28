import { Text } from '@mantine/core';
import { useState } from 'react';
import { usePageLeave } from '@mantine/hooks';

export const MouseCounter = () => {
  const [leftsCount, setLeftsCount] = useState(0);

  usePageLeave(() => setLeftsCount((p) => p + 1));

  return (
    <Text align="center" py="md">
      Mouse left the page {leftsCount} times
    </Text>
  );
};
