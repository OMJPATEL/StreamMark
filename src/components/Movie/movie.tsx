import { useState } from "react";
import { useMovies } from "../../hook/useMovies";
import "./movie.css";
import MovieLikeButton from "./MovieLikeButton";

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies } = useMovies();

  const filteredMovies = movies.filter((m) => {
    const q = searchTerm.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.year.toString().includes(searchTerm)
    );
  });

  return (
    <section id="movies" className="movies-section">

      <div className="search-row">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm("")}>Clear</button>
        )}
      </div>

      <h2>Movies List</h2>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((m) => (
          <div key={m.id}>
            <img
              src={m.poster}
              alt={m.title}
              width={120}
              style={{ cursor: "pointer" }}
            />
            <h3>
              {m.title} ({m.year})
            </h3>
            <p>{m.description}</p>
            <MovieLikeButton
              movie={{
                id: m.id,
                title: m.title,
                year: m.year,
                poster: m.poster,
              }}
            />
          </div>
        ))
      ) : (
        <p className="muted">
          {searchTerm
            ? `No movies found for "${searchTerm}".`
            : "No movies available."}
        </p>
      )}
    </section>
  );
}
