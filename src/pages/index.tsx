import { Welcome } from 'components/Welcome/Welcome';
import { MouseCounter } from 'components/MouseCounter/MouseCounter';
import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <PageContainer>
      <Welcome />
      <ColorSchemeToggle />
      <ThemeButtons />
      <MouseCounter />
    </PageContainer>
  );
}
