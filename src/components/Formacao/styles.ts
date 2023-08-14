// import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme['gray-900']};
`;

export const FormacaoContainer = styled.div`
  max-width: 1200px;
  padding: 120px 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 100px;
  position: relative;

  ::after {
    content: '';
    display: block;
    width: 230px;
    height: 230px;
    background: url('https://i.imgur.com/BmAqivI.png') no-repeat center;
    object-fit: fill;
    position: absolute;
    left: 0;
    top: -100px;
  }

  @media (min-width: 1250px) {
    ::after {
      left: -200px;
      top: -100px;
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 0;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 60px 20px;
    gap: 40px;

    ::after {
      display: none;
    }
  }
`;

export const Subtitulo = styled.h2`
  font-size: 8rem;
  line-height: 1;
  text-transform: uppercase;
  word-break: break-all;
  max-width: 4ch;
  color: #000;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
    max-width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }

  @media (max-width: 800px) {
    font-size: 3.5rem;
    margin-bottom: 24px;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
    padding-top: 0;
    color: ${({ theme }) => theme.white};
  }
`;

export const FormacaoTexto = styled.p`
  font-size: 1.5rem;
  line-height: 1.33;
  max-width: 40ch;
  margin-bottom: 60px;
  color: #a3a3a3;

  strong {
    color: #ffffff;
  }

  @media (max-width: 1200px) {
    text-align: center;
    margin: 0 auto 30px auto;
  }

  @media (max-width: 800px) {
    font-size: 1.25rem;
  }
`;

export const FaculdadeLista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
`;

export const Faculdade = styled.li`
  flex: 1;
  background: #000000;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const FaculdadeTipo = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #a3a3a3;
  margin-bottom: 10px;
`;

export const FaculdadeCurso = styled.h3`
  flex: 1;
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 40px;
  position: relative;
  color: #fff;

  ::before {
    content: '';
    display: block;
    width: 4px;
    height: 20px;
    background: linear-gradient(#b6f829, #67dd0a);
    position: absolute;
    left: -24px;
  }
`;

export const Instituicao = styled.span`
  font-size: 1.125rem;
  color: #a3a3a3;
`;

export const FormacaoExtra = styled.div`
  h3 {
    font-size: 0.875rem;
    line-height: 1.4;
    color: #8f8f8f;
    text-transform: uppercase;
    margin-bottom: 30px;
    position: relative;
  }

  h3::before {
    display: block;
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    left: -36px;
    top: -4px;

    @media (max-width: 800px) {
      position: initial;
      margin-bottom: 10px;
    }
  }
`;

export const Cursos = styled.div`
  margin-bottom: 60px;

  li {
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
`;

export const Idiomas = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
`;
