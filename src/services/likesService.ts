import { likesRepository } from "../repositories/likesRepository";

export const likesService = {
  getAllLikes() {
    return likesRepository.getAll();
  },

  addLike(item) {
    return likesRepository.add(item);
  },

  removeLike(id: string) {
    return likesRepository.remove(id);
  },
};
