import { Button, Container, Group } from '@mantine/core';
import { setCookie } from 'cookies-next';

import useStyles from 'components/ThemeButtons/ThemeButtons.styles';

export const ThemeButtons = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <Group position="center" py={10}>
        <Button
          onClick={() => {
            setCookie('theme', 'light', { maxAge: 60 * 60 * 24 * 30 });
            window.location.reload();
          }}
        >
          Pink
        </Button>
        <Button
          onClick={() => {
            setCookie('theme', 'dark', { maxAge: 60 * 60 * 24 * 30 });
            window.location.reload();
          }}
        >
          Green
        </Button>
        <Button
          onClick={() => {
            setCookie('theme', 'red', { maxAge: 60 * 60 * 24 * 30 });
            window.location.reload();
          }}
        >
          Red
        </Button>
        <Button
          onClick={() => {
            setCookie('theme', 'purple', { maxAge: 60 * 60 * 24 * 30 });
            window.location.reload();
          }}
        >
          Purple
        </Button>
      </Group>
      <Button
        onClick={() => {
          setCookie('theme', 'default', { maxAge: 60 * 60 * 24 * 30 });
          window.location.reload();
        }}
      >
        Default
      </Button>
    </Container>
  );
};
