import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { TopicCard } from 'components/TopicCard/TopicCard';

export default function ResultsPage() {
  return (
    <PageContainer>
      <TopicCard topic="The Sun" icon="sun" progress={0} />
      <TopicCard topic="The Moon" icon="moon" progress={10} />
      <TopicCard topic="The Sky" icon="sky" progress={30} />
      <TopicCard topic="The Sun" icon="sun" progress={50} />
      <TopicCard topic="The Moon" icon="moon" progress={70} />
      <TopicCard topic="The Sky" icon="sky" progress={90} />
      <TopicCard topic="The Sun" icon="sun" progress={100} />
      <ThemeButtons />
    </PageContainer>
  );
}
