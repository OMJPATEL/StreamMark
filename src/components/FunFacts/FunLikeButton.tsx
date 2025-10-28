import { useLikes } from "../../hook/userlike"; 
import type { LikedItem } from "../../services/likesService";
import "./FunFacts.css";

type Props = {
  video: {
    id: string;
    title: string;
    url?: string;
  };
};

export default function FunLikeButton({ video }: Props) {
  const item: LikedItem = { ...video, category: "Fun Fact" };
  const { liked, toggleLike } = useLikes(item);

  return (
    <button
      className={`like-btn ${liked ? "liked" : ""}`}
      onClick={toggleLike}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
}