import styled from 'styled-components';
import Title from '../components/title';
import { RelatedNews } from '../components/icons/li-news';

const Section = styled.section`
  width: 90%;
  height: 50vh;
  margin: 0 auto;
`;

export default function SectionNews() {
  return (
    <Section>
      <Title title='慶典介紹' svgIcon={RelatedNews} />
    </Section>
  );
}
