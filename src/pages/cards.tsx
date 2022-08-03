import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { LinkButton } from 'components/LinkButton/LinkButton';
import { Cards } from 'components/Cards/Cards';
import { Group } from '@mantine/core';

export default function HomePage() {
  return (
    <PageContainer>
      <Group position="center" pt={10}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Group>
      <ThemeButtons />
      <LinkButton href="/" text="Home" />
    </PageContainer>
  );
}
