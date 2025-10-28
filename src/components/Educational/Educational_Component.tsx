import "./Educational_Component.css";
import { useState } from "react";
import EduLikeButton from "../Educational/EduLikeButton";
import { useEducational } from "../../hook/useEducational";

type Video = {
  id: string;
  title: string;
  channel?: string;
  url: string;
};

function EducationalComponent() {
  const { items } = useEducational();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos: Video[] = items.filter((video) => {
    const q = searchTerm.toLowerCase();
    const titleMatch = video.title.toLowerCase().includes(q);
    const channelMatch = (video.channel ?? "").toLowerCase().includes(q);
    return titleMatch || channelMatch;
  });

  return (
    <section id="educational" className="educational-component">
      <h2>Educational Videos</h2>

      <div className="search-row">
        <input
          type="text"
          placeholder="Search by title or channel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && <button onClick={() => setSearchTerm("")}>Clear</button>}
      </div>

      {filteredVideos.length > 0 ? (
        <ul className="video-grid" aria-label="Educational videos">
          {filteredVideos.map((video) => (
            <li key={video.id} className="video-card">
              <div className="video-frame">
                <iframe
                  src={video.url}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="video-info">
                <strong className="video-title">{video.title}</strong>
                <span className="video-channel">{video.channel}</span>
              </div>

              <div className="actions">
                <EduLikeButton
                  video={{
                    id: video.id,
                    title: video.title,
                    channel: video.channel ?? "",
                    url: video.url,
                    category: "Education",
                  }}
                  ariaLabel={'Like ${video.title}'}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted">
          {searchTerm
            ? 'No videos found for "${searchTerm}".'
            : "No educational videos yet."}
        </p>
      )}
    </section>
  );
}

export default EducationalComponent;
