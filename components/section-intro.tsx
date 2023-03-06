import Image from 'next/image';
import styled from 'styled-components';
import Title from '../components/title';
import { EventIntro } from '../components/icons/li-intro';

const Section = styled.section`
  width: 90%;

  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
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
  width: 360px;
  height: 413px;
  margin-bottom: 36px;
  margin-top: 20px;

  @media (min-width: 768px) {
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
            src='/images/pilgrimage.svg'
            alt={item?.Name}
            width={360}
            height={413}
          />
        </ImageWrapper>
        <Desc>
          <p>{content}</p>
        </Desc>
      </ContentWrapper>
    </Section>
  );
}
