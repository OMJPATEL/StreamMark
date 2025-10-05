export type FunFactLikedVideo = {
  id: string;
  title: string;
  url?: string;
  category: "Fun Fact";
};

const KEY = "liked_videos_v1";

function getStore(): Record<string, FunFactLikedVideo> {
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : {};
}

function saveStore(store: Record<string, FunFactLikedVideo>) {
  localStorage.setItem(KEY, JSON.stringify(store));
}

export function isLiked(id: string) {
  const store = getStore();
  return !!store[id];
}

export function toggle(video: FunFactLikedVideo) {
  const store = getStore();

  if (store[video.id]) {
    delete store[video.id];
  } else {
    store[video.id] = video;
  }

  saveStore(store);
  return !store[video.id];
}