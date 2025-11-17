export type Movie = {
  id: string;
  title: string;
  year: number;
  poster: string;
  description: string;
};

export const moviesRepository = {
  getAll: async (): Promise<Movie[]> => {
    const res = await fetch("http://localhost:3000/api/v1/movies");
    return res.json();
  },

  getByTitle: async (title: string): Promise<Movie[]> => {
    const res = await fetch(`http://localhost:3000/api/v1/movies?search=${title}`);
    return res.json();
  },
};
