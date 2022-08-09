import { createStyles } from '@mantine/core';

export default createStyles(() => {
  const cardWidth = 200;

  return {
    card: { display: 'flex', flexDirection: 'column', width: cardWidth, alignItems: 'center' },
    progress: { width: cardWidth },
  };
});
