import { Button, Container, Divider, Group, NumberInput, Pagination, Text } from '@mantine/core';
import { useState } from 'react';

import useStyles from 'components/MultiplePages/MultiplePages.styles';
import { Cards } from 'components/Cards/Cards';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { ResultBar } from 'components/ResultBar/ResultBar';
import { ResultsDashboard } from 'components/ResultsDashboard/ResultsDashboard';
import { MultiSelect } from 'components/MultiSelect/MultiSelect';

export const MultiplePages: React.FC = () => {
  const { classes } = useStyles();

  const [activePage, setActivePage] = useState(1);
  const [progress, setProgress] = useState(50);
  const numPages = 5;

  const previousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const nextPage = () => {
    if (activePage < numPages) {
      setActivePage(activePage + 1);
    }
  };

  let pageContent;

  switch (activePage) {
    case 1:
      pageContent = <Cards />;
      break;
    case 2:
      pageContent = (
        <Container pt={20} className={classes.barContainer}>
          <NumberInput
            defaultValue={progress}
            placeholder="Progress value"
            label="Progress Value"
            onChange={(value) => {
              setProgress(value || 0);
            }}
          />
          <ProgressBar progress={progress} />
        </Container>
      );
      break;
    case 3:
      pageContent = (
        <Container pt={20} className={classes.barContainer}>
          <NumberInput
            defaultValue={progress}
            placeholder="Result value"
            label="Result Value"
            onChange={(value) => {
              setProgress(value || 0);
            }}
          />
          <ResultBar result={progress} mark={60} />
        </Container>
      );
      break;
    case 4:
      pageContent = (
        <Container pt={20} className={classes.barContainer}>
          <ResultsDashboard />
        </Container>
      );
      break;
    case 5:
      pageContent = (
        <Container pt={20} className={classes.barContainer}>
          <Text>MultiSelect</Text>
          <MultiSelect isMultiSelect />
          <Divider my="md" />
          <Text>SingleSelect</Text>
          <MultiSelect isMultiSelect={false} />
        </Container>
      );
      break;
  }

  return (
    <Group className={classes.container} pt={10}>
      {pageContent}
      <Group pt={20}>
        <Button
          onClick={() => {
            previousPage();
          }}
        >
          Previous page
        </Button>
        <Button
          onClick={() => {
            nextPage();
          }}
        >
          Next page
        </Button>
      </Group>
      <Pagination
        total={numPages}
        withControls={false}
        page={activePage}
        onChange={setActivePage}
        styles={(theme) => ({
          item: {
            borderRadius: 100,
            height: 16,
            minWidth: 16,
            padding: 0,
            color: theme.colors[theme.primaryColor][9],
            backgroundColor: theme.colors[theme.primaryColor][9],
            '&[data-active]': {
              backgroundColor: theme.colors[theme.primaryColor][8],
              color: theme.colors[theme.primaryColor][8],
            },
          },
        })}
      />
    </Group>
  );
};
