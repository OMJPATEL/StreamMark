import videos from "../../data/educational-videos.json";
import "../Educational/Educational_Component.css";

type Video = {
  id: string;
  title: string;
  channel: string;
};

function EducationalComponent() {
  return (
    <section id="education" className="educational-component">
      <h2>Educational Videos</h2>
      <ul>
        {videos.map((video: Video) => (
          <li key={video.id}>
            <strong>{video.title}</strong> - {video.channel}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EducationalComponent;
