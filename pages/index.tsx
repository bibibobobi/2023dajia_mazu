import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Navigation from '../components/nav';
import SideMenu from 'components/side-menu';
import BottomNav from '../components/nav-mob';
import Header from '../components/header';
import SectionVideo from '../components/section-video';
import SectionIntro from 'components/section-intro';
import SectionTime from 'components/section-time';
import SectionNews from 'components/section-news';

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
      <div id='video' />
      <SectionVideo />
      <div id='intro' />
      <SectionIntro />
      <div id='time' />
      <SectionTime />
      <div id='news' />
      <SectionNews />
      <BottomNav />
    </>
  );
}
