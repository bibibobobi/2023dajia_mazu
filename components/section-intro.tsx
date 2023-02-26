import styled from 'styled-components';
import Title from '../components/title';
import { EventIntro } from '../components/icons/li-intro';
import { EventTime } from '../components/icons/li-time';
import { RelatedNews } from '../components/icons/li-news';

const Section = styled.section`
  width: 90%;
  height: 50vh;
  margin: 0 auto;
`;

export default function SectionIntro() {
  return (
    <Section>
      <Title title='慶典介紹' svgIcon={EventIntro} />
    </Section>
  );
}
