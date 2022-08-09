import { Welcome } from 'components/Welcome/Welcome';
import { MouseCounter } from 'components/MouseCounter/MouseCounter';
import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
import { LinkButton } from 'components/LinkButton/LinkButton';

export default function HomePage() {
  return (
    <PageContainer>
      <Welcome />
      <ColorSchemeToggle />
      <ThemeButtons />
      <MouseCounter />
      <LinkButton href="/cards" text="Cards" />
      <LinkButton href="/progress" text="Progress" />
      <LinkButton href="/pagination" text="Pagination" />
      <LinkButton href="/results" text="Results" />
      <LinkButton href="/multiselect" text="MultiSelect" />
      <LinkButton href="/topic" text="Topic Card" />
    </PageContainer>
  );
}
