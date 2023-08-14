import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import getPrismicClient from '../../../services/prismic';

import { BannerContainer } from '../../../components/BannerContainer';
import { Header } from '../../../components/Header';
import { LoadingScreen } from '../../../components/LoadingScreen';

import { ProjetoContainer } from '../../../styles/ProjectDetails';

import { IProjects } from '../../../@types/IProjects';

interface ProjetoProps {
  project: IProjects;
}

export default function Projeto({ project }: ProjetoProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjetoContainer>
      <Head>
        <title>{project.title} | Meu portfólio</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>

      <Header />

      <BannerContainer
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <button type="button">
        <a href={project.link}>Ver projeto online</a>
      </button>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.Predicates.at('document.type', 'projeto')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projeto', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
