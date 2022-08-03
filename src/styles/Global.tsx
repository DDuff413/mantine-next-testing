import { Global, useMantineTheme } from '@mantine/core';

export const GlobalStyles = () => {
  const mantineTheme = useMantineTheme();

  const bgColor = mantineTheme.colors[mantineTheme.primaryColor][9];

  return (
    <Global
      styles={(theme) => ({
        body: {
          backgroundColor: theme.colorScheme === 'dark' ? bgColor : theme.fn.rgba(bgColor, 0.02),
        },
      })}
    />
  );
};
