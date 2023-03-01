import styled from 'styled-components';
import Title from '../components/title';
import { EventIntro } from '../components/icons/li-intro';

const Section = styled.section`
  width: 90%;
  height: 50vh;
  margin: 0 auto;
`;

export default function SectionIntro({ innerRef }) {
  return (
    <Section id='intro' ref={innerRef}>
      <Title svgIcon={EventIntro} />
    </Section>
  );
}
