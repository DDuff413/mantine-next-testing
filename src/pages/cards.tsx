import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { LinkButton } from 'components/LinkButton/LinkButton';
import { Cards } from 'components/Cards/Cards';

export default function HomePage() {
  return (
    <PageContainer>
      <Cards />
      <ThemeButtons />
      <LinkButton href="/" text="Home" />
    </PageContainer>
  );
}
