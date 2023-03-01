import styled from 'styled-components';
import Title from './title';
import { EventTime } from './icons/li-time';
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

export default function SectionTime({ innerRef }: SectionProps): JSX.Element {
  return (
    <Section id='time' ref={innerRef}>
      <Title svgIcon={EventTime} />
    </Section>
  );
}
