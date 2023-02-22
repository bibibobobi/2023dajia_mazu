import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

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

  ${({ theme }) => theme.breakpoint.md} {
    display: flex;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoint.md} {
    gap: 20px; /* Safari 12+ */
    grid-gap: 20px; /* Safari 10-11 */
  }

  ${({ theme }) => theme.breakpoint.lg} {
    gap: 40px; /* Safari 12+ */
    grid-gap: 40px; /* Safari 10-11 */
  }

  ${({ theme }) => theme.breakpoint.xl} {
    gap: 65px; /* Safari 12+ */
    grid-gap: 65px; /* Safari 10-11 */
  }
`;

const Li = styled.li`
  list-style: none;
  .nav-link {
    &:hover path {
      fill: #e14b00;
    }
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <ItemsWrapper>Logos</ItemsWrapper>
      <ItemsWrapper>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <Image
              src='/images/li-video.svg'
              alt='活動影音'
              width={160}
              height={40}
              className='nav-link'
            />
          </Link>
        </Li>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <Image
              src='/images/li-introduction.svg'
              alt='慶典介紹'
              width={160}
              height={40}
            />
          </Link>
        </Li>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <Image
              src='/images/li-time.svg'
              alt='遶境時程'
              width={160}
              height={40}
            />
          </Link>
        </Li>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <Image
              src='/images/li-news.svg'
              alt='相關新聞'
              width={160}
              height={40}
            />
          </Link>
        </Li>
      </ItemsWrapper>
      <ItemsWrapper>share icons</ItemsWrapper>
    </Nav>
  );
}
