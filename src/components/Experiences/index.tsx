import * as S from './styles';

export function Experiences() {
  return (
    <S.Container id="experiencia">
      <section aria-label="Experiência">
        <S.Subtitulo>Experiência</S.Subtitulo>
        <div>
          <S.ExperienciaTexto>
            Desenvolvo interfaces modernas e reativas na web utilizando{' '}
            <strong>HTML</strong>, <strong>CSS</strong> e{' '}
            <strong>JavaScript</strong> juntamente com bibliotecas modulares e
            escaláveis como ReactJS. <br /> Aplicando conceitos e boas práticas{' '}
            <br />
            de <strong>UX</strong> e <strong>UI Design</strong>
          </S.ExperienciaTexto>

          <S.Empresa>
            <S.Ano>2020</S.Ano>
            <S.Titulo>FREELANCER</S.Titulo>
            <S.Titulo>Desenvolvedor Júnior</S.Titulo>
            <S.Descricao>
              Nesse tempo atuava construindo landing pages para amigos e poucos
              clientes para desenvolver habilidades e praticar os conhecimntos
              obtidos de cursos
            </S.Descricao>
            <S.Habilidades>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </S.Habilidades>
          </S.Empresa>

          <S.Empresa>
            <S.Ano>2021</S.Ano>
            <S.Titulo>PIXTER TECNOLOGIES</S.Titulo>
            <S.Titulo>Desenvolvedor Júnior</S.Titulo>
            <S.Descricao>
              Atuante no primeiro internet banking voltado para o agrow negócio
              no Brasil, auxiliei em soluções mobile em React Native para
              realizar transações de forma rápida e segura recebendo e
              realizando pagamentos instantâneos pelo app.
            </S.Descricao>
            <S.Habilidades>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>UX Design</li>
              <li>ReactJS</li>
              <li>React Native</li>
            </S.Habilidades>
          </S.Empresa>

          <S.Empresa>
            <S.Ano>2023</S.Ano>
            <S.Titulo>PIXTER TECNOLOGIES</S.Titulo>
            <S.Titulo>Desenvolvedor Júnior</S.Titulo>
            <S.Descricao>
              Também atuei na web construindo landing pages estáticas utilizando
              framework nextjs.
            </S.Descricao>
            <S.Habilidades>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>UX Design</li>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>NextJS</li>
            </S.Habilidades>
          </S.Empresa>
        </div>
      </section>
    </S.Container>
  );
}
