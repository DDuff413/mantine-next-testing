import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { LinkButton } from 'components/LinkButton/LinkButton';
import { ResultsDashboard } from 'components/ResultsDashboard/ResultsDashboard';

export default function ResultsPage() {
  return (
    <PageContainer>
      <ResultsDashboard />
      <ThemeButtons />
      <LinkButton href="/" text="Home" />
    </PageContainer>
  );
}
