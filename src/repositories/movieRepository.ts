export type Movie = {
  id: string;
  title: string;
  year: number;
  poster: string;
  description: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const moviesRepository = {
  getAll: async (): Promise<Movie[]> => {
    const res = await fetch(`${API_BASE_URL}/api/v1/movies`);
    return res.json();
  },

  getByTitle: async (title: string): Promise<Movie[]> => {
    const res = await fetch(`${API_BASE_URL}/api/v1/movies?search=${title}`);
    return res.json();
  },
};
