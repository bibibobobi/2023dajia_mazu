import Image from 'next/image';
import styled from 'styled-components';

type Ad = {
  image: string;
  url: string;
};

type AdPcProps = {
  adListPc: Ad[];
};

export default function AdPc({ adListPc }: AdPcProps) {
  return (
    <div>
      <p>{adListPc?.[0]?.image}</p>
    </div>
  );
}
