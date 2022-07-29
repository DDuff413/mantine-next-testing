// import { MantineProvider } from '@mantine/core';
import { Container } from '@mantine/core';
import Head from 'next/head';
import { ReactNode } from 'react';
// import { purple, red } from 'utils/themes';

export interface PageContainerProps {
  children?: ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = (props) => (
  <>
    <Head>
      <title>Mantine next example</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="shortcut icon" href="/favicon.svg" />
    </Head>
    {/* <MantineProvider theme={purple}> */}
    <Container>{props.children}</Container>
    {/* </MantineProvider> */}
  </>
);
