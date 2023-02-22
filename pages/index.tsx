import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Navigation from '../components/nav';

// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

const H1 = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>2023 大甲媽祖遶境｜鏡新聞</title>
        <meta
          name='description'
          content='《鏡新聞》為您帶來 2023 年大甲媽祖遶境最新新聞'
        />
        <link rel='icon' type='image/x-icon' href={'/icons/favicon.ico'} />
      </Head>
      <Navigation></Navigation>
      <H1>哈囉 大甲媽祖</H1>
    </>
  );
}
