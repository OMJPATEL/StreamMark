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
};