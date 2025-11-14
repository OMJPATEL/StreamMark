import { moviesRepository } from "../repositories/movieRepository";
import type { Movie } from "../repositories/movieRepository";

export const moviesService = {
  // Get all movies
  list: (): Movie[] => moviesRepository.getAll(),


  listYears: (): number[] => {
    const set = new Set(moviesRepository.getAll().map(m => m.year));
    return Array.from(set).sort((a, b) => b - a); 
  },

  // Search movies by title, description, or year
  search: (query: string): Movie[] => {
    const q = query.trim().toLowerCase();
    if (!q) return moviesRepository.getAll();
    return moviesRepository.getAll().filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.year.toString().includes(q)
    );
  },

// Filter by specific year
  byYear: (year: number): Movie[] => moviesRepository.getAll().filter(m => m.year === year),

  // Add a new movie
  add: (movie: Omit<Movie, "id"> & { id?: string }): Movie =>
    moviesRepository.create(movie),

  // Update movie title
  updateTitle: (title: string, newTitle: string) => {
    const movie = moviesRepository.getAll().find(m => m.title === title);
    if (!movie) throw new Error("Movie not found");
    return moviesRepository.update(movie.title, { title: newTitle });
  },

  // Remove movie by title
  remove: (title: string) => moviesRepository.remove(title),
};
