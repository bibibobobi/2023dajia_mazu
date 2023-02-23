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
    name: 'video',
    href: '/#video',
    svgIcon: EventVideo,
  },
  {
    name: 'intro',
    href: '/#intro',
    svgIcon: EventIntro,
  },
  {
    name: 'time',
    href: '/#time',
    svgIcon: EventTime,
  },
  {
    name: 'news',
    href: '/#news',
    svgIcon: RelatedNews,
  },
];

export { navLinks };
