import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Navigation from '../components/nav';
import SideMenu from 'components/side-menu';
import BottomNav from '../components/nav-mob';
import Header from '../components/header';

const H1 = styled.h1`
  margin-top: 100px;
  height: 50vh;
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
      <Navigation />
      <SideMenu />
      <Header />
      <H1 id='video'>活動影片</H1>
      <H1 id='intro'>慶典介紹</H1>
      <H1 id='time'>遶境時程</H1>
      <H1 id='news'>相關新聞</H1>
      <BottomNav />
    </>
  );
}
