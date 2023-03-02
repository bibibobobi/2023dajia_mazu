export default function makePlaylist(
  data: { [key: string]: string | number }[]
) {
  const playlist: string[] = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const linkContent = item['Link / Content'];
    if (linkContent && typeof linkContent === 'string') {
      if (linkContent.startsWith('https://www.youtube.com/')) {
        const videoId = linkContent.split('v=')[1];
        playlist.push(videoId);
      } else {
        playlist.push(linkContent);
      }
    }
  }
  return playlist;
}
