import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from 'constants/nav-links';
import { useState, useEffect } from 'react';
import { MenuIcon } from './icons/menu-icon';
import CopyAlert from './copy-alert';
import mnewsLogo from '../public/icons/mnews-logo.svg';
import tachiatempleLogo from '../public/icons/tachiatemple-logo.svg';
import fb from '../public/icons/fb.svg';
import line from '../public/icons/line.svg';
import link from '../public/icons/link.svg';

type SideMenuWrapperProps = {
  show: boolean;
};

type NavigationProps = {
  activeElement: string;
};

type ToggleButtonProps = {
  show: boolean;
};

const SideMenuWrapper = styled.nav<SideMenuWrapperProps>`
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
  z-index: 99;

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

type LiProps = {
  active: boolean;
};

const Li = styled.li<LiProps>`
  list-style: none;
  :not(:last-child) {
    padding-bottom: 25px;
  }

  svg {
    width: 121px;
    height: 30px;
    filter: ${(prop) =>
      prop.active ? 'drop-shadow(3px 3px 2px rgb(0 0 0 / 0.7))' : ''};
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

const ToggleButton = styled.div<ToggleButtonProps>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: fixed;
  top: 12px;
  right: 12px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  svg {
    max-width: 28px;
    transition-duration: 0.1s;
    transform: ${(prop) => (prop.show ? 'rotate(90deg)' : 'rotate(0deg)')};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function SideMenu({ activeElement }: NavigationProps) {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [href, setHref] = useState('');

  function handleCopy(): void {
    navigator.clipboard.writeText(href);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  function handleLinkClick(): void {
    handleCopy();
  }

  useEffect(() => {
    setHref(() => window.location.href);
  }, []);

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
              <Li key={item.name} active={activeElement === item.name}>
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
            href='https://mnews.tw/?utm_source=project&utm_medium=2023mazu'
            target='_blank'
            rel='noreferrer noopenner'
          >
            <Image
              src={mnewsLogo}
              alt='mnews logo'
              width={80}
              height={15}
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
        <IconsWrapper>
          <a
            href={`https://www.facebook.com/share.php?u=${href}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={fb} alt='facebook logo' width={28} height={28} />
          </a>
          <a
            href={`https://social-plugins.line.me/lineit/share?url=${href}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={line} alt='line logo' width={28} height={28} />
          </a>
          <button onClick={handleLinkClick}>
            <Image src={link} alt='copy link' width={28} height={28} />
          </button>
          <CopyAlert showAlert={showAlert} />
        </IconsWrapper>
      </SideMenuWrapper>
    </>
  );
}
