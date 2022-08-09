import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { Cards } from 'components/Cards/Cards';

export default function CardsPage() {
  return (
    <PageContainer>
      <Cards />
      <ThemeButtons />
    </PageContainer>
  );
}
