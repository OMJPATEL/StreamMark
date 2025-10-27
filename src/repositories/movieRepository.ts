import movies from "../data/movie.json";

export type Movie = {
  title: string;
  year: number;
  poster: string;
  description: string;
};

export const moviesRepository = {
  getAll: (): Movie[] => movies,
  getByTitle: (title: string): Movie[] =>
    movies.filter((m) =>
      m.title.toLowerCase().includes(title.toLowerCase())
    ),
};
