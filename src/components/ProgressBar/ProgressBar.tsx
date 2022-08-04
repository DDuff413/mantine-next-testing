import { Slider } from '@mantine/core';

export interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => (
  <Slider min={0} max={100} value={props.progress} styles={{ thumb: { height: 0 } }} />
);
