const env: string = String(process.env.NEXT_PUBLIC_ENV);
const projectName: string = String(process.env.NEXT_PUBLIC_PROJECT_NAME);

let gaTrackingId: string;
let timeInterval: number;
let protocol = 'http';
let host = 'localhost';
let staticFileDestination: string;
let mnewsSiteUrl: string;

switch (env) {
  case 'dev':
    gaTrackingId = 'UA-196534751-2';
    protocol = 'https';
    host = 'dev.mnews.tw';
    staticFileDestination = `${protocol}://${host}/projects/dev-${projectName}`;
    mnewsSiteUrl = `${protocol}://${host}`;

    break;
  case 'prod': {
    gaTrackingId = 'UA-196534751-1';
    protocol = 'https';
    host = 'www.mnews.tw';
    staticFileDestination = `${protocol}://${host}/projects/${projectName}`;
    mnewsSiteUrl = `${protocol}://${host}`;

    break;
  }
  default: {
    gaTrackingId = 'UA-196534751-2';
    staticFileDestination = `${protocol}://${host}:3000`;
    mnewsSiteUrl = `https://dev.mnews.tw`;

    break;
  }
}
export { gaTrackingId, timeInterval, staticFileDestination, mnewsSiteUrl };
