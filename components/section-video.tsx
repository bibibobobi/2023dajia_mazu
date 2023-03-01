import styled from 'styled-components';
import Title from '../components/title';
import { EventVideo } from '../components/icons/li-video';

const Section = styled.section`
  width: 90%;
  height: 50vh;
  margin: 0 auto;
`;

export default function SectionVideo({ innerRef }) {
  return (
    <Section id='video' ref={innerRef}>
      <Title svgIcon={EventVideo} />
    </Section>
  );
}
