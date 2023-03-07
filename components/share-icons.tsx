import styled from 'styled-components';
import { ShareButton } from '@readr-media/share-button';

export default function ShareIcons() {
  function handleClickButton() {
    console.log('click share-button');
  }
  function handleClickLine() {
    console.log('click Line icon');
  }
  function handleClickFB() {
    console.log('click FB icon');
  }
  function handleClickLink() {
    console.log('click Link icon');
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
