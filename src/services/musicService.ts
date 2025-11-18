import { musicRepository } from "../repositories/musicRepository";

export const musicService = {
  getAll: async () => {
    return musicRepository.getAll();
  }
};
