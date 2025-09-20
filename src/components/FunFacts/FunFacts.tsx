import funfacts from "../../data/funfacts.json"
import VideoCard from "./VideoCard";

function FunFacts() {
  return (
    <section className="funfacts" id="funfacts">
      <h1>Fun Facts</h1>

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