import styled from 'styled-components';
import Image from 'next/image';
import dayjs from 'dayjs';
import Title from '../components/title';
import { RelatedNews } from '../components/icons/li-news';

type HeroImage = {
  mobile: string;
};

type RelatedPost = {
  title: string;
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
  /* background: linear-gradient(
    120deg,
    rgba(148, 187, 233, 0.1) 100%,
    rgba(250, 216, 129, 0.1) 0%
  );
  backdrop-filter: blur(3px); */
  transition: all 0.3s ease-in-out;

  a {
    display: flex;
    @media (min-width: 768px) {
      flex-direction: column;
    }
  }

  :hover {
    background: linear-gradient(
      120deg,
      rgba(250, 216, 129, 0.3) 0%,
      rgba(148, 187, 233, 0.3) 100%
    );
    backdrop-filter: blur(3px);
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
    background: linear-gradient(
      120deg,
      rgba(250, 216, 129, 0.3) 0%,
      rgba(148, 187, 233, 0.3) 100%
    );
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
    <Section id='news' ref={innerRef}>
      <Title svgIcon={RelatedNews} />
      <NewsCardWrapper>
        {relatedPost.slice(0, 6).map((post, index) => (
          <NewsCard key={index}>
            <a
              href={post.url}
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <ImageWrapper>
                <Image
                  src={`${post.heroImage.mobile}`}
                  alt={`${post.title}`}
                  width={216}
                  height={144}
                />
              </ImageWrapper>
              <ContentWrapper>
                <PostTitle>{post.title}</PostTitle>
                <Date>{dayjs(post.updatedAt).format('YYYY/MM/DD HH:mm')}</Date>
              </ContentWrapper>
            </a>
          </NewsCard>
        ))}
      </NewsCardWrapper>
      <ButtonWrapper>
        <Button>
          <a
            href='https://www.mnews.tw/'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            ?????????
          </a>
        </Button>
      </ButtonWrapper>
    </Section>
  );
}
