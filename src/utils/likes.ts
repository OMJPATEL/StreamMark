
import {
  likesService,
  type LikedItem,
} from "../services/likesService";

export type LikedVideo = LikedItem;

export function getAllLiked(): LikedVideo[] {
  return likesService.getAll();
}

export function isLiked(id: string): boolean {
  return likesService.isLiked(id);
}

export function like(v: LikedVideo): void {
  likesService.like(v);
}

export function unlike(id: string): void {
  likesService.unlike(id);
}

export function toggle(v: LikedVideo): boolean {
  return likesService.toggle(v);
}
