import { educationalRepository } from "../repositories/educationalRepository";

export const educationalService = {

  getEducational: async () => {
    return await educationalRepository.getAll();
  },

  list: async () => {
    return await educationalRepository.getAll();
  },

  listTopics: async () => {
    const items = await educationalRepository.getAll();
    const set = new Set(items.map((i: any) => i.topic));
    return Array.from(set).sort();
  },

  search: async (query: string) => {
    const q = query.trim().toLowerCase();
    const items = await educationalRepository.getAll();

    if (!q) return items;

    return items.filter((i: any) =>
      i.title.toLowerCase().includes(q) ||
      (i.channel?.toLowerCase().includes(q) ?? false) ||
      i.topic.toLowerCase().includes(q)
    );
  },

  byTopic: async (topic: string) => {
    const items = await educationalRepository.getAll();
    return items.filter(
      (i: any) => i.topic.toLowerCase() === topic.toLowerCase()
    );
  },

  add: (item: any) => {
    return educationalRepository.create(item);
  },

  updateTitle: (id: string, title: string) => {
    return educationalRepository.update(id, { title });
  },

  remove: (id: string) => {
    return educationalRepository.remove(id);
  },
};
