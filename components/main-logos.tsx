import Image from 'next/image';
import styled from 'styled-components';
import { imageLoader } from '../loader';

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
            src='/icons/mnews-logo.svg'
            alt='mnews logo'
            width={180}
            height={36}
            priority
            style={{ height: '100%', width: '100%' }}
            loader={imageLoader}
          />
        </div>
        <div className='x'>
          <Image
            src='/icons/x.svg'
            alt='mnews logo'
            width={16}
            height={16}
            priority
            style={{ height: '100%', width: '100%' }}
            loader={imageLoader}
          />
        </div>
        <div className='temple'>
          <Image
            src='/icons/tachiatemple-logo.svg'
            alt='tachia temple logo'
            width={120}
            height={36}
            priority
            style={{ height: '100%', width: '100%' }}
            loader={imageLoader}
          />
        </div>
      </LogosWrapper>
    </Section>
  );
}
