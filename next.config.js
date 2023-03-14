/** @type {import('next').NextConfig} */

let assetPrefixPath = '';
switch (process.env.NEXT_PUBLIC_ENV) {
  case 'prod':
    assetPrefixPath = `https://www.mnews.tw/projects/${process.env.NEXT_PUBLIC_PROJECT_NAME}`;
    break;
  case 'dev':
    assetPrefixPath = `https://dev.mnews.tw/projects/dev-${process.env.NEXT_PUBLIC_PROJECT_NAME}`;
    break;
  default:
    assetPrefixPath = 'http://localhost:3000';
    break;
}

const nextConfig = {
  assetPrefix: assetPrefixPath,
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
