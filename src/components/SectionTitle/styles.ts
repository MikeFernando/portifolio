import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.white};
    font-size: 4.5rem;
    margin-top: 3rem;
    transition: color 0.3s ease-in-out;
  }
  h1:hover {
    color: ${({ theme }) => theme.white};
  }

  h2 {
    color: ${({ theme }) => theme['green-700']};
    font-weight: 300;
    font-size: 3.5rem;
  }

  // ============================== RESPONSIVE
  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
