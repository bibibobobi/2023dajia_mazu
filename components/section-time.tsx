import styled from 'styled-components';
import Title from './title';
import { EventTime } from './icons/li-time';

const Section = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
`;

export default function SectionTime() {
  return (
    <Section>
      <Title title='遶境時程' svgIcon={EventTime} />
    </Section>
  );
}
