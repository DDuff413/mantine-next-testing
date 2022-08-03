import { Button } from '@mantine/core';

export interface LinkButtonProps {
  href: string;
  text: string;
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => (
  <Button component="a" href={props.href} variant="outline">
    {props.text}
  </Button>
);
