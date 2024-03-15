import ReactGA from "react-ga";

export function makePlaylist(data: { [key: string]: string | number }[]) {
  const playlist: string[] = [];
  for (let i = 0; i < data?.length; i++) {
    const item = data?.[i];
    const linkContent = item?.["Link / Content"];
    if (linkContent && typeof linkContent === "string") {
      if (linkContent.startsWith("https://www.youtube.com/")) {
        const videoId = linkContent.split("v=")[1];
        playlist.push(videoId);
      } else {
        playlist.push(linkContent);
      }
    }
  }
  return playlist;
}

interface AdData {
  Name: string;
  order: string;
  Image: string;
  "Link / Content": string;
  Note: string;
}

interface Ad {
  image: string;
  url: string;
  order: string;
  note: string;
}

export function makeAdList(data: AdData[]): Ad[] {
  const adList: Ad[] = [];
  for (const item of data) {
    const image = item.Image.trim();
    const linkContent = item["Link / Content"].trim();
    const order = item.order.trim();
    const note = item.Note.trim();
    if (image !== "" && linkContent !== "" && order !== "") {
      adList.push({ image, url: linkContent, order, note });
    }
  }
  return adList;
}

export const gaClickEvent = (label: string) => {
  ReactGA.event({
    category: "Project/大甲媽",
    action: "click",
    label: label,
    nonInteraction: false,
  });
};

export const gaScrollEvent = (label: string) => {
  ReactGA.event({
    category: "Project/大甲媽",
    action: "scroll",
    label: label,
    nonInteraction: true,
  });
};
