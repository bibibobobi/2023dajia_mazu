import styled from 'styled-components';
import Title from '../components/title';
import { EventIntro } from '../components/icons/li-intro';

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

export default function SectionIntro({ innerRef }: SectionProps): JSX.Element {
  return (
    <Section id='intro' ref={innerRef}>
      <Title svgIcon={EventIntro} />
    </Section>
  );
}
