import { useState } from 'react';
import musicData from '../../data/music.json';
import LikeButton from '../common/LikeButton';
import './music.css';

function Music() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = musicData.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="music" className="music-component">
      <h2>Music</h2>
      
      <div className="search-row">
        <input
          type="text"
          placeholder="Search by title or artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm("")}>Clear</button>
        )}
      </div>

      <div className="music-grid">
        {filteredSongs.map(song => (
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
              
              <LikeButton
                video={{
                  id: String(song.id),
                  title: song.title,
                  channel: song.artist,
                  url: `https://www.youtube.com/watch?v=${song.videoId}`,
                  category: "Music",
                }}
                ariaLabel={`Like ${song.title}`}
              />
            </div>
          </div>
        ))}
      </div>

      {filteredSongs.length === 0 && (
        <p className="no-results">No songs found for "{searchTerm}"</p>
      )}
    </div>
  );
}

export default Music;