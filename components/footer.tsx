import Image from 'next/image';
import styled from 'styled-components';

type Logo = {
  image: string;
  url: string;
};

type LogoProps = {
  logoList: Logo[];
};

const Section = styled.div`
  background: #fff;
  padding-top: 24px;
  padding-bottom: 72px;

  @media (min-width: 768px) {
    padding: 30px 0px;
  }
`;

const LogosWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .image {
    height: 40px;
    width: auto;
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    .image {
      :not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;

const TextWrapper = styled.div`
  color: #004dbc;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    color: #003366;
    flex-direction: row;
  }
`;

export default function Footer({ logoList }: LogoProps) {
  return (
    <Section>
      <LogosWrapper>
        {logoList.slice(0, 5)?.map((logo, index) => (
          <img
            className='image'
            key={index}
            src={logo.image}
            alt={`sponsor logo ${index}`}
          />
        ))}
      </LogosWrapper>
      <LogosWrapper>
        {logoList.slice(5, 10)?.map((logo, index) => (
          <img
            className='image'
            key={index}
            src={logo.image}
            alt={`sponsor logo ${index}`}
          />
        ))}
      </LogosWrapper>
      <LogosWrapper>
        {logoList.slice(10, 12)?.map((logo, index) => (
          <img
            className='image'
            key={index}
            src={logo.image}
            alt={`sponsor logo ${index}`}
          />
        ))}
      </LogosWrapper>
      <TextWrapper>
        <p> ©Mirror TV BROCASTING LTD.&ensp;</p>
        <p>All Rights Reserved.&ensp;</p>
        <p>鏡電視股份有限公司 版權所有&ensp;</p>
      </TextWrapper>
    </Section>
  );
}
