import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { LinkButton } from 'components/LinkButton/LinkButton';
import { MultiplePages } from 'components/MultiplePages/MultiplePages';

export default function PaginationsPage() {
  return (
    <PageContainer>
      <MultiplePages />
      <ThemeButtons />
      <LinkButton href="/" text="Home" />
    </PageContainer>
  );
}
