import funfactsData from "../data/funfacts.json"

export type FunFact = {
    url: string;
    title: string;
    description: string;
};

type FunFactData = Record<string, FunFact[]>;

const funfacts = funfactsData as FunFactData;

export const funFactsRepository = {
  getAll: (): FunFactData => funfacts,
  getByCategory: (category: string): FunFact[] => funfacts[category] || [],
};