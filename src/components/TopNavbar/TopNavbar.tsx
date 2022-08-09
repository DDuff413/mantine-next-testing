import { Anchor, Group, Navbar } from '@mantine/core';

import useStyles from 'components/TopNavbar/TopNavbar.styles';

export const TopNavbar = () => {
  const { classes } = useStyles();

  return (
    <Navbar className={classes.navbar} height={100} px={80}>
      <Navbar.Section>
        <Anchor href="/">...CAT</Anchor>
      </Navbar.Section>
      <Navbar.Section>
        <Group className={classes.navbarLinkGroup}>
          <Anchor href="/cards">Cards</Anchor>
          <Anchor href="/progress">Progress</Anchor>
          <Anchor href="/pagination">Pagination</Anchor>
          <Anchor href="/results">Results</Anchor>
          <Anchor href="/multiselect">MultiSelect</Anchor>
          <Anchor href="/topic" className={classes.navbarAnchor}>
            Topic Card
          </Anchor>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};
