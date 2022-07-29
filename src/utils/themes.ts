import { MantineThemeOverride } from '@mantine/core';

export const darkTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'green',
  defaultGradient: { from: 'green', to: 'teal', deg: 90 },
};

export const lightTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'pink',
  defaultGradient: { from: 'pink', to: 'blue', deg: 90 },
};

export const redTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'red',
  defaultGradient: { from: 'red', to: 'orange', deg: 90 },
};

export const purpleTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'grape',
  defaultGradient: { from: 'grape', to: 'violet', deg: 90 },
};

export const defaultTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'blue',
};
