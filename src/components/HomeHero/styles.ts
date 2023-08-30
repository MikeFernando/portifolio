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
  background-color: #1a1a1a;

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
      rgba(10, 2, 30, 0.5) 50%,
      #fff 100%
    );

    @media (max-width: 515px) {
      display: none;
    }
  }

  @media (max-width: 1400px) {
    ::after {
      background: rgba(10, 2, 30, 0.5);
    }
  }

  @media (max-width: 1000px) {
    ::after {
      background: rgba(10, 2, 30, 0.5);
    }
  }
`;

export const Video = styled.video`
  position: absolute;
  height: 100vh;

  @media (max-width: 515px) {
    display: none;
  }
`;

export const Container = styled.section`
  max-width: 1200px;
  height: calc(100vh - 84px);
  display: flex;
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

  @media (max-width: 515px) {
    padding: 0;
    margin: 0 auto;

    background: linear-gradient(
      180deg,
      #000 8%,
      rgba(10, 2, 30, 0.5) 50%,
      #fff 100%
    );
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 6rem;
    font-family: 'Special Elite', cursive;
    color: ${({ theme }) => theme.white};
    padding: 0 30px 0 30px;
    position: relative;
  }
  h1 span {
    font-family: 'Rye', cursive;
    display: inline-block;
    position: relative;
    color: #75275e;
  }

  p {
    font-size: 2rem;
    margin: 32px;
    font-family: 'Rye', cursive;
    color: #bb639e;
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

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 3rem;
      display: inline;
    }
  }

  @media (max-width: 515px) {
    text-align: center;
  }
`;
