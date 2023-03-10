import Image from 'next/image';
import styled from 'styled-components';
import Title from '../components/title';
import { EventIntro } from '../components/icons/li-intro';
import pilgrimage from '../public/images/pilgrimage.svg';

const Section = styled.section`
  padding-top: 40px;
  width: 90%;

  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
    padding-bottom: 50px;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  width: 288px;
  height: 331px;
  margin-bottom: 36px;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 360px;
    height: 413px;
    margin-bottom: 60px;
    margin-top: 30px;
  }

  @media (min-width: 1200px) {
    margin-right: 36px;
    margin-bottom: 0;
  }
`;

const Desc = styled.div`
  width: 100%;

  p {
    color: #ffffff;
    font-family: var(--notosansTC-font);
    font-weight: 400;
    font-size: 16px;
    line-height: 28.8px;

    @media (min-width: 768px) {
      font-weight: 400;
      font-size: 20px;
      line-height: 36px;
    }
  }
`;

type IntroItem = {
  Name: string;
  Image: string;
  'Link / Content': string;
};

interface SectionProps {
  innerRef: any;
  intro: IntroItem[];
}

export default function SectionIntro({
  innerRef,
  intro,
}: SectionProps): JSX.Element {
  const item = intro?.[0];
  const content = item?.['Link / Content'];
  return (
    <Section id='intro' ref={innerRef}>
      <Title svgIcon={EventIntro} />
      <ContentWrapper>
        <ImageWrapper>
          <Image
            src={pilgrimage}
            alt='pilgrimage'
            priority
            width={360}
            height={413}
            style={{ height: '100%', width: '100%' }}
          />
        </ImageWrapper>
        <Desc>
          <p>{content}</p>
        </Desc>
      </ContentWrapper>
    </Section>
  );
}
