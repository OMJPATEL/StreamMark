import { useEffect, useState } from "react";
import { likesService } from "../services/likesService";
import type { LikedItem } from "../services/likesService";


export function useLikes(item: LikedItem) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(likesService.isLiked(item.id));
  }, [item.id]);

  function toggleLike() {
    const newState = likesService.toggle(item);
    setLiked(newState);
  }

  return { liked, toggleLike };
}
