import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    max-width: 1200px;
    padding: 40px 20px;
    margin: 100px auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;

    // ============================== RESPONSIVE
    @media (max-width: 1200px) {
      padding-top: 200px;
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      padding-top: 200px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0;
      padding-top: 0;
      margin-top: 0;
    }

    @media (max-width: 500px) {
      flex-direction: column;

      transform: translateY(152px);
    }
  }
`;

export const Subtitulo = styled.h2`
  font-size: 8rem;
  line-height: 1;
  text-transform: uppercase;
  word-break: break-all;
  max-width: 4ch;
  color: #e0e0e0;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 800px) {
    font-size: 3.5rem;
    margin-bottom: 24px;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
    padding-top: 0;
  }
`;

export const ExperienciaTexto = styled.p`
  font-size: 1.5rem;
  line-height: 1.33;
  max-width: 40ch;
  margin-bottom: 60px;
  color: #525252;

  strong {
    color: #141414;
  }

  @media (max-width: 1200px) {
    text-align: center;
    max-width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    text-align: center;
    max-width: 100%;
  }
`;

export const Empresa = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  padding: 20px;
  background: #f5f5f5;
  margin-bottom: 20px;
  border-radius: 4px;
  position: relative;

  ::before {
    content: '';
    display: block;
    width: 4px;
    height: 20px;
    background: linear-gradient(#b6f829, #67dd0a);
    position: absolute;
    top: 20px;
    left: -4px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    margin-top: 50px;
  }
`;

export const Ano = styled.span`
  position: absolute;
  top: 22px;
  left: -100px;
  text-align: right;
  width: 80px;
  color: #525252;
  font-size: 0.875rem;
`;

export const Titulo = styled.h3`
  font-size: 1.125rem;
  line-height: 1.1;
  font-weight: bold;
`;

export const Descricao = styled.div`
  font-size: 0.875rem;
  line-height: 1.4;
  color: #525252;
`;

export const Habilidades = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: start;

  li {
    font-size: 0.875rem;
    line-height: 1.4;
    border-radius: 4px;
    background: #ffffff;
    padding: 5px 10px;
  }
`;
