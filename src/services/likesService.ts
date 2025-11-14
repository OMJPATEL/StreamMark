
import {
  likesRepository,
  type LikedItem,
} from "../repositories/likesRepository";

export const likesService = {
  getAll(): LikedItem[] {
    return likesRepository.getAll();
  },

  isLiked(id: string): boolean {
    return likesRepository.isLiked(id);
  },

  like(item: LikedItem): void {
    likesRepository.like(item);
  },

  unlike(id: string): void {
    likesRepository.unlike(id);
  },

  toggle(item: LikedItem): boolean {
    if (likesRepository.isLiked(item.id)) {
      likesRepository.unlike(item.id);
      return false;
    }
    likesRepository.like(item);
    return true;
  },
};

export type { LikedItem };
