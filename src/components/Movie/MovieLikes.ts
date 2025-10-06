export type MovieLiked = {
  id: string;
  title: string;
  year: number;
  poster: string;
  category: "Movies";
};

const KEY = "liked_videos_v1";

function readStore(): Record<string, MovieLiked> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, MovieLiked>) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
    window.dispatchEvent(new StorageEvent("storage", { key: KEY }));
  } catch {}
}

export function isLiked(id: string) {
  const store = readStore();
  return !!store[id];
}

export function toggle(movie: MovieLiked) {
  const store = readStore();
  if (store[movie.id]) {
    delete store[movie.id];
  } else {
    store[movie.id] = movie;
  }
  writeStore(store);
  return !!store[movie.id];
}
