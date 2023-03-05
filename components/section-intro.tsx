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
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 360px;
  height: 413px;
  margin-right: 36px;
`;

const Desc = styled.div`
  width: 564px;

  p {
    color: #ffffff;
    font-family: var(--notosansTC-font);
    font-weight: 400;
    font-size: 20px;
    line-height: 180%;
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
  const item = intro[0];
  const content = item['Link / Content'];
  return (
    <Section id='intro' ref={innerRef}>
      <Title svgIcon={EventIntro} />
      <ContentWrapper>
        <ImageWrapper>
          <Image src={item.Image} alt={item.Name} width={360} height={413} />
        </ImageWrapper>
        <Desc>
          <p>{content}</p>
        </Desc>
      </ContentWrapper>
    </Section>
  );
}
