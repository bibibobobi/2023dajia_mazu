import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { EventVideo } from './icons/li-video';
import { EventIntro } from './icons/li-intro';
import { EventTime } from './icons/li-time';
import { RelatedNews } from './icons/li-news';

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
    gap: 20px; /* Safari 12+ */
    grid-gap: 20px; /* Safari 10-11 */
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
    path {
      fill: #ffffff;
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

export default function Navigation() {
  return (
    <Nav>
      <LogoWrapper>
        <Link href='/'>
          <Image
            src='/icons/mnews-logo.svg'
            alt='mnews logo'
            width={128}
            height={24}
          />
        </Link>
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
        <Li>
          <Link href='/#hashid' scroll={false}>
            <EventVideo />
          </Link>
        </Li>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <EventIntro />
          </Link>
        </Li>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <EventTime />
          </Link>
        </Li>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <RelatedNews />
          </Link>
        </Li>
      </ItemsWrapper>
      <ItemsWrapper>share icons</ItemsWrapper>
    </Nav>
  );
}
