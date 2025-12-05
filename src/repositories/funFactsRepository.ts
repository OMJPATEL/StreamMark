import { API_BASE_URL } from "../config/api";

export type FunFact = {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
};

export const funFactsRepository = {
  getAll: async (): Promise<FunFact[]> => {
    const res = await fetch(`${API_BASE_URL}/api/v1/funfacts`);
    return res.json();
  },
};