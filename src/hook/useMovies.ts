import { useState, useEffect } from "react";
import { moviesService } from "../services/moviesService";
import type { Movie } from "../repositories/movieRepository";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    moviesService.getAll().then((list) => {
      setMovies(list);
    });
  }, []);

  return { movies };
}
