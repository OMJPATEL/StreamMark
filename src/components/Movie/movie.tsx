import movies from "../../data/movie.json";

type Movie = {
  title: string;
  year: number;
  poster: string;
  description: string;
};

export default function Movies() {
  return (
    <section id="movies" className="movies-section">
      <h2>Movies List</h2>
      {movies.map((m: Movie, i: number) => (
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
      ))}
    </section>
  );
}
