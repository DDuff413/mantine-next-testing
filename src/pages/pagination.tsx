import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { MultiplePages } from 'components/MultiplePages/MultiplePages';

export default function PaginationsPage() {
  return (
    <PageContainer>
      <MultiplePages />
      <ThemeButtons />
    </PageContainer>
  );
}
