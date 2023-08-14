// import { size, rem } from 'polished';
import styled from 'styled-components';

export const BgVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: linear-gradient(
      90deg,
      #000 8%,
      rgba(10, 12, 16, 0.4) 50%,
      #fff 100%
    );
  }
`;

export const Video = styled.video`
  position: absolute;
  height: 100vh;
`;

export const Container = styled.section`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
  justify-content: center;
  padding: 129px 0;
  margin: 0 auto;

  > img {
    width: 40rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  // ============================== RESPONSIVE
  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }
    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    gap: 50px;

    > img {
      width: 22rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 75px;
  }

  @media (max-width: 515px) {
    padding: 0;
    margin: 0;
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.white};
    padding: 0 30px 0 30px;
    position: relative;
  }
  h1::before {
    content: '{';
    display: block;
    font-size: 5rem;
    color: ${({ theme }) => theme['green-200']};
    position: absolute;
    top: -16px;
    left: -11px;
    z-index: 2;
  }

  h1 span {
    display: inline-block;
    position: relative;
  }

  h1 span::after {
    content: '}';
    display: inline-block;
    font-size: 5rem;
    color: ${({ theme }) => theme['green-200']};
    position: absolute;
    top: -10px;
  }

  p {
    font-size: 1.875rem;
    margin: 32px;
    color: ${({ theme }) => theme['green-200']};
  }

  // ============================== RESPONSIVE
  @media (max-width: 1450px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }

    h1::before {
      content: '{';
      display: block;
      font-size: 4rem;
      color: #ccf235;
      position: absolute;
      top: -16px;
      left: 0px;
      z-index: 2;
    }
    h1 span::after {
      font-size: 4rem;
      top: -9px;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 3rem;
      display: inline;
    }

    h1::before {
      content: '{';
      display: block;
      font-size: 4rem;
      color: #ccf235;
      z-index: 2;
      top: -16px;
      /* left: 142px; */
    }
  }

  @media (max-width: 515px) {
    text-align: center;

    h1 {
      font-size: 2rem;
      display: block;
    }

    h1::before {
      display: none;
    }

    h1 span::after {
      display: none;
    }
  }
`;
