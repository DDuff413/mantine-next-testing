import { Card, Slider, Text } from '@mantine/core';
import { SunIcon } from '@modulz/radix-icons';

import useStyles from 'components/TopicCard/TopicCard.styles';

export interface TopicCardProps {
  topic: string;
  icon: string;
  progress: number;
}

export const TopicCard: React.FC<TopicCardProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.card} shadow="sm">
      <SunIcon />
      <Text>{props.topic}</Text>
      <Card.Section className={classes.progress}>
        <Slider min={0} max={0} value={props.progress} />
      </Card.Section>
    </Card>
  );
};
