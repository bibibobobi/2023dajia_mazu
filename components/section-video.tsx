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
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
  }

  @media (min-width: 1200px) {
    width: 90%;
  }
`;

interface SectionProps {
  innerRef: RefObject<HTMLDivElement>;
}

const SwiperWrapper = styled.div`
  .mySwiper {
    width: 100%;
    height: 500px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* background: #ffffff99; */

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    color: #ffffff86;
    @media (min-width: 1200px) {
      display: block;
    }
  }

  .swiper-pagination-bullet {
    background: #0d0505;
    border: 1.5px solid #000000;
    width: 12px;
    height: 12px;
  }
  .swiper-pagination-bullet-active {
    background: #ddcf21;
    border: 1.5px solid #000000;
    width: 12px;
    height: 12px;
  }
`;

const YoutubeContainer = styled.div`
  background-color: #00ffff86;
  height: 80%;
  width: 100%;

  @media (min-width: 1200px) {
    width: 90%;
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
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
        >
          <SwiperSlide className='swiper-slide'>
            <YoutubeContainer>Hi Youtube</YoutubeContainer>
          </SwiperSlide>
          {/* <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 8</SwiperSlide> */}
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
}
