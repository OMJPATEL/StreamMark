import { educationalRepository } from "../repositories/educationalRepository";
import type { EducationalItem } from "../testdata/educationalItems";

export const educationalService = {
  list: (): EducationalItem[] => educationalRepository.getAll(),

  listTopics: (): string[] => {
    const set = new Set(educationalRepository.getAll().map(i => i.topic));
    return Array.from(set).sort();
  },

  search: (query: string): EducationalItem[] => {
    const q = query.trim().toLowerCase();
    if (!q) return educationalRepository.getAll();
    return educationalRepository.getAll().filter(i =>
      i.title.toLowerCase().includes(q) ||
      (i.channel?.toLowerCase().includes(q) ?? false) ||
      i.topic.toLowerCase().includes(q)
    );
  },

  byTopic: (topic: string): EducationalItem[] => educationalRepository.getByTopic(topic),

  add: (item: Omit<EducationalItem, "id"> & { id?: string }): EducationalItem => educationalRepository.create(item),
  updateTitle: (id: string, title: string) => educationalRepository.update(id, { title }),
  remove: (id: string) => educationalRepository.remove(id),
};
