import { useEffect, useState } from "react";
import "./Educational_Component.css";
import { likesService } from "../../services/likesService";

type Props = {
  video: {
    id: string;
    title: string;
    channel: string;
    url?: string;
    thumbnail?: string;
    category?: string;
  };
  ariaLabel?: string;
};

export default function EduLikeButton({ video }: Props) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    likesService.getAllLikes().then((list) => {
      const exists = list.some((item) => item.eduId === video.id);
      setLiked(exists);
    });
  }, [video.id]);

  const onClick = async () => {
    if (liked) {
      
      await likesService.removeLike(video.id);
      setLiked(false);
    } else {
      
      await likesService.addLike({
        eduId: video.id,
        title: video.title,
        url: video.url,
        thumbnail: video.thumbnail,
        channel: video.channel,
        category: "Education",
      });
      setLiked(true);
    }
  };

  return (
    <button
      className={`like-btn ${liked ? "liked" : ""}`}
      onClick={onClick}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
}
