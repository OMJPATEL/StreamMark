import FunLikeButton from "./FunLikeButton";

type Video = {
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
      <FunLikeButton
        video={{
          id: video.url,      
          title: video.title,
          url: video.url,
        }}
      />
    </div>
  );
}

export default VideoCard;