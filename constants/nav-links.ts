import { EventVideo } from '../components/icons/li-video';
import { EventIntro } from '../components/icons/li-intro';
import { EventTime } from '../components/icons/li-time';
import { RelatedNews } from '../components/icons/li-news';

type NavLinks = {
  name: string;
  title: string;
  href: string;
  svgIcon: any;
};

const navLinks: NavLinks[] = [
  {
    name: 'video',
    title: '活動影音',
    href: '/#video',
    svgIcon: EventVideo,
  },
  {
    name: 'intro',
    title: '慶典介紹',
    href: '/#intro',
    svgIcon: EventIntro,
  },
  {
    name: 'time',
    title: '遶境時程',
    href: '/#time',
    svgIcon: EventTime,
  },
  {
    name: 'news',
    title: '相關新聞',
    href: '/#news',
    svgIcon: RelatedNews,
  },
];

export { navLinks };
