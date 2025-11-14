import type { LikedItem } from "../services/likesService";

let likedItems: Record<string, LikedItem> = {};

export const likesRepository = {
  getAll(): LikedItem[] {
    return Object.values(likedItems);
  },

  isLiked(id: string): boolean {
    return !!likedItems[id];
  },

  add(item: LikedItem) {
    likedItems[item.id] = item;
  },

  remove(id: string) {
    delete likedItems[id];
  },
};
