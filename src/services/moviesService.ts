import { moviesRepository } from "../repositories/movieRepository";

export const moviesService = {
  getAll: async () => {
    return moviesRepository.getAll();
  },

  getByTitle: async (title: string) => {
    return moviesRepository.getByTitle(title);
  },
};
