import { useState } from "react";
import funfacts from "../../data/funfacts.json"
import VideoCard from "./VideoCard";
import "../../../src/components/FunFacts/FunFacts.css"

function FunFacts() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="funfacts" id="funfacts">
      <h1>Fun Facts</h1>

      <div className="search-row">
        <input
          type="text"
          placeholder="Search category, title, or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button type="button" onClick={() => setSearchTerm("")}>Clear</button>
        )}
      </div>

      {Object.entries(funfacts).map(([category, videos]) => (
        <article key={category}>
          <h2>{category}</h2>
          <div className="grid">
            {videos.map((video, index) => (
              <VideoCard key={category + index} video={video} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default FunFacts;