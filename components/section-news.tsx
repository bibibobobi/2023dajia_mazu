import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Title from "../components/title";

type HeroImage = {
  urlMobileSized: string;
};

type RelatedPost = {
  name: string;
  updatedAt: string;
  heroImage: HeroImage;
  url: string;
};

interface SectionProps {
  innerRef: any;
  relatedPost: RelatedPost[];
}

const Section = styled.section`
  padding-top: 40px;
  /* padding-bottom: 60px; */
  justify-content: center;
  width: 90%;

  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const NewsCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 688px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;

const NewsCard = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 132px;
  width: 100%;
  transition: all 0.3s ease-in-out;

  a {
    display: flex;
    @media (min-width: 768px) {
      flex-direction: column;
    }
  }

  @media (min-width: 768px) {
    margin-top: 42px;
    flex-direction: column;
    width: 216px;
    height: 250px;
    :not(:nth-child(3n + 3)) {
      margin-right: 20px;
    }
  }

  @media (min-width: 1200px) {
    margin-top: 52px;
    :not(:nth-child(3n + 3)) {
      margin-right: 76px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 132px;
  height: 132px;
  overflow: hidden;
  /* Center Overflow Image */
  display: flex;
  align-items: center; /* vertical */
  justify-content: center; /* horizontal */

  @media (min-width: 768px) {
    width: 216px;
    height: 144px;
    margin-bottom: 12px;
  }
`;

const ContentWrapper = styled.div`
  width: calc(100% - 132px);
  padding-left: 8px;
  @media (min-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const PostTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #f2f2f2;

  :hover {
    text-decoration: underline;
    text-decoration-color: #f2f2f2;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
  }

  height: 88px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    height: 66px;
    margin-bottom: 8px;
    -webkit-line-clamp: 3;
  }
`;
const Date = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #d8b384;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-family: "PingFang TC";
  background-color: transparent;
  border: 1px solid #d0a84f;
  width: 288px;
  height: 44px;
  margin: 30px auto;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 3px;
  background: transparent;
  transition: all 0.3s ease-in-out;
  :hover {
    border: 2px solid #d0a84f;
  }

  color: #d0a84f;
  @media (min-width: 768px) {
    margin: 40px auto;
  }
  @media (min-width: 1200px) {
    margin: 50px auto;
  }
`;

export default function SectionNews({
  innerRef,
  relatedPost,
}: SectionProps): JSX.Element {
  return (
    <Section id="news" ref={innerRef}>
      <Title title="相關新聞" color="#D8B384" />
      <NewsCardWrapper>
        {relatedPost.slice(0, 6).map((post, index) => (
          <NewsCard key={index}>
            <Link
              href={post.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <ImageWrapper>
                <Image
                  src={`${post.heroImage.urlMobileSized}`}
                  alt={`${post.name}`}
                  width={216}
                  height={144}
                />
              </ImageWrapper>
              <ContentWrapper>
                <PostTitle>{post.name}</PostTitle>
                <Date>{dayjs(post.updatedAt).format("YYYY/MM/DD HH:mm")}</Date>
              </ContentWrapper>
            </Link>
          </NewsCard>
        ))}
      </NewsCardWrapper>
      <ButtonWrapper>
        <Button>
          <Link
            href="https://www.mnews.tw/topic/0158ce98-8b44-4045-b2ca-88f4d8380e81?utm_source=project&utm_medium=2024mazu"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            看更多
          </Link>
        </Button>
      </ButtonWrapper>
    </Section>
  );
}
