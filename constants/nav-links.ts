import { staticFileDestination } from "./config";

type NavLinks = {
  name: string;
  title: string;
  href: string;
};

const navLinks: NavLinks[] = [
  {
    name: "video",
    title: "活動影音",
    href: `${staticFileDestination}/#video`,
  },
  {
    name: "intro",
    title: "慶典介紹",
    href: `${staticFileDestination}/#intro`,
  },
  {
    name: "time",
    title: "遶境時間",
    href: `${staticFileDestination}/#schedule`,
  },
  {
    name: "news",
    title: "相關新聞",
    href: `${staticFileDestination}/#news`,
  },
];

export { navLinks };
