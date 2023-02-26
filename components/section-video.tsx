import styled from 'styled-components';
import Title from '../components/title';
import { EventVideo } from '../components/icons/li-video';

const Section = styled.section`
  width: 90%;
  height: 50vh;
  margin: 0 auto;
`;

export default function SectionVideo() {
  return (
    <Section>
      <Title title='活動影音' svgIcon={EventVideo} />
    </Section>
  );
}
