import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarLinkGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    gap: 40,
  },
  navbarAnchor: {
    whiteSpace: 'nowrap',
  },
}));
