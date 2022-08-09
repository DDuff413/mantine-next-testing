import { Card, Group, Text } from '@mantine/core';
import { CheckCircledIcon } from '@modulz/radix-icons';

import useStyles from 'components/SelectionOption/SelectionOption.styles';

export interface SelectionOptionProps {
  title: string;
  descrption: string;
  isActive: boolean;
  onClick: (option: string) => void;
}

export const SelectionOption: React.FC<SelectionOptionProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Card
      className={classes.card}
      shadow="sm"
      p="lg"
      radius="md"
      sx={(theme) => ({
        border: '3px solid',
        borderColor: props.isActive
          ? theme.colors[theme.primaryColor][6]
          : theme.colors[theme.primaryColor][0],
      })}
      onClick={() => {
        props.onClick(props.title);
      }}
    >
      <Group className={classes.heading}>
        {props.isActive && <CheckCircledIcon />}
        <Text>{props.title}</Text>
      </Group>
      <Text>{props.descrption}</Text>
    </Card>
  );
};
