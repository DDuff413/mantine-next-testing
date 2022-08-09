import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { ResultsDashboard } from 'components/ResultsDashboard/ResultsDashboard';

export default function ResultsPage() {
  return (
    <PageContainer>
      <ResultsDashboard />
      <ThemeButtons />
    </PageContainer>
  );
}
