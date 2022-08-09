import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { MultiSelect } from 'components/MultiSelect/MultiSelect';

export default function PaginationsPage() {
  return (
    <PageContainer>
      <MultiSelect isMultiSelect />
      <ThemeButtons />
    </PageContainer>
  );
}
