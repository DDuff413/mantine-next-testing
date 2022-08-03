import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core';
import { pinkTheme, greenTheme, redTheme, purpleTheme, defaultTheme } from 'utils/themes';
import { useHotkeys } from '@mantine/hooks';
import { GlobalStyles } from 'styles/Global';

export default function App(
  props: AppProps & { colorScheme: ColorScheme; theme: MantineThemeOverride }
) {
  const { Component, pageProps } = props;
  const [theme, setTheme] = useState<MantineThemeOverride>({
    primaryColor: props.theme.primaryColor,
    defaultGradient: props.theme.defaultGradient,
    colorScheme: props.colorScheme,
  });
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setTheme({
      primaryColor: props.theme.primaryColor,
      defaultGradient: props.theme.defaultGradient,
      colorScheme: nextColorScheme,
    });
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <GlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

const getTheme = (theme: string) => {
  switch (theme) {
    case 'light': {
      return pinkTheme;
    }
    case 'dark': {
      return greenTheme;
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
  theme: getTheme(getCookie('theme', ctx) ? (getCookie('theme', ctx) as string) : 'default'),
});
