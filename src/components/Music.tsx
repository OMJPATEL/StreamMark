import React from 'react';
import musicData from '../assets/music.json';

export default function Music() {
  return (
    <section className="music-section">
      <h1>Music</h1>
      <div className="music-grid">
        {musicData.map(song => (
          <div key={song.id} className="music-card">
            <div className="media">
              <iframe
                src={`https://www.youtube.com/embed/${song.videoId}?rel=0`}
                title={song.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="info">
              <div className="topline">
                <h3>{song.title}</h3>
                <p className="artist">{song.artist}</p>
              </div>
              <p className="duration">Duration: {song.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <footer>© 2025 StreamMark | Karanveer Singh</footer>
    </section>
  );
}