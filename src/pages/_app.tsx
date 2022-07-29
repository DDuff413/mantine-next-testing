import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie } from 'cookies-next';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { lightTheme, darkTheme, redTheme, purpleTheme, defaultTheme } from 'utils/themes';

export default function App(props: AppProps & { theme: MantineThemeOverride }) {
  const { Component, pageProps } = props;
  const [theme] = useState<MantineThemeOverride>(props.theme);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

const getTheme = (page: string) => {
  switch (page) {
    case 'light': {
      return lightTheme;
    }
    case 'dark': {
      return darkTheme;
    }
    case 'red': {
      return redTheme;
    }
    case 'purple': {
      return purpleTheme;
    }
    default: {
      return defaultTheme;
    }
  }
};

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
  theme: getTheme(getCookie('page', ctx) ? (getCookie('page', ctx) as string) : 'default'),
});
