import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "../components/title";

// Import Youtube components
import YouTube from "react-youtube";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules for Swiper
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

const Section = styled.section`
  width: 100%;

  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const TitleWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1200px) {
    width: 100%;
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
    color: #e0c257bb;
    :hover {
      color: #E0C357;
    }
    @media (min-width: 1200px) {
      display: block;
    }
  }

  .swiper-pagination-bullet {
    background: #fff;
    border: 1px solid #000000;
    width: 12px;
    height: 12px;
  }
  .swiper-pagination-bullet-active {
    background: #e0c357;
    border: 1px solid #000000;
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
    height: 86%;
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
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  });

  // Extend the autoplay delay to 15 secs on touch devices
  useEffect(() => {
    const touchDevice = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;
    if (touchDevice) {
      setSwiperAutoplay({ ...swiperAutoplay, delay: 15000 });
    }
  }, []);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);

    // Pause all videos when the slide changes
    const players = document.getElementsByTagName("iframe");
    for (let i = 0; i < players.length; i++) {
      const player = players[i].contentWindow;
      if (player) {
        // Check if player is not null
        player.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    }
  };

  const handlePlayerReady = (event: any) => {
    // Save the YouTube player reference to the `playerRef` variable
    playerRef.current = event.target;

    // Get the current origin of the application
    const origin = window.location.origin;

    // Set the origin value for the YouTube player
    playerRef.current.getIframe().setAttribute("origin", origin);
  };

  // Disable Swiper autoplay by setting delay to 600000 if any video is playing
  const handleVideoStateChange = (event: any) => {
    if (event.data === 1) {
      // Playing
      setIsVideoPlaying(true);
      setSwiperAutoplay({
        ...swiperAutoplay,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
        delay: 600000, // Set delay to 10 mins if video is playing
      });
    } else {
      setIsVideoPlaying(false);
      setSwiperAutoplay({
        ...swiperAutoplay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        delay: 5000, // Set delay to 5 secs if video is not playing or paused
      });
    }
    if (playerRef.current) {
      // Check if playerRef.current is not null
      playerRef.current.getPlayerState();
    }
  };

  return (
    <Section id="video" ref={innerRef}>
      <TitleWrapper>
        <Title title="活動影音" color="#F4D9CA" />
      </TitleWrapper>
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
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          {playlist.map((videoId, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <YoutubeContainer>
                <YouTube
                  videoId={videoId}
                  opts={{ width: "100%", height: "100%" }}
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
