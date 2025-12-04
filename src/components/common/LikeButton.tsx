import { useLikes } from "../../hook/userlike";
import type { LikedItem } from "../../repositories/likesRepository";
import { Heart } from "lucide-react";
import "./LikeButton.css";

type Props = {
  item: LikedItem;     
  ariaLabel?: string;
};

export default function LikeButton({ item, ariaLabel }: Props) {
  const { liked, toggleLike } = useLikes(item);

  return (
    <button
      className={`like-btn ${liked ? "liked" : ""}`}
      aria-label={ariaLabel ?? (liked ? "Unlike" : "Like")}
      onClick={toggleLike}
    >
      <Heart
        size={18}
        fill={liked ? "currentColor" : "none"}
        strokeWidth={2}
      />
    </button>
  );
}