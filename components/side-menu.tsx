import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from 'constants/nav-links';
import { useState } from 'react';
import { MenuIcon } from './icons/menu-icon';

const SideMenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: calc(100vh - 44px);
  background: rgba(20, 4, 4, 0.8);
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  visibility: ${(prop) => (prop.show ? 'visible' : 'hidden')};
  transform: ${(prop) => (prop.show ? 'translateY(0px)' : 'translateX(375px)')};
  transition: 0.2s cubic-bezier(0.8, 0, 0.2, 1);

  @media (min-width: 375px) {
    transform: ${(prop) =>
      prop.show ? 'translateY(0px)' : 'translateX(767px)'};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 88px;
`;

const Li = styled.li`
  list-style: none;
  :not(:last-child) {
    padding-bottom: 25px;
  }

  svg {
    width: 121px;
    height: 30px;
  }

  :hover svg {
    filter: drop-shadow(3px 3px 2px rgb(0 0 0 / 0.7));
    transition: 0.5s ease-in-out;
    path {
      fill: #ffffff;
      transition: 0.3s ease-in-out;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Safari 12+ */
  grid-gap: 8px; /* Safari 10-11 */
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 8px; /* Safari 12+ */
  grid-gap: 8px; /* Safari 10-11 */
  color: #fff;
  padding-bottom: 84px;
`;

const ToggleButton = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: fixed;
  top: 12px;
  right: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  svg {
    max-width: 28px;
    transition-duration: 0.1s;
    transform: ${(prop) => (prop.show ? 'rotate(90deg)' : 'rotate(0deg)')};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function SideMenu() {
  const [show, setShow] = useState(false);
  return (
    <>
      <ToggleButton
        onClick={() => {
          setShow(!show);
        }}
        show={show}
      >
        <MenuIcon />
      </ToggleButton>
      <SideMenuWrapper show={show}>
        <ItemsWrapper>
          {navLinks.map((item) => {
            return (
              <Li key={item.name}>
                <Link
                  href={item.href}
                  scroll={false}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <item.svgIcon />
                </Link>
              </Li>
            );
          })}
        </ItemsWrapper>
        <LogoWrapper>
          <a
            href='https://www.mnews.tw/'
            target='_blank'
            rel='noreferrer noopenner'
          >
            <Image
              src='/icons/mnews-logo.svg'
              alt='mnews logo'
              width={80}
              height={15}
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
        <IconsWrapper>
          <Link href='/'>
            <Image
              src='/icons/fb.svg'
              alt='facebook logo'
              width={28}
              height={28}
            />
          </Link>
          <Link href='/'>
            <Image
              src='/icons/line.svg'
              alt='line logo'
              width={28}
              height={28}
            />
          </Link>
          <Link href='/'>
            <Image
              src='/icons/link.svg'
              alt='copy link'
              width={28}
              height={28}
            />
          </Link>
        </IconsWrapper>
      </SideMenuWrapper>
    </>
  );
}