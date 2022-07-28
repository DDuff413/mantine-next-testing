import { Title, Text, Anchor, Group } from '@mantine/core';
import useStyles from 'components/Welcome/Welcome.styles';

export const Welcome = () => {
  const { classes } = useStyles();

  return (
    <Group className={classes.container}>
      <Title className={classes.title} align="center" mt={100}>
        Beep Boop{' '}
        <Text inherit variant="gradient" component="span">
          Computer Brain
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is a space where I mess around with Mantine things in a mantain/next.js environment.
      </Text>
      <Anchor href="https://mantine.dev/theming/next/" size="lg">
        this guide
      </Anchor>
    </Group>
  );
};
