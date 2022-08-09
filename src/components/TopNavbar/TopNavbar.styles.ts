import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
      gap: 20,
    },
  },
  navbarLinkGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    gap: 40,
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      flexDirection: 'column',
      gap: 20,
    },
  },
  navbarHeadingGroup: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      justifyContent: 'space-between',
      width: '90vw',
      paddingTop: 35,
    },
  },
  navbarAnchor: {
    whiteSpace: 'nowrap',
    ':hover': { textDecoration: 'none' },
  },
  navbarHomeAnchor: {
    whiteSpace: 'nowrap',
    ':hover': { textDecoration: 'none' },
    fontSize: 24,
  },
}));
