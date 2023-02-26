import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from 'constants/nav-links';

const Nav = styled.nav`
  display: none;
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 76px;
  background: #8c6565;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;

  @media (min-width: 768px) {
    gap: 16px; /* Safari 12+ */
    grid-gap: 16px; /* Safari 10-11 */
  }

  @media (min-width: 1200px) {
    gap: 65px; /* Safari 12+ */
    grid-gap: 65px; /* Safari 10-11 */
  }
`;

const Li = styled.li`
  list-style: none;
  svg {
    width: 104px;
    height: 26px;
  }

  :hover svg {
    filter: drop-shadow(3px 3px 2px rgb(0 0 0 / 0.7));
    transition: 0.5s ease-in-out;
    path {
      fill: #ffffff;
      transition: 0.3s ease-in-out;
    }
  }

  @media (min-width: 1040px) {
    svg {
      width: 160px;
      height: 40px;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 8px; /* Safari 12+ */
  grid-gap: 8px; /* Safari 10-11 */
`;

export default function BottomNav() {
  return (
    <Nav>
      <LogoWrapper>
        <a
          href='https://www.mnews.tw/'
          target='_blank'
          rel='noreferrer noopenner'
        >
          <Image
            src='/icons/mnews-logo.svg'
            alt='mnews logo'
            width={128}
            height={24}
          />
        </a>
        <Link href='/'>
          <Image
            src='/icons/tachiatemple-logo.svg'
            alt='tachia temple logo'
            width={80}
            height={24}
          />
        </Link>
      </LogoWrapper>
      <ItemsWrapper>
        {navLinks.map((item) => {
          return (
            <Li key={item.name}>
              <Link href={item.href} scroll={false}>
                <item.svgIcon />
              </Link>
            </Li>
          );
        })}
      </ItemsWrapper>
      <ItemsWrapper>share icons</ItemsWrapper>
    </Nav>
  );
}
