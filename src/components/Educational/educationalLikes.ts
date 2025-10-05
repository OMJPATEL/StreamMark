export type EducationalLikedVideo = {
  id: string;
  title: string;
  url?: string;
  thumbnail?: string;
  channel?: string;
  category: "Education";
};

const KEY = "liked_videos_v1";

function readStore(): Record<string, EducationalLikedVideo> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, EducationalLikedVideo>) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {}
}


export function isLiked(id: string): boolean {
  const store = readStore();
  return !!store[id];
}

export function toggle(video: EducationalLikedVideo): boolean {
  const store = readStore();


  const newVideo: EducationalLikedVideo = {
    id: video.id,
    title: video.title,
    url: video.url,
    thumbnail: video.thumbnail,
    channel: video.channel,
    category: "Education"
  };

  if (store[video.id]) {
    delete store[video.id];
  } else {
    store[video.id] = newVideo;
  }

  writeStore(store);

  window.dispatchEvent(
    new StorageEvent("storage", { key: KEY, newValue: JSON.stringify(store) })
  );

  return !!store[video.id];
}
