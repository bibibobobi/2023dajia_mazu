import Image from 'next/image';
import styled from 'styled-components';
import mnewsLogo from '../public/icons/mnews-logo.svg';
import iconX from '../public/icons/x.svg';
import tachiatempleLogo from '../public/icons/tachiatemple-logo.svg';

const Section = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .mnews {
    width: 128px;
    height: 24px;
    @media (min-width: 768px) {
      width: 180px;
      height: 36px;
    }
  }

  .x {
    margin: 0 36px;
    width: 13px;
    height: 12px;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  .temple {
    width: 80px;
    height: 24px;

    @media (min-width: 768px) {
      width: 120px;
      height: 36px;
    }
  }
`;

export default function MainLogos() {
  return (
    <Section>
      <LogosWrapper>
        <div className='mnews'>
          <Image
            src={mnewsLogo}
            alt='mnews logo'
            width={180}
            height={36}
            priority
            style={{ height: '100%', width: '100%' }}
          />
        </div>
        <div className='x'>
          <Image
            src={iconX}
            alt='mnews logo'
            width={16}
            height={16}
            priority
            style={{ height: '100%', width: '100%' }}
          />
        </div>
        <div className='temple'>
          <Image
            src={tachiatempleLogo}
            alt='tachia temple logo'
            width={120}
            height={36}
            priority
            style={{ height: '100%', width: '100%' }}
          />
        </div>
      </LogosWrapper>
    </Section>
  );
}
