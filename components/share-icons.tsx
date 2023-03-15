import styled from 'styled-components';
import { ShareButton } from '@readr-media/share-button';
import { gaClickEvent } from '../utils/utils';

export default function ShareIcons() {
  function handleClickButton() {
    gaClickEvent('點擊分享按鈕');
  }
  function handleClickLine() {
    gaClickEvent('點擊Line分享按鈕');
  }
  function handleClickFB() {
    gaClickEvent('點擊Facebook分享按鈕');
  }
  function handleClickLink() {
    gaClickEvent('點擊複製連結按鈕');
  }

  return (
    <>
      <ShareButton
        pathColor='#FFF'
        direction='vertical'
        className='custom-name'
        onClick={handleClickButton}
        LineClick={handleClickLine}
        FbClick={handleClickFB}
        LinkClick={handleClickLink}
      />
    </>
  );
}
