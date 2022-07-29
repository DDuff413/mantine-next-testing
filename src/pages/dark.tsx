import { MouseCounter } from 'components/MouseCounter/MouseCounter';
import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { Anchor } from '@mantine/core';
import { setCookie } from 'cookies-next';
import { Welcome } from 'components/Welcome/Welcome';

export default function DarkPage() {
  return (
    <PageContainer>
      <Welcome />
      <Anchor
        href="/"
        size="lg"
        onClick={() => {
          setCookie('page', 'home', { maxAge: 60 * 60 * 24 * 30 });
        }}
      >
        home
      </Anchor>
      <ThemeButtons />
      <MouseCounter />
    </PageContainer>
  );
}
