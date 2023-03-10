import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { makePlaylist, makeAdList } from '../utils/utils';
import Head from 'next/head';
import Navigation from 'components/nav';
import SideMenu from 'components/side-menu';
import BottomNav from 'components/nav-mob';
import Header from 'components/header';
import SectionVideo from 'components/section-video';
import SectionIntro from 'components/section-intro';
import SectionTime from 'components/section-time';
import SectionNews from 'components/section-news';
import AdPc from 'components/ad-pc';
import AdMob from 'components/ad-mob';
import MainLogos from 'components/main-logos';
import Footer from 'components/footer';
import ScrollToTopButton from 'components/scroll-to-top-button';

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

  const adListPc = makeAdList(Ad.slice(0, 8));
  const adListMobile = makeAdList(Ad.slice(8));
  const logoList = makeAdList(Logo);

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
        <title>2023 ??????????????????????????????</title>
      </Head>
      <Navigation activeElement={activeElement} />
      <SideMenu activeElement={activeElement} />
      <Header />

      <SectionVideo innerRef={ref1} playlist={playlist} />
      <SectionIntro innerRef={ref2} intro={Introduction} />

      <AdPc adListPc={adListPc} />
      <AdMob adListMobile={adListMobile} />

      <SectionTime innerRef={ref3} />
      <SectionNews innerRef={ref4} relatedPost={relatedPost} />

      <AdPc adListPc={adListPc} />
      <AdMob adListMobile={adListMobile} />
      <MainLogos />
      <Footer logoList={logoList} />
      <ScrollToTopButton />
      <BottomNav activeElement={activeElement} />
    </>
  );
}
