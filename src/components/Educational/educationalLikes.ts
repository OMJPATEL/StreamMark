export type EducationalLikedVideo = {
  id: string;
  title: string;
  url?: string;
  thumbnail?: string;
  category: "Educational";
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

export function isLiked(id: string) {
  const store = readStore();
  return !!store[id];
}

export function toggle(video: EducationalLikedVideo) {
  const store = readStore();
  if (store[video.id]) {
    delete store[video.id];
  } else {
    store[video.id] = video;
  }
  writeStore(store);
  return !store[video.id];
}
