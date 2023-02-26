import Image from 'next/image';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 90%;
  margin: 0 auto;
  position: 'relative';
  /* background-color: #00ffff78; */

  @media (min-width: 768px) {
    padding: 86px 0 10px 0;
  }

  @media (min-width: 1200px) {
    padding: 160px 0 74px 0;
  }
`;

const HeroPcWrapper = styled.div`
  display: none;
  width: 100%;

  @media (min-width: 970px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeroTabletWrapper = styled.div`
  display: none;
  width: 100%;

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
          // fill
          // style={{ objectFit: 'contain' }}
          width={970}
          height={400}
        />
      </HeroPcWrapper>
      <HeroTabletWrapper>
        <Image
          src='/images/hero-pc.svg'
          alt='Hero Image desktop'
          // fill
          // style={{ objectFit: 'contain' }}
          width={723}
          height={299}
        />
      </HeroTabletWrapper>
      <HeroMobWrapper>
        <Image
          src='/images/hero-mob.svg'
          alt='Hero Image desktop'
          width={320}
          height={329}
        />
      </HeroMobWrapper>
    </HeaderWrapper>
  );
}
