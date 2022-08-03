import { Card, Text, Group, UnstyledButton } from '@mantine/core';
import { useState } from 'react';

import useStyles from 'components/QuestionCard/QuestionCard.styles';

export const QuestionCard = () => {
  const { classes } = useStyles();

  const [expandExample, setExpandExample] = useState(false);

  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md">
      <Text className={classes.level} size="sm">
        Level
      </Text>
      <Text className={classes.description} size="md">
        Sample text
      </Text>
      <Group className={classes.example}>
        <UnstyledButton
          onClick={() => {
            setExpandExample(!expandExample);
          }}
        >
          <Text className={classes.exampleToggle} size="md">
            Drop down button
          </Text>
        </UnstyledButton>
        <Text
          className={classes.exampleDescription}
          size="md"
          sx={{
            display: expandExample ? 'block' : 'none',
          }}
        >
          Drop down text
        </Text>
      </Group>
    </Card>
  );
};
