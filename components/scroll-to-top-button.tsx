import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ScrollTop } from './icons/scroll-top';

const Button = styled.button`
  border-radius: 50%;
  box-shadow: 1px 1px 3px 0px hsla(0, 0%, 0%, 0.15);
  width: 28px;
  height: 28px;
  position: fixed;
  top: calc(100vh - 100px);
  right: 16px;
  z-index: 9;
  svg {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 1200px) {
    width: 48px;
    height: 48px;
    right: 48px;
    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button onClick={scrollToTop}>
          <ScrollTop />
        </Button>
      )}
    </>
  );
}
