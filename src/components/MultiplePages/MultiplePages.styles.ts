import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  barContainer: { width: '80%' },
  barPaper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
