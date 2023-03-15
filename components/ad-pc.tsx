import Image from 'next/image';
import styled from 'styled-components';
import { gaClickEvent } from 'utils/utils';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper';

type Ad = {
  image: string;
  url: string;
  order: string;
};

type AdPcProps = {
  adListPc: Ad[];
};

const Section = styled.div`
  display: none;
  justify-content: center;
  @media (min-width: 1200px) {
    display: flex;
  }
`;

const SwiperWrapper = styled.div`
  width: 900px;
`;

export default function AdPc({
  adListPc,
  label,
}: AdPcProps & { label: string }) {
  if (!adListPc.length) {
    return null; // Don't render the section if adListPc is empty
  }

  const slides = adListPc.map((ad, index) => (
    <SwiperSlide key={index}>
      <a
        href={ad.url}
        target='_blank'
        rel='noopener noreferrer'
        onClick={() => gaClickEvent(`點擊${label}_第${ad.order}則_{${ad.url}}`)}
      >
        <Image src={ad.image} alt={`Ad ${index}`} width={900} height={280} />
      </a>
    </SwiperSlide>
  ));

  return (
    <Section>
      <SwiperWrapper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {slides}
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
}
