import * as S from './styles';

export function HomeHero() {
  return (
    <>
      <S.BgVideo>
        <S.Video autoPlay muted loop>
          <source src="https://i.imgur.com/t3x9uwm.mp4" type="video/mp4" />
        </S.Video>
      </S.BgVideo>

      <S.Container data-aos="fade-up">
        <S.TextContainer>
          <h1>
            Desenvolvedor <br /> Front-End & <br /> <span>UX/UI</span> Design
          </h1>
          <p>localizado em Apiaí SP</p>
        </S.TextContainer>
      </S.Container>
    </>
  );
}
