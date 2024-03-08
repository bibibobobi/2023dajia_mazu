import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from 'constants/nav-links';
import ShareIcons from '../components/share-icons';
import mnewsLogo from '../public/icons/mnews-logo.svg';
import tachiatempleLogo from '../public/icons/tachiatemple-logo.svg';

type LiProps = {
  active?: boolean;
};

type NavigationProps = {
  activeElement: string;
};

const Nav = styled.nav`
  display: none;
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 76px;
  background: #000000c5;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  z-index: 99;

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

const Li = styled.li<LiProps>`
  list-style: none;
  svg {
    width: 104px;
    height: 26px;
    filter: ${(prop) =>
      prop.active ? 'drop-shadow(3px 3px 2px rgb(0 0 0 / 0.7))' : 'none'};
    transition: 0.5s ease-in-out;
    path {
      fill: ${(prop) => (prop.active ? '#ffffff' : '')};
      transition: 0.3s ease-in-out;
    }
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

export default function Navigation({ activeElement }: NavigationProps) {
  return (
    <Nav>
      <LogoWrapper>
        <a
          href='https://mnews.tw/?utm_source=project&utm_medium=2024mazu'
          target='_blank'
          rel='noreferrer noopenner'
        >
          <Image
            src={mnewsLogo}
            alt='mnews logo'
            width={128}
            height={24}
            priority
          />
        </a>
        <div>
          <Image
            src={tachiatempleLogo}
            alt='tachia temple logo'
            width={80}
            height={24}
          />
        </div>
      </LogoWrapper>
      <ItemsWrapper>
        {navLinks.map((item) => {
          const isActive =
            activeElement === item.name && activeElement !== undefined;
          return (
            <Li key={item.name} active={isActive}>
              <Link href={item.href} scroll={false}>
                <item.svgIcon />
              </Link>
            </Li>
          );
        })}
      </ItemsWrapper>
      <ItemsWrapper>
        <ShareIcons />
      </ItemsWrapper>
    </Nav>
  );
}
