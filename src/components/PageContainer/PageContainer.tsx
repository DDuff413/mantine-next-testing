import { Container } from '@mantine/core';
import Head from 'next/head';
import { ReactNode } from 'react';
import useStyles from 'components/PageContainer/PageContainer.styles';

export interface PageContainerProps {
  children?: ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <Container className={classes.container}>{props.children}</Container>
    </>
  );
};
