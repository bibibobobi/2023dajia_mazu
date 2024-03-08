import Image from "next/image";
import styled from "styled-components";
import blueLion from "../public/images/blue-lion.svg";
import redLion from "../public/images/red-lion.svg";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;

  @media (min-width: 768px) {
    height: 108px;
  }

  .dot-left {
    margin-right: 11px;
    height: 77px;
    width: 52px;

    @media (min-width: 768px) {
      margin-right: 20px;
    }
    @media (min-width: 1200px) {
      margin-right: 28px;
      height: 120px;
      width: 82px;
    }
  }

  .dot-right {
    margin-left: 11px;
    height: 14.4px;
    width: 14.4px;
    height: 77px;
    width: 52px;

    @media (min-width: 768px) {
      margin-left: 20px;
    }
    @media (min-width: 1200px) {
      margin-left: 28px;
      height: 120px;
      width: 82px;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  display: none;
  background-color: #e0c357;
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
      <Image src={redLion} alt="red dot" className="dot-left" />
      <SvgWrapper>
        <props.svgIcon />
      </SvgWrapper>
      <Image src={blueLion} alt="red dot" className="dot-right" />
      <Line />
    </TitleWrapper>
  );
}
