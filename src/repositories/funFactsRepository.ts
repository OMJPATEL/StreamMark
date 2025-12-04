export type FunFact = {
    id: string;
    url: string;
    title: string;
    description: string;
    category: string;
};

export const funFactsRepository = {
  getAll: async (): Promise<FunFact[]> => {
    const res = await fetch("http://localhost:3000/api/v1/funfacts");
    return res.json();
  },
};