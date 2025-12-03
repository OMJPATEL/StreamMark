import { likesRepository } from "../repositories/likesRepository";
import type { LikedItem } from "../repositories/likesRepository";

let _cache: LikedItem[] = [];

export const likesService = {
  async getMyLikes(token: string) {
    _cache = await likesRepository.getMine(token);
    return _cache;
  },

  isLiked(id: string) {
    return _cache.some((item) => item.id === id);
  },

  async addLike(item: LikedItem, token: string) {
    const created = await likesRepository.add(item, token);
    _cache.push(created);
    return true;
  },

  async removeLike(id: string, token: string) {
    await likesRepository.remove(id, token);
    _cache = _cache.filter((i) => i.id !== id);
    return false;
  },

  async toggle(item: LikedItem, token: string) {
    if (this.isLiked(item.id)) {
      return await this.removeLike(item.id, token);
    } else {
      return await this.addLike(item, token);
    }
  },
};