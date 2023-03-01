import styled from 'styled-components';
import Title from '../components/title';
import { RelatedNews } from '../components/icons/li-news';

const Section = styled.section`
  width: 90%;
  height: 50vh;
  margin: 0 auto;
`;

export default function SectionNews({ innerRef }) {
  return (
    <Section id='news' ref={innerRef}>
      <Title svgIcon={RelatedNews} />
    </Section>
  );
}
