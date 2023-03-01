import styled from 'styled-components';
import Image from 'next/image';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;

  @media (min-width: 768px) {
    padding-top: 86px;
    height: 108px;
  }

  .dot-left {
    margin-right: 5.6px;
    height: 14.4px;
    width: 14.4px;
    @media (min-width: 768px) {
      margin-right: 20px;
      height: 40px;
      width: 40px;
    }
    @media (min-width: 1200px) {
      margin-right: 28px;
    }
  }

  .dot-right {
    margin-left: 5.6px;
    height: 14.4px;
    width: 14.4px;

    @media (min-width: 768px) {
      margin-left: 20px;
      height: 40px;
      width: 40px;
    }
    @media (min-width: 1200px) {
      margin-left: 28px;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  display: none;
  background-color: #d8b384;
  @media (min-width: 768px) {
    display: block;
  }
`;

const SvgWrapper = styled.div`
  svg {
    width: 104px;
    height: 26px;
  }

  @media (min-width: 768px) {
    svg {
      width: 160px;
      height: 40px;
    }
  }
`;

type TitleProps = {
  svgIcon: any;
};

export default function Title(props: TitleProps) {
  return (
    <TitleWrapper>
      <Line />
      <Image
        src='/images/reddot.svg'
        alt='red dot'
        width={40}
        height={40}
        className='dot-left'
      />
      <SvgWrapper>
        <props.svgIcon />
      </SvgWrapper>
      <Image
        src='/images/reddot.svg'
        alt='red dot'
        width={40}
        height={40}
        className='dot-right'
      />
      <Line />
    </TitleWrapper>
  );
}
