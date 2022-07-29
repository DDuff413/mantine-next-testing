import { Button, Group } from '@mantine/core';
import { setCookie } from 'cookies-next';

export const ThemeButtons = () => (
  <Group spacing={50} grow position="center" px={50} py={10}>
    <Button
      onClick={() => {
        setCookie('page', 'light', { maxAge: 60 * 60 * 24 * 30 });
        window.location.reload();
      }}
    >
      Pink
    </Button>
    <Button
      onClick={() => {
        setCookie('page', 'dark', { maxAge: 60 * 60 * 24 * 30 });
        window.location.reload();
      }}
    >
      Green
    </Button>
    <Button
      onClick={() => {
        setCookie('page', 'red', { maxAge: 60 * 60 * 24 * 30 });
        window.location.reload();
      }}
    >
      Red
    </Button>
    <Button
      onClick={() => {
        setCookie('page', 'purple', { maxAge: 60 * 60 * 24 * 30 });
        window.location.reload();
      }}
    >
      Purple
    </Button>
  </Group>
);
