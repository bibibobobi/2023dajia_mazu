import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from 'constants/nav-links';

const Nav = styled.nav`
  display: flex;
  position: fixed;
  left: 0%;
  bottom: 0%;
  height: 44px;
  background: #d0a84f;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Li = styled.li`
  list-style: none;

  p {
    font-family: PingFang TC;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #98413a;
    :hover {
      color: #ffffffe3;
      transition: 0.3s ease-in-out;
    }
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <ItemsWrapper>
        {navLinks.map((item) => {
          return (
            <Li key={item.name}>
              <Link href={item.href} scroll={false}>
                <p>{item.name}</p>
              </Link>
            </Li>
          );
        })}
      </ItemsWrapper>
    </Nav>
  );
}
