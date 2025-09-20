import funfacts from "../../data/funfacts.json"

function FunFacts() {
  return (
    <section className="funfacts" id="funfacts">
      <h1>Fun Facts</h1>

      {Object.entries(funfacts).map(([category, videos]) => (
        <article key={category}>
          <h2>{category}</h2>
          <div className="grid">
          </div>
        </article>
      ))}
    </section>
  );
}

export default FunFacts;