import Image from 'next/image';
import styled from 'styled-components';

const HeroPcWrapper = styled.div`
  display: none;
  /* background-color: #00ffff78; */
  position: 'relative';

  @media (min-width: 768px) {
    display: flex;
    position: 'relative';
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 70vh;
  }

  @media (min-width: 970px) {
    width: 90%;
    height: 80vh;
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
    <>
      <HeroPcWrapper>
        <Image
          src='/images/hero-pc.svg'
          alt='Hero Image desktop'
          fill
          style={{ objectFit: 'contain' }}
        />
      </HeroPcWrapper>
      <HeroMobWrapper>
        <Image
          src='/images/hero-mob.svg'
          alt='Hero Image desktop'
          width={320}
          height={329}
        />
      </HeroMobWrapper>
    </>
  );
}
