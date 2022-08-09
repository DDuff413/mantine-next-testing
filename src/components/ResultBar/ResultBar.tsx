import { Slider } from '@mantine/core';

export interface ResultBarProps {
  result: number;
  mark: number;
}

export const ResultBar: React.FC<ResultBarProps> = (props) => {
  const levels = [
    { value: 0, label: 'Foundation' },
    { value: 33.33, label: 'Intermediate' },
    { value: 66.66, label: 'Advanced' },
    { value: 100, label: 'Highly Specalised' },
  ];

  return (
    <Slider
      min={0}
      max={100}
      value={props.result}
      label={(value) => `${value}%`}
      marks={levels}
      py="lg"
      sx={{
        ':hover': { cursor: 'default' },
        width: '90%',
      }}
      styles={(theme) => ({
        track: {
          backgroundColor: 'red',
          borderRadius: 0,
          height: 18,
          marginRight: 0,
          marginLeft: 0,
          '::before': { borderRadius: 0, right: 0, left: 0 },
        },
        bar: { borderRadius: 0, left: '0% !important', width: `${props.result}% !important` },
        thumb: { display: 'none', borderRadius: 0 },
        mark: {
          width: 0,
          height: 14,
          transform: 'translateY(9px)',
          borderRadius: 0,
          borderWidth: 1,
          borderColor: theme.colors.dark[9],
        },
        markFilled: {
          borderColor: theme.colors.dark[9],
        },
        markLabel: { textAlign: 'center', whiteSpace: 'normal' },
      })}
    />
  );
};
