import { Group } from '@mantine/core';

import useStyles from 'components/Cards/Cards.styles';
import { QuestionCard } from 'components/QuestionCard/QuestionCard';

export const Cards = () => {
  const { classes } = useStyles();

  return (
    <Group position="center" pt={10}>
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
    </Group>
  );
};
