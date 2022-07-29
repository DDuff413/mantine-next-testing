import { Welcome } from 'components/Welcome/Welcome';
import { MouseCounter } from 'components/MouseCounter/MouseCounter';
import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';

export default function HomePage() {
  return (
    <PageContainer>
      <Welcome />
      <ThemeButtons />
      <MouseCounter />
    </PageContainer>
  );
}
