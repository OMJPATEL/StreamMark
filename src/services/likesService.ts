<<<<<<< HEAD
import { likesRepository } from "../repositories/likesRepository";
import type { LikedItem } from "../repositories/likesRepository";
 
let _cache: LikedItem[] = [];
 
export const likesService = {
  async getAllLikes() {
    _cache = await likesRepository.getAll();
    return _cache;
  },
 
  isLiked(id: string) {
    return _cache.some((item) => item.id === id);
  },
 
  async addLike(item: LikedItem) {
    await likesRepository.add(item);
    _cache.push(item);
    return true;
  },
 
  async removeLike(id: string) {
    await likesRepository.remove(id);
    _cache = _cache.filter((i) => i.id !== id);
    return false;
  },
 
  async toggle(item: LikedItem) {
    if (this.isLiked(item.id)) {
      return await this.removeLike(item.id);
    } else {
      return await this.addLike(item);
    }
  }
=======
export type LikedItem = {
    id: string;
    title: string;
    category: "Fun Fact" | "Movies" | "Education" | "Music" | string;
    url?: string;
    year?: number;
    poster?: string;
    channel?: string;
};

const KEY = "liked_videos_v1" ;

function readStore(): Record<string, LikedItem> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, LikedItem>) {
    try {
        localStorage.setItem(KEY, JSON.stringify(store));
        window.dispatchEvent(new StorageEvent("storage", {key: KEY}));
    } catch {}
}

export const likesService = {
  getAll: (): LikedItem[] => Object.values(readStore()),
  isLiked: (id: string): boolean => Boolean(readStore()[id]),
  like: (item: LikedItem) => {
    const store = readStore();
    store[item.id] = item;
    writeStore(store);
  },
  unlike: (id: string) => {
    const store = readStore();
    delete store[id];
    writeStore(store);
  },
  toggle: (item: LikedItem): boolean => {
    if (likesService.isLiked(item.id)) {
      likesService.unlike(item.id);
      return false;
    }
    likesService.like(item);
    return true;
  },
>>>>>>> main
};