import movies from "../data/movie.json";

export type Movie = {
  title: string;
  year: number;
  poster: string;
  description: string;
};

// Store movies in a mutable array 
let allMovies = movies as Movie[];

export const moviesRepository = {
  // Get all movies
  getAll: (): Movie[] => allMovies,

  // Get movies by title 
  getByTitle: (title: string): Movie[] =>
    allMovies.filter((m) =>
      m.title.toLowerCase().includes(title.toLowerCase())
    ),

  // Create a new movie entry
  create: (movie: Movie): Movie => {
    allMovies.push(movie);
    return movie;
  },

  // Update a movie 
  update: (title: string, updatedData: Partial<Movie>): Movie | undefined => {
    const index = allMovies.findIndex((m) => m.title === title);
    if (index === -1) return undefined;
    allMovies[index] = { ...allMovies[index], ...updatedData };
    return allMovies[index];
  },

  // Remove a movie by title
  remove: (title: string): void => {
    allMovies = allMovies.filter((m) => m.title !== title);
  },
};
