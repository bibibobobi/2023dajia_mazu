import Head from 'next/head';
import Navigation from '../components/nav';
import SideMenu from 'components/side-menu';
import BottomNav from '../components/nav-mob';
import Header from '../components/header';
import SectionVideo from '../components/section-video';
import SectionIntro from 'components/section-intro';
import SectionTime from 'components/section-time';
import SectionNews from 'components/section-news';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import makePlaylist from '../utils/make-playlist';
import axios from 'axios';

interface Data {
  Youtube: {
    id: string;
    title: string;
  }[];
  // Add any other properties and their types here
}

export default function Home({ data }: { data: Data }): JSX.Element {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.4 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2 });

  const [activeElement, setActiveElement] = useState('');

  useEffect(() => {
    if (inView1) {
      setActiveElement('video');
    }
    if (inView2) {
      setActiveElement('intro');
    }
    if (inView3) {
      setActiveElement('time');
    }
    if (inView4) {
      setActiveElement('news');
    }
  }, [inView1, inView2, inView3, inView4]);

  const playlist = makePlaylist(data.Youtube);
  console.log(playlist);

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
      <Navigation activeElement={activeElement} />
      <SideMenu activeElement={activeElement} />
      <Header />

      <SectionVideo innerRef={ref1} playlist={playlist} />
      <SectionIntro innerRef={ref2} />
      <SectionTime innerRef={ref3} />
      <SectionNews innerRef={ref4} />

      <BottomNav activeElement={activeElement} />
    </>
  );
}

export async function getStaticProps() {
  const apiEndpoint =
    'https://storage.googleapis.com/static-mnews-tw-dev/json/matsu2023.json';
  const response = await axios.get(apiEndpoint);
  const data = response.data;
  console.log(data.Youtube);
  return {
    props: {
      data,
    },
  };
}
