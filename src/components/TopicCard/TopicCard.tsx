import { Card, Slider, Text } from '@mantine/core';
import { SunIcon, MoonIcon, RocketIcon } from '@modulz/radix-icons';

import useStyles from 'components/TopicCard/TopicCard.styles';

export interface TopicCardProps {
  topic: string;
  icon: string;
  progress: number;
}

export const TopicCard: React.FC<TopicCardProps> = (props) => {
  const { classes } = useStyles();

  let icon;

  switch (props.icon) {
    case 'sun':
      icon = <SunIcon />;
      break;
    case 'moon':
      icon = <MoonIcon />;
      break;
    case 'sky':
      icon = <RocketIcon />;
      break;
  }

  return (
    <Card className={classes.card} m="md" shadow="sm">
      {icon}
      <Text>{props.topic}</Text>
      <Card.Section className={classes.progress}>
        <Slider
          min={0}
          max={0}
          value={props.progress}
          sx={{
            ':hover': { cursor: 'default' },
          }}
          styles={() => ({
            track: {
              borderRadius: '0px 0px 4px 4px',
              height: 18,
              marginRight: 0,
              marginLeft: 0,
              '::before': {
                borderRadius: '0px 0px 4px 4px',
                right: 0,
                left: 0,
              },
            },
            bar: {
              borderRadius: '0px 0px 4px 4px',
              left: '0% !important',
              width: `${props.progress}% !important`,
            },
            thumb: { display: 'none', borderRadius: 0 },
          })}
        />
      </Card.Section>
    </Card>
  );
};
