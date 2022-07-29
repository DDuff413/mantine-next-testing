import { Anchor, Button, Group } from '@mantine/core';
import { setCookie } from 'cookies-next';

export const ThemeButtons = () => (
  <Group spacing={50} grow position="center" px={50} py={10}>
    <Anchor
      href="/light"
      size="lg"
      onClick={() => {
        setCookie('page', 'light', { maxAge: 60 * 60 * 24 * 30 });
      }}
    >
      <Button>Light</Button>
    </Anchor>
    <Anchor
      href="/dark"
      size="lg"
      onClick={() => {
        setCookie('page', 'dark', { maxAge: 60 * 60 * 24 * 30 });
      }}
    >
      <Button>Dark</Button>
    </Anchor>
    <Anchor
      href="/red"
      size="lg"
      onClick={() => {
        setCookie('page', 'red', { maxAge: 60 * 60 * 24 * 30 });
      }}
    >
      <Button>Red</Button>
    </Anchor>
    <Anchor
      href="/purple"
      size="lg"
      onClick={() => {
        setCookie('page', 'purple', { maxAge: 60 * 60 * 24 * 30 });
      }}
    >
      <Button>Purple</Button>
    </Anchor>
  </Group>
);
