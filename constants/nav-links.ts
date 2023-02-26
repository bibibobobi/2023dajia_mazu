import { EventVideo } from '../components/icons/li-video';
import { EventIntro } from '../components/icons/li-intro';
import { EventTime } from '../components/icons/li-time';
import { RelatedNews } from '../components/icons/li-news';

type NavLinks = {
  name: string;
  href: string;
  svgIcon: any;
};

const navLinks: NavLinks[] = [
  {
    name: '活動影音',
    href: '/#video',
    svgIcon: EventVideo,
  },
  {
    name: '慶典介紹',
    href: '/#intro',
    svgIcon: EventIntro,
  },
  {
    name: '遶境時程',
    href: '/#time',
    svgIcon: EventTime,
  },
  {
    name: '相關新聞',
    href: '/#news',
    svgIcon: RelatedNews,
  },
];

export { navLinks };
