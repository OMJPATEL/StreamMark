import videos from "../../data/educational-videos.json";
import "./Educational_Component.css";

type Video = {
  id: string;
  title: string;
  channel: string;
  url: string; 
};

function EducationalComponent() {
  const hasVideos = Array.isArray(videos) && videos.length > 0;

  return (
    <section id="educational" className="educational-component">
      <h2>Educational Videos</h2>

      {hasVideos ? (
        <ul className="video-grid" aria-label="Educational videos">
          {videos.map((video: Video) => (
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
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted">No educational videos yet.</p>
      )}
    </section>
  );
}

export default EducationalComponent;
