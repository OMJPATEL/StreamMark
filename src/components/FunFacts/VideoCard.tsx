import LikeButton from "../common/LikeButton";
import Comments from "./Comments";

type Video = {
  id: string;
  url: string;
  title: string;
  description: string;
};

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="card">
      <iframe
        src={video.url}
        title={video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      
      <LikeButton
        item={{
          id: video.id,
          title: video.title,
          url: video.url,
          category: "Fun Fact",
        }}
        ariaLabel={`Like ${video.title}`}
      />
      <Comments videoId={video.url} />
    </div>
  );
}

export default VideoCard;