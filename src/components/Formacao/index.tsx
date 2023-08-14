import * as S from './styles';

export function Formacao() {
  return (
    <S.Container>
      <S.FormacaoContainer>
        <S.Subtitulo>Formação</S.Subtitulo>

        <div>
          <S.FormacaoTexto>
            Minha mais recente experiência acadêmica foi na{' '}
            <strong>ORIGAMID</strong> 🎓 aprendendo{' '}
            <strong>UX / UI Design</strong>. <br /> Além disso me mantenho
            sempre atualizado com cursos intensivos online.
          </S.FormacaoTexto>

          <S.FaculdadeLista>
            <S.Faculdade>
              <S.FaculdadeTipo>Graduação</S.FaculdadeTipo>
              <S.FaculdadeCurso>
                Análise de desenvolvimento de sistemas
              </S.FaculdadeCurso>
              <S.Instituicao>UNINTER</S.Instituicao>
            </S.Faculdade>

            <S.Faculdade>
              <S.FaculdadeTipo>Rocketseat</S.FaculdadeTipo>
              <S.FaculdadeCurso>
                ReactJS <br />
                React-Native NodeJS
              </S.FaculdadeCurso>
              <S.Instituicao>ROCKET</S.Instituicao>
            </S.Faculdade>

            <S.Faculdade>
              <S.FaculdadeTipo>Origamid</S.FaculdadeTipo>
              <S.FaculdadeCurso>UX Design & UI Design</S.FaculdadeCurso>
              <S.Instituicao>ORIGAMID</S.Instituicao>
            </S.Faculdade>
          </S.FaculdadeLista>

          <S.FormacaoExtra>
            <S.Cursos>
              <h3>Cursos Intensivos</h3>
              <ul>
                <li>
                  UX Design & UI Design <span>56h</span>
                </li>
                <li>
                  Front End para Iniciantes <span>72h</span>
                </li>
              </ul>
            </S.Cursos>
            <S.Idiomas>
              <h3>Idiomas</h3>
              <ul>
                <li>
                  Inglês <span>/ Intermediário</span>
                </li>
                <li>
                  Espanhol <span>/ básico</span>
                </li>
              </ul>
            </S.Idiomas>
          </S.FormacaoExtra>
        </div>
      </S.FormacaoContainer>
    </S.Container>
  );
}
