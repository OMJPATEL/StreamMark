import { likesRepository } from "../repositories/likesRepository";

export type LikedItem = {
    id: string;
    title: string;
    category: "Fun Fact" | "Movies" | "Education" | "Music" | string;
    url?: string;
    year?: number;
    poster?: string;
    channel?: string;
};


export const likesService = {
    getAll(): LikedItem[] {
    return likesRepository.getAll();
  },

  isLiked(id: string): boolean {
    return likesRepository.isLiked(id);
  },

  toggle(item: LikedItem): boolean {
    if (likesRepository.isLiked(item.id)) {
      likesRepository.remove(item.id);
      return false;
    } else {
      likesRepository.add(item);
      return true;
    }
  },
};