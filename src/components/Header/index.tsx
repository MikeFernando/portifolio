import { NavLink } from './NavLink';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <strong>
          MIKE <span>FERNANDO</span>
        </strong>
        <ul>
          <NavLink title="Home" path="/" />
          <NavLink title="Projetos" path="/projects" includes />
        </ul>
      </div>
    </Container>
  );
}
