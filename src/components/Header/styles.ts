import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.white};

  > div {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    strong {
      padding: 2px 3px;
      background-color: #000;
      color: #fff;
      border: 0;
    }

    span {
      display: inline-block;
      background-color: #fff;
      color: #000;
      padding: 3px;
    }

    ul {
      display: flex;
      gap: 2rem;
      align-items: center;
      padding: 2rem 0;
    }

    @media (max-width: 768px) {
      justify-content: center;

      strong {
        display: none;
      }
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    font-weight: 600;
    color: ${props =>
      props.isActive ? props.theme['green-700'] : props.theme['gray-500']};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme['gray-500'])
          : lighten(0.2, props.theme['gray-200'])};
    }
  }
`;
