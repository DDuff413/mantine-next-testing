import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: '23%',
  },
  level: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  example: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
}));
