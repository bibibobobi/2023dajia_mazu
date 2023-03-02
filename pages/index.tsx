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

const data = [
  {
    Name: 'Youtube',
    order: '1',
    Image: '-',
    'Link / Content': 'MYPVQccHhAQ',
    Note: '前端會將 YT 影片嵌入在活動影音區塊，上限 8 支。不滿 8 支時，有幾支就抓幾支，讓它播完之後會從頭輪播',
  },
  {
    Name: 'Youtube',
    order: '2',
    Image: '-',
    'Link / Content': 'Dxcc6ycZ73M',
    Note: '',
  },
  {
    Name: 'Youtube',
    order: '3',
    Image: '-',
    'Link / Content': 'https://www.youtube.com/watch?v=A7n_HEH4Te8',
    Note: '',
  },
  {
    Name: 'Youtube',
    order: '4',
    Image: '-',
    'Link / Content': '',
    Note: '',
  },
  {
    Name: 'Youtube',
    order: '5',
    Image: '-',
    'Link / Content': '',
    Note: '',
  },
  {
    Name: 'Youtube',
    order: '6',
    Image: '-',
    'Link / Content': '',
    Note: '',
  },
  {
    Name: 'Youtube',
    order: '7',
    Image: '-',
    'Link / Content': '',
    Note: '',
  },
  {
    Name: 'Youtube',
    order: '8',
    Image: '-',
    'Link / Content': '',
    Note: '',
  },
];

const playlist = makePlaylist(data);
console.log(playlist);

export default function Home(): JSX.Element {
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

      <SectionVideo innerRef={ref1} />
      <SectionIntro innerRef={ref2} />
      <SectionTime innerRef={ref3} />
      <SectionNews innerRef={ref4} />

      <BottomNav activeElement={activeElement} />
    </>
  );
}
