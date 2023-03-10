import Image from 'next/image';
import styled from 'styled-components';
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
};

type AdMobProps = {
  adListMobile: Ad[];
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const SwiperWrapper = styled.div`
  width: 300px;
`;

export default function AdMob({ adListMobile }: AdMobProps) {
  if (!adListMobile.length) {
    return null; // Don't render the section if adListMobile is empty
  }

  const slides = adListMobile.map((ad, index) => (
    <SwiperSlide key={index}>
      <a href={ad.url} target='_blank' rel='noopener noreferrer'>
        <Image src={ad.image} alt={`Ad ${index}`} width={300} height={250} />
      </a>
    </SwiperSlide>
  ));

  return (
    <Section>
      <SwiperWrapper>
        <Swiper
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
