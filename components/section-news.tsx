import styled from 'styled-components';
import Title from '../components/title';
import { RelatedNews } from '../components/icons/li-news';

const Section = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
  }
`;

interface SectionProps {
  innerRef: any;
}

export default function SectionNews({ innerRef }: SectionProps): JSX.Element {
  return (
    <Section id='news' ref={innerRef}>
      <Title svgIcon={RelatedNews} />
    </Section>
  );
}
