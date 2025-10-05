import { useEffect, useState } from "react";
import { isLiked, toggle } from "./educationalLikes";
import "./Educational_Component.css";

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
    setLiked(isLiked(video.id));
  }, [video.id]);

  const onClick = () => {
    setLiked(toggle({ ...video, category: "Education" }));
  };

  return (
    <button className={`like-btn ${liked ? "liked" : ""}`} onClick={onClick}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}
