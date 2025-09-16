export default function Music() {
  return (
    <section className="music-section">
      <h2>Music</h2>

      <div className="music-grid">
        <div className="music-card">
          <img src="/covers/song1.jpg" alt="Song 1 cover" />
          <div className="info">
            <h3>Song Title 1</h3>
            <p>Artist Name</p>
          </div>
        </div>

        <div className="music-card">
          <img src="/covers/song2.jpg" alt="Song 2 cover" />
          <div className="info">
            <h3>Song Title 2</h3>
            <p>Artist Name</p>
          </div>
        </div>
      </div>

      <footer>© 2025 StreamMark</footer>
    </section>
  );
}
