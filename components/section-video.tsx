import styled from 'styled-components';
import Title from '../components/title';
import { EventVideo } from '../components/icons/li-video';
import { RefObject } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

const Section = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
  }
`;

interface SectionProps {
  innerRef: RefObject<HTMLDivElement>;
}

const SwiperWrapper = styled.div`
  .mySwiper {
    width: 100%;
    height: 300px;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function SectionVideo({ innerRef }: SectionProps): JSX.Element {
  return (
    <Section id='video' ref={innerRef}>
      <Title svgIcon={EventVideo} />
      <SwiperWrapper>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
        >
          <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 8</SwiperSlide>
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
}
