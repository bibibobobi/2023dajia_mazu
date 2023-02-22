import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 76px;
  background: #8c6565;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 50px; /* Safari 12+ */
  grid-gap: 50px; /* Safari 10-11 */
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
              src='/images/event-video.svg'
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
              src='/images/introduction.svg'
              alt='慶典介紹'
              width={160}
              height={40}
            />
          </Link>
        </Li>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <Image
              src='/images/time.svg'
              alt='遶境時程'
              width={160}
              height={40}
            />
          </Link>
        </Li>
        <Li>
          <Link href='/#hashid' scroll={false}>
            <Image
              src='/images/related-news.svg'
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
