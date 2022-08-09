import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { LinkButton } from 'components/LinkButton/LinkButton';
import { TopicCard } from 'components/TopicCard/TopicCard';

export default function ResultsPage() {
  return (
    <PageContainer>
      <TopicCard topic="The Sun" icon="sun" progress={30} />
      <ThemeButtons />
      <LinkButton href="/" text="Home" />
    </PageContainer>
  );
}
