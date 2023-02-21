import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>2023 大甲媽祖遶境｜鏡新聞</title>
        <meta
          name='description'
          content='《鏡新聞》為您帶來 2023 年大甲媽祖遶境最新新聞'
        />
        <link rel='icon' type='image/x-icon' href={'/icons/favicon.ico'} />
      </Head>
      <h1>哈囉 大甲媽祖</h1>
    </>
  );
}
