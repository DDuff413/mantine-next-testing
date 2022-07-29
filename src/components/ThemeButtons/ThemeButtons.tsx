import { Button, Container, Group } from '@mantine/core';
import { setCookie } from 'cookies-next';

export const ThemeButtons = () => (
  <Container>
    <Group spacing={50} grow position="center" px={50} py={10}>
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
