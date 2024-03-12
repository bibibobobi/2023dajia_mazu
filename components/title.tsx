import Image from "next/image";
import styled from "styled-components";
import blueLion from "../public/images/blue-lion.svg";
import redLion from "../public/images/red-lion.svg";

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
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
  height: 1px;
  display: none;
  background-color: #e0c357;
  @media (min-width: 768px) {
    display: block;
    width: calc((100% - 400px) / 2);
  }

  @media (min-width: 1200px) {
    height: 2px;
  }
`;

const P = styled.p`
  font-family: var(--notoSerifTC-font);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: ${({ color }) => color || "#F4D9CA"};

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

type TitleProps = {
  title: string;
  color?: string;
};

export default function Title(props: TitleProps) {
  return (
    <TitleWrapper>
      <Line />
      <Image src={redLion} alt="red dot" className="dot-left" />
      <P color={props.color}>{props.title}</P>
      <Image src={blueLion} alt="red dot" className="dot-right" />
      <Line />
    </TitleWrapper>
  );
}
