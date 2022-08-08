import { Group, Paper, Text } from '@mantine/core';
import { ResultBar } from 'components/ResultBar/ResultBar';

import useStyles from 'components/ResultsDashboard/ResultsDashboard.styles';

export const ResultsDashboard = () => {
  const { classes } = useStyles();

  return (
    <Group className={classes.container} align="center" py={40}>
      <Paper className={classes.result} shadow="xs" p="md">
        <Text className={classes.heading}>The first bar</Text>
        <ResultBar result={20} mark={0} />
      </Paper>
      <Paper className={classes.result} shadow="xs" p="md">
        <Text className={classes.heading}>The second bar</Text>
        <ResultBar result={50} mark={0} />
      </Paper>
      <Paper className={classes.result} shadow="xs" p="md">
        <Text className={classes.heading}>The third bar</Text>
        <ResultBar result={99} mark={0} />
      </Paper>
      <Paper className={classes.result} shadow="xs" p="md">
        <Text className={classes.heading}>The fourth bar</Text>
        <ResultBar result={10} mark={0} />
      </Paper>
    </Group>
  );
};
