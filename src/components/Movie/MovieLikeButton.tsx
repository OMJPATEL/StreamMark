import { useLikes } from "../../hook/userlike"; 
import type { LikedItem } from "../../services/likesService";
import "./movie.css";

type Props = {
  movie: {
    id: string;
    title: string;
    year: number;
    poster: string;
  };
};

export default function MovieLikeButton({ movie }: Props) {
  const item: LikedItem = { ...movie, category: "Movies" };
  const { liked, toggleLike } = useLikes(item);

  return (
    <button className={`like-btn ${liked ? "liked" : ""}`} onClick={toggleLike}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}
