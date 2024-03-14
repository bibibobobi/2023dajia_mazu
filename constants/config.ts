const env: string = String(process.env.NEXT_PUBLIC_ENV);
const projectName: string = String(process.env.NEXT_PUBLIC_PROJECT_NAME);

let gaTrackingId: string;
let timeInterval: number;
let protocol = "http";
let host = "localhost";
let staticFileDestination: string;
let mnewsSiteUrl: string;
let staticJsonUrl: string;

switch (env) {
  case "dev":
    gaTrackingId = "UA-196534751-2";
    protocol = "https";
    host = "dev.mnews.tw";
    staticFileDestination = `${protocol}://${host}/projects/dev-${projectName}`;
    mnewsSiteUrl = `${protocol}://${host}`;
    staticJsonUrl = "https://statics-dev.mnews.tw/json/matsu2024.json";

    break;
  case "prod": {
    gaTrackingId = "UA-196534751-1";
    protocol = "https";
    host = "www.mnews.tw";
    staticFileDestination = `${protocol}://${host}/projects/${projectName}`;
    mnewsSiteUrl = `${protocol}://${host}`;
    staticJsonUrl = "https://statics.mnews.tw/json/matsu2024.json";

    break;
  }
  default: {
    gaTrackingId = "UA-196534751-2";
    staticFileDestination = `${protocol}://${host}:3000`;
    mnewsSiteUrl = `https://dev.mnews.tw`;
    staticJsonUrl = "https://statics-dev.mnews.tw/json/matsu2023.json";

    break;
  }
}
export {
  gaTrackingId,
  mnewsSiteUrl,
  staticFileDestination,
  staticJsonUrl,
  timeInterval,
};
