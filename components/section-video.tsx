import styled from 'styled-components';
import Title from '../components/title';
import { EventVideo } from '../components/icons/li-video';
import { RefObject } from 'react';

const Section = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding-top: 86px;
  }
`;

interface SectionProps {
  innerRef: RefObject<HTMLDivElement>;
}

export default function SectionVideo({ innerRef }: SectionProps): JSX.Element {
  return (
    <Section id='video' ref={innerRef}>
      <Title svgIcon={EventVideo} />
    </Section>
  );
}
