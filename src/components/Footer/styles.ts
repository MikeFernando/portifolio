import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.border};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      background: transparent;
      padding: 10px 30px;
      border: none;
      color: ${({ theme }) => theme['gray-900']};
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme['gray-900']};
        cursor: pointer;
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        height: 2rem;
        width: 2rem;
        color: ${({ theme }) => theme['gray-900']};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme['gray-900']};
        }
      }
    }

    // =========================== RESPONSIVE
    @media (max-width: 450px) {
      > button {
        font-size: 0.9rem;
      }

      > section {
        gap: 0.5rem;

        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      }
    }
  }
`;
