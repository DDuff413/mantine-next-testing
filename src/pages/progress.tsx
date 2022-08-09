import { ThemeButtons } from 'components/ThemeButtons/ThemeButtons';
import { PageContainer } from 'components/PageContainer/PageContainer';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { NumberInput } from '@mantine/core';
import { useState } from 'react';
import { ResultBar } from 'components/ResultBar/ResultBar';

export default function ProgressPage() {
  const [progress, setProgress] = useState(50);

  return (
    <PageContainer>
      <NumberInput
        defaultValue={progress}
        placeholder="Progress value"
        label="Progress Value"
        onChange={(value) => {
          setProgress(value || 0);
        }}
      />
      <ProgressBar progress={progress} />
      <ResultBar result={progress} mark={60} />

      <ThemeButtons />
    </PageContainer>
  );
}
