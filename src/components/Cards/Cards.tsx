import { Group } from '@mantine/core';

import { QuestionCard } from 'components/QuestionCard/QuestionCard';
import useStyles from 'components/Cards/Cards.styles';

export const Cards = () => {
  const { classes } = useStyles();

  return (
    <Group className={classes.group} position="center" pt={10}>
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
    </Group>
  );
};
