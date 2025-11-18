import { useEffect, useState } from "react";
import { likesService } from "../services/likesService";
import type { LikedItem } from "../repositories/likesRepository";

export function useLikes(item: LikedItem) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    likesService.getAllLikes().then(() => {
      setLiked(likesService.isLiked(item.id));
    });
  }, [item.id]);

  async function toggleLike() {
    const newState = await likesService.toggle(item);
    setLiked(newState);
  }

  return { liked, toggleLike };
}