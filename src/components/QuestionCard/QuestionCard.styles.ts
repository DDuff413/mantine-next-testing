import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: 328,
  },
  level: { color: '#B7C2C8' },
  description: {},
  example: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
  },
  exampleToggle: {},
  exampleDescription: {},
}));
