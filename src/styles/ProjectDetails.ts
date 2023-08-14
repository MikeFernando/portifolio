import { darken } from 'polished';
import styled from 'styled-components';

export const ProjetoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  button {
    background: ${({ theme }) => theme['green-700']};
    border: none;
    border-radius: 0.5rem;
    padding: 0.8rem 3rem;
    margin-top: 2rem;
    position: absolute;
    bottom: 109px;
    left: 82px;

    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => darken(0.1, theme['gray-200'])};
    }

    a {
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;
    }
  }

  // ============================== RESPONSIVE
  @media (max-width: 700px) {
    padding: 0 2.5rem;

    p {
      font-size: 1rem;
    }

    button {
      padding: 0.7rem 2rem;

      a {
        font-size: 0.9rem;
      }
    }
  }
`;
