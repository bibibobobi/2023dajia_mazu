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

export default function Home(): JSX.Element {
  const [data, setData] = useState({
    Youtube: [],
    relatedPost: [],
    Ad: [],
    Logo: [],
    Introduction: [],
  });

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.4 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2 });

  const [activeElement, setActiveElement] = useState<string>('');

  useEffect(() => {
    axios
      .get('https://statics-dev.mnews.tw/json/matsu2023.json')
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const { Youtube, relatedPost, Ad, Logo, Introduction } = data;
  const playlist = makePlaylist(Youtube);

  useEffect(() => {
    if (inView1) {
      setActiveElement('video');
    } else if (inView2) {
      setActiveElement('intro');
    } else if (inView3) {
      setActiveElement('time');
    } else if (inView4) {
      setActiveElement('news');
    } else {
      setActiveElement('');
    }
  }, [inView1, inView2, inView3, inView4]);

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
      <SectionIntro innerRef={ref2} intro={Introduction} />
      <SectionTime innerRef={ref3} />
      <SectionNews innerRef={ref4} />

      <BottomNav activeElement={activeElement} />
    </>
  );
}
