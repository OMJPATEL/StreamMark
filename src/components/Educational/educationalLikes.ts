import type { LikedVideo } from "../../utils/likes";
import {
  isLiked as isSharedLiked,
  toggle as toggleShared,
} from "../../utils/likes";

export type EducationalLikedVideo = LikedVideo & {
  category: "Education";
};

export function isLiked(id: string): boolean {
  return isSharedLiked(id);
}

export function toggle(video: EducationalLikedVideo): boolean {
  return toggleShared(video);
}
