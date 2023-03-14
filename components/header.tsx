import Image from 'next/image';
import styled from 'styled-components';
import { imageLoader } from '../loader';

const HeaderWrapper = styled.header`
  width: 90%;
  margin: 0 auto;
  pointer-events: none;
  user-select: none;

  @media (min-width: 768px) {
    padding: 116px 0 0 0;
  }

  @media (min-width: 1200px) {
    padding: 190px 0 26px 0;
  }
`;

const HeroPcWrapper = styled.div`
  display: none;
  width: auto;
  height: auto;

  @media (min-width: 970px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeroTabletWrapper = styled.div`
  display: none;
  width: auto;
  height: auto;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 970px) {
    display: none;
  }
`;

const HeroMobWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeroPcWrapper>
        <Image
          src='/images/hero-pc.svg'
          alt='Hero Image desktop'
          width={970}
          height={400}
          priority
          loader={imageLoader}
        />
      </HeroPcWrapper>
      <HeroTabletWrapper>
        <Image
          src='/images/hero-pc.svg'
          alt='Hero Image desktop'
          width={723}
          height={299}
          priority
          loader={imageLoader}
        />
      </HeroTabletWrapper>
      <HeroMobWrapper>
        <Image
          src='/images/hero-mob.svg'
          alt='Hero Image desktop'
          priority
          width={320}
          height={329}
          loader={imageLoader}
        />
      </HeroMobWrapper>
    </HeaderWrapper>
  );
}
