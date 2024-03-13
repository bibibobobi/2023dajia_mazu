import Image from "next/image";
import styled from "styled-components";
import Title from "../components/title";
import pilgrimage from "../public/images/pilgrimage.svg";

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
  }
`;

const ImageWrapper = styled.div`
  width: 320px;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    width: 640px;
    margin-bottom: 48px;
  }

  @media (min-width: 1200px) {
    width: 920;
    margin-right: 36px;
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
  "Link / Content": string;
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
  const content = item?.["Link / Content"];
  return (
    <Section id="intro" ref={innerRef}>
      <Title title="慶典介紹" color="#D8B384" />
      <ContentWrapper>
        <ImageWrapper>
          <Image
            src={pilgrimage}
            alt="pilgrimage"
            priority
            width={360}
            height={413}
            style={{ height: "100%", width: "100%" }}
          />
        </ImageWrapper>
        <Desc>
          <p>{content}</p>
        </Desc>
      </ContentWrapper>
    </Section>
  );
}
