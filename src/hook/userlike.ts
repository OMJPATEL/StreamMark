import { useEffect, useState } from "react";
import { likesService } from "../services/likesService";
import type { LikedItem } from "../repositories/likesRepository";
import { useAuth } from "@clerk/clerk-react";

export function useLikes(item: LikedItem) {
  const { isSignedIn, getToken } = useAuth();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      setLiked(false);
      return;
    }

    (async () => {
      const token = await getToken();
      if (!token) return;

      await likesService.getMyLikes(token); 
      setLiked(likesService.isLiked(item.id));
    })();
  }, [item.id, isSignedIn]);

  async function toggleLike() {
    if (!isSignedIn) {
      window.location.href = "/sign-in";
      return;
    }

    const token = await getToken();
    if (!token) return;

    const updated = await likesService.toggle(item, token);
    setLiked(updated);
  }

  return { liked, toggleLike };
}
