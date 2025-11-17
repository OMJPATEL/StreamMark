import { funFactsRepository } from "../repositories/funFactsRepository";

export const funFactsService = {
  getAll: async () => {
    return funFactsRepository.getAll();
  }
};