
export type LikedVideo = {
  id: string;
  title: string;
  channel?: string;
  url?: string;
  thumbnail?: string;
  category: "Education" | "Music" | "Fun Fact" | "Movies" | string;
};

const KEY = "liked_videos_v1";

function readStore(): Record<string, LikedVideo> {
  try { const raw = localStorage.getItem(KEY); return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}
function writeStore(store: Record<string, LikedVideo>) { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch {} }

export function getAllLiked(): LikedVideo[] { return Object.values(readStore()); }
export function isLiked(id: string): boolean { return Boolean(readStore()[id]); }
export function like(v: LikedVideo) { const s = readStore(); s[v.id] = v; writeStore(s); }
export function unlike(id: string) { const s = readStore(); delete s[id]; writeStore(s); }
export function toggle(v: LikedVideo): boolean { if (isLiked(v.id)) { unlike(v.id); return false; } like(v); return true; }
