import styled from 'styled-components';
import Image from 'next/image';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00ffff86;
  height: 108px;
  @media (min-width: 768px) {
    margin-top: 76px;
  }
`;

export default function Title(props) {
  return (
    <TitleWrapper>
      <props.svgIcon />
    </TitleWrapper>
  );
}
