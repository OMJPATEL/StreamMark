
export type LikedCategory =
  | "Fun Fact"
  | "Movies"
  | "Education"
  | "Music"
  | string;

export type LikedItem = {
  id: string;
  title: string;
  category: LikedCategory;
  url?: string;
  year?: number;
  poster?: string;
  channel?: string;
  thumbnail?: string;
};

let store: Record<string, LikedItem> = {};

export const likesRepository = {
  getAll(): LikedItem[] {
    return Object.values(store);
  },

  getById(id: string): LikedItem | undefined {
    return store[id];
  },

  isLiked(id: string): boolean {
    return id in store;
  },

  like(item: LikedItem): void {
    store[item.id] = item;
  },

  unlike(id: string): void {
    delete store[id];
  },

  clear(): void {
    store = {};
  },
};
