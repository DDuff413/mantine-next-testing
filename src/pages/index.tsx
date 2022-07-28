import { Welcome } from 'components/Welcome/Welcome';
import { ColorSchemeToggle } from 'components/ColorSchemeToggle/ColorSchemeToggle';
import { MouseCounter } from 'components/MouseCounter/MouseCounter';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <MouseCounter />
    </>
  );
}
