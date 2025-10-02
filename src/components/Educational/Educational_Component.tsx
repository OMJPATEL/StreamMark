import videos from "../../data/educational-videos.json";
import "../Educational/Educational_Component.css";

type Video = {
  id: string;
  title: string;
  channel: string;
  url: string;
};

function EducationalComponent() {

  return (
    <section id="education" className="educational-component">
      <h2>Educational Videos</h2>

      {Array.isArray(videos) && videos.length > 0 ? (
        <ul>
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
                <strong>{video.title}</strong>
                <span>{video.channel}</span>
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
