/* eslint-disable react/jsx-no-comment-textnodes */
import * as S from './styles';

import picture from '../../assets/perfil.png';

export function HomeHero() {
  return (
    <>
      <S.BgVideo>
        <S.Video autoPlay muted loop>
          <source src="https://i.imgur.com/54hl9vy.mp4" type="video/mp4" />
        </S.Video>
      </S.BgVideo>

      <S.Container data-aos="fade-up">
        <img data-aos="fade-up" src={picture} alt="Minha foto" />

        <S.TextContainer>
          <h1>
            Desenvolvedor <br /> Front-End & <br /> UX/UI <span>Design</span>
          </h1>
          <p>localizado em Apiaí SP</p>
        </S.TextContainer>
      </S.Container>
    </>
  );
}
