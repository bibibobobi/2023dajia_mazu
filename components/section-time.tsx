import styled from 'styled-components';
import Title from './title';
import { EventTime } from './icons/li-time';

const Section = styled.section`
  width: 100%;

  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 86px;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const TitleWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  font-family: var(--notosansTC-font);
  line-height: 150%;
  font-size: 14px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 20px;
  }

  .date {
    @media (min-width: 1200px) {
      padding-right: 50px;
    }
  }

  .stay,
  .place {
    font-weight: 900;
  }

  .stay {
    padding-right: 20px;
    @media (min-width: 1200px) {
      padding-right: 60px;
    }
  }

  .row1,
  .row3,
  .row5,
  .row7,
  .row9 {
    border-radius: 5px 20px 20px 5px;
  }

  .row2,
  .row4,
  .row6,
  .row8 {
    border-radius: 5px 20px 20px 5px;
    margin-left: calc(100% - 301px);
    @media (min-width: 768px) {
      margin-left: calc(100% - 723px);
    }
  }

  .row1,
  .row4,
  .row7 {
    background: #d0a84f;
    color: #622e2a;
  }

  .row2,
  .row5,
  .row8 {
    background: #b77435;
    color: #000000;
  }

  .row3,
  .row6,
  .row9 {
    background: #000000;
    color: #e2862e;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  width: 301px;
  height: 70px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
    width: 723px;
    height: 72px;
  }
`;

interface SectionProps {
  innerRef: any;
}

export default function SectionTime({ innerRef }: SectionProps): JSX.Element {
  return (
    <Section id='time' ref={innerRef}>
      <TitleWrapper>
        <Title svgIcon={EventTime} />
      </TitleWrapper>
      <Container>
        <Row className='row1'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
        <Row className='row2'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
        <Row className='row3'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
        <Row className='row4'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
        <Row className='row5'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
        <Row className='row6'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
        <Row className='row7'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
        <Row className='row8'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
        <Row className='row9'>
          <div>
            <span className='date'>
              國曆四月廿二日&emsp;農曆三月初三日 （六）
            </span>
          </div>
          <div>
            <span className='stay'>駐駕</span>
            <span className='place'>彰化市南瑤宮</span>
          </div>
        </Row>
      </Container>
    </Section>
  );
}
