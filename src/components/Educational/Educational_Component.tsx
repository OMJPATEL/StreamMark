import "./Educational_Component.css";
import { useState, useEffect } from "react";
import LikeButton from "../common/LikeButton";
import { educationalService } from "../../services/educationalService";
import { useAuth } from "@clerk/clerk-react";
import { educationProgressService } from "../../services/educationProgressService";

type Video = {
  id: string;
  title: string;
  channel?: string;
  url: string;
};

function EducationalComponent() {
  const [items, setItems] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [completed, setCompleted] = useState<string[]>([]);
  const { isSignedIn, getToken } = useAuth();

  // Load all educational videos
  useEffect(() => {
    educationalService.getEducational().then((data) => {
      setItems(data);
    });
  }, []);

  // Load completed videos
  useEffect(() => {
    const loadCompleted = async () => {
      if (!isSignedIn) return;
      const token = await getToken();
      const ids = await educationProgressService.getCompleted(token!);
      setCompleted(ids);
    };

    loadCompleted();
  }, [isSignedIn, getToken]);

  // Mark video as completed
  const handleComplete = async (id: string) => {
    const token = await getToken();
    await educationProgressService.markCompleted(id, token!);
    setCompleted((prev) => [...prev, id]);
  };

  // Remove completed video
  const handleRemoveCompleted = async (id: string) => {
    const token = await getToken();
    await educationProgressService.removeCompleted(id, token!);
    setCompleted((prev) => prev.filter((x) => x !== id));
  };

  // Filter videos based on search input
  const filteredVideos: Video[] = items.filter((video) => {
    const q = searchTerm.toLowerCase();
    return (
      video.title.toLowerCase().includes(q) ||
      (video.channel ?? "").toLowerCase().includes(q)
    );
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
      
                <LikeButton
                  item={{
                    id: video.id,
                    title: video.title,
                    channel: video.channel ?? "",
                    url: video.url,
                    category: "Education",
                  }}
                  ariaLabel={`Like ${video.title}`}
                />

                
                {isSignedIn && (
                  <button
                    onClick={() => handleComplete(video.id)}
                    disabled={completed.includes(video.id)}
                    className="completed-btn"
                  >
                    {completed.includes(video.id)
                      ? "Completed ✓"
                      : "Mark Completed"}
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted">
          {searchTerm
            ? `No videos found for "${searchTerm}".`
            : "No educational videos yet."}
        </p>
      )}

      
      {isSignedIn && completed.length > 0 && (
        <div className="completed-section">
          <h3>Completed Videos</h3>
          <ul className="completed-list">
            {items
              .filter((v) => completed.includes(v.id))
              .map((v) => (
                <li key={v.id} className="completed-item">
                  <span>{v.title}</span>
                  <button
                    className="remove-completed-btn"
                    onClick={() => handleRemoveCompleted(v.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default EducationalComponent;
