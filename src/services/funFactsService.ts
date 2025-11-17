import { funFactsRepository } from "../repositories/funFactsRepository";
import type { FunFact } from "../repositories/funFactsRepository";

type FunFactData = Record<string, FunFact[]>;

export const funFactsService = {
  getAll(): FunFactData {
    return funFactsRepository.getAll();
  },

  getByCategory(category: string): FunFact[] {
    return funFactsRepository.getByCategory(category);
  },
};
