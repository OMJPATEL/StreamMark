
import { useEffect, useState } from "react";
import { isLiked, toggle } from "../../utils/likes";
import type { LikedVideo } from "../../utils/likes";

import "./LikeButton.css";

type Props = { video: LikedVideo; ariaLabel?: string };

export default function LikeButton({ video, ariaLabel }: Props) {
  const [liked, setLiked] = useState(false);
  useEffect(() => { setLiked(isLiked(video.id)); }, [video.id]);
  const onClick = () => setLiked(toggle(video));
  return (
    <button
      className={`like-btn ${liked ? "liked" : ""}`}
      aria-pressed={liked}
      aria-label={ariaLabel ?? (liked ? "Unlike" : "Like")}
      onClick={onClick}
      type="button"
    >
      <span className="heart" aria-hidden> </span>
      {liked ? "Liked" : "Like"}
    </button>
  );
}
