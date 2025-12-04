import { commentsRepository } from "../repositories/commentsRepository";

const _cache: Record<string, any[]> = {};

export const commentsService = {
  async load(videoId: string) {
    const comments = await commentsRepository.getComments(videoId);
    _cache[videoId] = comments;
    return comments;
  },

  get(videoId: string) {
    return _cache[videoId] ?? [];
  },

  async add(videoId: string, text: string, token: string) {
    const comment = await commentsRepository.addComment(videoId, text, token);
    _cache[videoId] = [comment, ...(_cache[videoId] || [])];
    return comment;
  },
};
