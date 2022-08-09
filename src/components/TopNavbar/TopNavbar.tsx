import { Anchor, Burger, Group, Navbar } from '@mantine/core';
import { useState } from 'react';

import useStyles from 'components/TopNavbar/TopNavbar.styles';

export const TopNavbar = () => {
  const { classes } = useStyles();

  const [expand, setExpand] = useState(true);

  return (
    <Navbar
      className={classes.navbar}
      height={100}
      px={80}
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          height: expand ? 370 : 100,
          paddingBottom: expand ? 30 : 0,
        },
      })}
    >
      <Navbar.Section>
        <Group className={classes.navbarHeadingGroup}>
          <Anchor href="/" className={classes.navbarHomeAnchor}>
            ...CAT
          </Anchor>
          <Burger
            opened={expand}
            onClick={() => setExpand(!expand)}
            sx={(theme) => ({
              [`@media (min-width: ${theme.breakpoints.md}px)`]: {
                display: 'none',
              },
            })}
          />{' '}
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        <Group
          className={classes.navbarLinkGroup}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              display: expand ? 'flex' : 'none',
            },
          })}
        >
          <Anchor href="/cards" className={classes.navbarAnchor}>
            Cards
          </Anchor>
          <Anchor href="/progress" className={classes.navbarAnchor}>
            Progress
          </Anchor>
          <Anchor href="/pagination" className={classes.navbarAnchor}>
            Pagination
          </Anchor>
          <Anchor href="/results" className={classes.navbarAnchor}>
            Results
          </Anchor>
          <Anchor href="/multiselect" className={classes.navbarAnchor}>
            MultiSelect
          </Anchor>
          <Anchor href="/topic" className={classes.navbarAnchor}>
            Topic Card
          </Anchor>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};
