import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from 'constants/nav-links';

type LiProps = {
  active: boolean;
};

type NavigationProps = {
  activeElement: string;
};

const Nav = styled.nav`
  display: flex;
  position: fixed;
  left: 0%;
  bottom: 0%;
  height: 44px;
  background: #d0a84f;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  width: 100%;
  z-index: 99;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Li = styled.li<LiProps>`
  list-style: none;

  p {
    font-family: PingFang TC;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #98413a;

    color: ${(prop) => (prop.active ? '#ffffffe3' : '')};
    transition: ${(prop) => (prop.active ? '0.3s ease-in-out' : '')};
    :hover {
      color: #ffffffe3;
      transition: 0.3s ease-in-out;
    }
  }
`;

export default function BottomNav({ activeElement }: NavigationProps) {
  return (
    <Nav>
      <ItemsWrapper>
        {navLinks.map((item) => {
          return (
            <Li key={item.name} active={activeElement === item.name}>
              <Link href={item.href} scroll={false}>
                <p>{item.title}</p>
              </Link>
            </Li>
          );
        })}
      </ItemsWrapper>
    </Nav>
  );
}
