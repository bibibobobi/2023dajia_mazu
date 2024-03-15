import axios from "axios";
import AdMob from "components/ad-mob";
import AdPc from "components/ad-pc";
import Footer from "components/footer";
import Header from "components/header";
import MainLogos from "components/main-logos";
import Navigation from "components/nav";
import BottomNav from "components/nav-mob";
import ScrollToTopButton from "components/scroll-to-top-button";
import SectionIntro from "components/section-intro";
import SectionNews from "components/section-news";
import SectionTime from "components/section-time";
import SectionVideo from "components/section-video";
import SideMenu from "components/side-menu";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { staticJsonUrl } from "../constants/config";
import { gaScrollEvent, makeAdList, makePlaylist } from "../utils/utils";

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

  const { ref: adRef1, inView: ad1inView } = useInView({ threshold: 0.1 });
  const { ref: adRef2, inView: ad2inView } = useInView({ threshold: 0.1 });

  const [activeElement, setActiveElement] = useState<string>("");

  // Send gaScrollEvents
  const [ad1Sent, setAd1Sent] = useState(false);
  const [ad2Sent, setAd2Sent] = useState(false);

  if (ad1inView && !ad1Sent) {
    gaScrollEvent("滑到廣告（一）");
    setAd1Sent(true);
  }

  if (ad2inView && !ad2Sent) {
    gaScrollEvent("滑到廣告（二）");
    setAd2Sent(true);
  }

  useEffect(() => {
    axios
      .get(staticJsonUrl)
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const { Youtube, relatedPost, Ad, Logo, Introduction } = data;
  const playlist = makePlaylist(Youtube);

  const allAdList = makeAdList(Ad);
  // Filter ads for PC
  const adListPc = allAdList.filter((ad) => ad.note.includes("桌機"));
  // Filter ads for Mobile
  const adListMobile = allAdList.filter((ad) => ad.note.includes("手機"));

  const logoList = makeAdList(Logo);

  useEffect(() => {
    if (inView1) {
      setActiveElement("video");
    } else if (inView2) {
      setActiveElement("intro");
    } else if (inView3) {
      setActiveElement("time");
    } else if (inView4) {
      setActiveElement("news");
    } else {
      setActiveElement("");
    }
  }, [inView1, inView2, inView3, inView4]);

  return (
    <>
      <Head>
        <title>2024 大甲媽祖遶境｜鏡新聞</title>
      </Head>
      <Navigation activeElement={activeElement} />
      <SideMenu activeElement={activeElement} />
      <Header />

      <SectionVideo innerRef={ref1} playlist={playlist} />
      <SectionIntro innerRef={ref2} intro={Introduction} />

      <div ref={adRef1} />
      <AdPc adListPc={adListPc} label="廣告（一）" />
      <AdMob adListMobile={adListMobile} label="廣告（一）" />

      <SectionTime innerRef={ref3} />
      <SectionNews innerRef={ref4} relatedPost={relatedPost} />

      <div ref={adRef2} />
      <AdPc adListPc={adListPc} label="廣告（二）" />
      <AdMob adListMobile={adListMobile} label="廣告（二）" />

      <MainLogos />
      <Footer logoList={logoList} />
      <ScrollToTopButton />
      <BottomNav activeElement={activeElement} />
    </>
  );
}
