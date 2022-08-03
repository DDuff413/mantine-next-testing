import { Card, Text, Group } from '@mantine/core';

import useStyles from 'components/Cards/Cards.styles';

export const Cards = () => {
  const { classes } = useStyles();

  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md">
      <Text>Level</Text>
      <Text>Sample text</Text>
      <Group>Drop down</Group>
    </Card>
  );
};
