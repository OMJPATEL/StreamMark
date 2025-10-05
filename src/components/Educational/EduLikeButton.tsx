import { useEffect, useState } from "react";
import { isLiked, toggle } from "./educationalLikes";
import "./Educational_Component.css";

type Props = {
  video: {
    id: string;
    title: string;
    url?: string;
    thumbnail?: string;
  };
};

export default function EduLikeButton({ video }: Props) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isLiked(video.id));
  }, [video.id]);

  const onClick = () => {
    setLiked(toggle({ ...video, category: "Educational" }));
  };

  return (
    <button className={`like-btn ${liked ? "liked" : ""}`} onClick={onClick}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}
