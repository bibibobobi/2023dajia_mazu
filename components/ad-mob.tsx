import Image from 'next/image';
import styled from 'styled-components';

type Ad = {
  image: string;
  url: string;
};

type AdMobProps = {
  adListMobile: Ad[];
};

export default function AdMob({ adListMobile }: AdMobProps) {
  return (
    <div>
      <p>{adListMobile?.[0]?.image}</p>
    </div>
  );
}
