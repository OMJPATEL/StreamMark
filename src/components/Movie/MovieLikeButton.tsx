import { useEffect, useState } from "react";
import { isLiked, toggle } from "./MovieLikes";
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
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isLiked(movie.id));
  }, [movie.id]);

  const onClick = () => {
    setLiked(toggle({ ...movie, category: "Movies" }));
  };

  return (
    <button className={`like-btn ${liked ? "liked" : ""}`} onClick={onClick}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}
