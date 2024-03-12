import { Noto_Serif_TC } from "@next/font/google";
import { navLinks } from "constants/nav-links";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ShareIcons from "../components/share-icons";
import mnewsLogo from "../public/icons/mnews-logo.svg";
import tachiatempleLogo from "../public/icons/tachiatemple-logo.svg";

const font = Noto_Serif_TC({ subsets: ["latin"], weight: ["600"] });

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
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1200px) {
    gap: 36px;
  }
`;

const Li = styled.li<LiProps>`
  list-style: none;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  font-family: var(--notoSerifTC-font);

  :nth-child(odd) {
    color: ${({ active }) => (active ? "#ffffff" : "#f4d9ca")};
    transition: all 0.3s ease-in-out;
  }
  :nth-child(even) {
    color: ${({ active }) => (active ? "#ffffff" : "#d8b384")};
    transition: all 0.3s ease-in-out;
  }

  :hover {
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 6px;
    transition: text-decoration 0.3s ease-in-out;
  }

  ${({ active }) =>
    active &&
    `
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 6px;
    transition: text-decoration 0.3s ease-in-out;
  `}

  @media (min-width: 1200px) {
    font-size: 28px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 8px; /* Safari 12+ */
  grid-gap: 8px; /* Safari 10-11 */
`;

const ItemShareWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media (min-width: 1200px) {
    gap: 36px;
  }
`;

const ShareWrapper = styled.div`
  padding-top: 8px;
`;

export default function Navigation({ activeElement }: NavigationProps) {
  return (
    <Nav>
      <LogoWrapper>
        <a
          href="https://mnews.tw/?utm_source=project&utm_medium=2024mazu"
          target="_blank"
          rel="noreferrer noopenner"
        >
          <Image
            src={mnewsLogo}
            alt="mnews logo"
            width={128}
            height={24}
            priority
          />
        </a>
        <div>
          <Image
            src={tachiatempleLogo}
            alt="tachia temple logo"
            width={80}
            height={24}
          />
        </div>
      </LogoWrapper>
      <ItemShareWrapper>
        <ItemsWrapper>
          {navLinks.map((item) => {
            const isActive =
              activeElement === item.name && activeElement !== undefined;
            return (
              <Li key={item.name} active={isActive}>
                <Link href={item.href} scroll={false}>
                  <p className={font.className}>{item.title}</p>
                </Link>
              </Li>
            );
          })}
        </ItemsWrapper>
        <ShareWrapper>
          <ShareIcons />
        </ShareWrapper>
      </ItemShareWrapper>
    </Nav>
  );
}
