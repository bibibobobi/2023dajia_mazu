import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo, FC, useState } from 'react';
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
    border-radius: 0px 20px 20px 0px;
    @media (min-width: 768px) {
      border-radius: 5px 20px 20px 5px;
    }
    @media (min-width: 1200px) {
      border-radius: 10px 30px 30px 10px;
    }
  }

  .row2,
  .row4,
  .row6,
  .row8,
  .row10 {
    border-radius: 20px 0px 0px 20px;
    margin-left: calc(100% - 301px);
    @media (min-width: 768px) {
      margin-left: calc(100% - 723px);
      border-radius: 20px 5px 5px 20px;
    }
    @media (min-width: 1200px) {
      border-radius: 30px 10px 10px 30px;
    }
  }

  .row1,
  .row4,
  .row7,
  .row10 {
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

type SectionProps = {
  innerRef: any;
};

type RowMotionProps = {
  className: string;
  children: React.ReactNode;
};

const RowMotion: FC<RowMotionProps> = ({ className, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const variants = useMemo(
    () => ({
      left: { x: -100, opacity: 0 },
      right: { x: 100, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 0.5, bounce: 0.1 } },
    }),
    []
  );

  const direction = parseInt(className) % 2 === 1 ? 'left' : 'right';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollDown = currentScrollPos > prevScrollPos;
      setPrevScrollPos(currentScrollPos);

      if (inView && scrollDown) {
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, inView, prevScrollPos]);

  useEffect(() => {
    if (!inView) {
      controls.set(direction === 'left' ? variants.left : variants.right);
    }
  }, [controls, inView, direction, variants]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={direction}
      animate={controls}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default function SectionTime({ innerRef }: SectionProps): JSX.Element {
  return (
    <Section id='time' ref={innerRef}>
      <TitleWrapper>
        <Title svgIcon={EventTime} />
      </TitleWrapper>
      <Container>
        <RowMotion className='1'>
          <Row className='row1'>
            <div>
              <span>
                筊定&emsp;國曆四月廿一日 農曆三月初二日 （五）晚間十一時零五分
              </span>
              <span className='place'>&emsp;起駕</span>
            </div>
          </Row>
        </RowMotion>
        <RowMotion className='2'>
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
        </RowMotion>
        <RowMotion className='3'>
          <Row className='row3'>
            <div>
              <span className='date'>
                國曆四月廿三日&emsp;農曆三月初四日（日）
              </span>
            </div>
            <div>
              <span className='stay'>駐駕</span>
              <span className='place'>西螺鎮福興宮</span>
            </div>
          </Row>
        </RowMotion>
        <RowMotion className='4'>
          <Row className='row4'>
            <div>
              <span className='date'>
                國曆四月廿四日&emsp;農曆三月初五日（一）
              </span>
            </div>
            <div>
              <span className='stay'>駐駕</span>
              <span className='place'>新港鄉奉天宮</span>
            </div>
          </Row>
        </RowMotion>
        <RowMotion className='5'>
          <Row className='row5'>
            <div>
              <span className='date'>
                國曆四月廿五日&emsp;農曆三月初六日（二）
              </span>
            </div>
            <div>
              <span className='stay'>上午八時・祝壽大典</span>
            </div>
          </Row>
        </RowMotion>
        <RowMotion className='6'>
          <Row className='row6'>
            <div>
              <span className='date'>
                國曆四月廿六日&emsp;農曆三月初七日（三）
              </span>
            </div>
            <div>
              <span className='stay'>駐駕</span>
              <span className='place'>西螺鎮福興宮</span>
            </div>
          </Row>
        </RowMotion>
        <RowMotion className='7'>
          <Row className='row7'>
            <div>
              <span className='date'>
                國曆四月廿七日&emsp;農曆三月初八日（四）
              </span>
            </div>
            <div>
              <span className='stay'>駐駕</span>
              <span className='place'>北斗鎮奠安宮</span>
            </div>
          </Row>
        </RowMotion>
        <RowMotion className='8'>
          <Row className='row8'>
            <div>
              <span className='date'>
                國曆四月廿八日&emsp;農曆三月初九日（五）
              </span>
            </div>
            <div>
              <span className='stay'>駐駕</span>
              <span className='place'>彰化市天后宮</span>
            </div>
          </Row>
        </RowMotion>
        <RowMotion className='9'>
          <Row className='row9'>
            <div>
              <span className='date'>
                國曆四月廿九日&emsp;農曆三月初十日（六）
              </span>
            </div>
            <div>
              <span className='stay'>駐駕</span>
              <span className='place'>清水區朝興宮</span>
            </div>
          </Row>
        </RowMotion>
        <RowMotion className='10'>
          <Row className='row10'>
            <div>
              <span className='date'>
                國曆四月三十日&emsp;農曆三月十一日（日）
              </span>
            </div>
            <div>
              <span className='stay'>回鑾</span>
              <span className='place'>大甲區鎮瀾宮</span>
            </div>
          </Row>
        </RowMotion>
      </Container>
    </Section>
  );
}
