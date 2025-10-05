import movies from "../../data/movie.json";
import { useState } from "react";
import "./movie.css";

type Movie = {
  title: string;
  year: number;
  poster: string;
  description: string;
};

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((m: Movie) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.year.toString().includes(searchTerm)
  );
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
        filteredMovies.map((m: Movie, i: number) => (
          <div key={i}>
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
