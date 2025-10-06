import { useEffect, useState } from "react";
import { isLiked, toggle } from "./funfactsLikes";
import "./FunFacts.css";

type Props = {
  video: {
    id: string;
    title: string;
    url?: string;
  };
};

export default function FunLikeButton({ video }: Props) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isLiked(video.id));
  }, [video.id]);

  function handleClick() {
    setLiked(
      toggle({ ...video, category: "Fun Fact" })
    );
  }

  return (
    <button
      className={`like-btn ${liked ? "liked" : ""}`}
      onClick={handleClick}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
}