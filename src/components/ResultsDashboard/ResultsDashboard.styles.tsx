import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  container: { display: 'flex', flexDirection: 'column', gap: 10 },
  result: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    minWidth: '90%',
    height: 120,
  },
  heading: { alignSelf: 'flex-start' },
}));
