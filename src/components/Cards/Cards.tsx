import { Group } from '@mantine/core';

import { QuestionCard } from 'components/QuestionCard/QuestionCard';

export const Cards = () => (
  <Group position="center" pt={10}>
    <QuestionCard />
    <QuestionCard />
    <QuestionCard />
    <QuestionCard />
  </Group>
);
