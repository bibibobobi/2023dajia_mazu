import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import { EventVideo } from '../components/icons/li-video';

// Import Youtube components
import YouTube from 'react-youtube';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules for Swiper
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

const Section = styled.section`
  width: 100%;

  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
  }

  @media (min-width: 1200px) {
    width: 90%;
  }
`;

const SwiperWrapper = styled.div`
  .mySwiper {
    width: 100%;
    height: 300px;

    @media (min-width: 768px) {
      height: 550px;
    }
    @media (min-width: 1200px) {
      height: 580px;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    color: #ffffff86;
    :hover {
      color: #ffffffeb;
    }
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
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
    border: 0;
    @media (min-width: 768px) {
      height: 90%;
    }
    @media (min-width: 1200px) {
      height: 90%;
      width: 80%;
      left: 10%;
    }
  }
`;

interface SectionProps {
  innerRef: any;
  playlist: string[];
}

export default function SectionVideo({
  innerRef,
  playlist,
}: SectionProps): JSX.Element {
  const playerRef = useRef<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [swiperAutoplay, setSwiperAutoplay] = useState({
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  });

  useEffect(() => {
    const touchDevice = window.matchMedia(
      '(hover: none) and (pointer: coarse)'
    ).matches;
    if (touchDevice) {
      setSwiperAutoplay({ ...swiperAutoplay, delay: 300000 });
    }
  }, []);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);

    // Pause the video when the slide changes
    // if (playerRef.current && playerRef.current.getInternalPlayer) {
    //   const player = playerRef.current.getInternalPlayer();
    //   player.pauseVideo();
    // }

    // Pause all videos when the slide changes
    const players = document.getElementsByTagName('iframe');
    for (let i = 0; i < players.length; i++) {
      const player = players[i].contentWindow;
      player?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    }
  };

  const handlePlayerReady = (event: any) => {
    // Save the YouTube player reference to the `playerRef` variable
    playerRef.current = event.target;
  };

  const handleVideoStateChange = (event: any) => {
    if (event.data === 1) {
      // Playing
      setIsVideoPlaying(true);
      setSwiperAutoplay({
        ...swiperAutoplay,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
      });
    } else {
      setIsVideoPlaying(false);
      setSwiperAutoplay({
        ...swiperAutoplay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      });
    }
  };

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
          autoplay={swiperAutoplay}
          mousewheel={true}
          keyboard={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
          onSlideChange={handleSlideChange}
        >
          {playlist.map((videoId, index) => (
            <SwiperSlide key={index} className='swiper-slide'>
              <YoutubeContainer>
                <YouTube
                  videoId={videoId}
                  opts={{ width: '100%', height: '100%' }}
                  onStateChange={handleVideoStateChange}
                  onReady={handlePlayerReady}
                />
              </YoutubeContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
}
