import { educationalItems } from "../testdata/educationalItems";
import type { EducationalItem } from "../testdata/educationalItems";

let items = [...educationalItems]; 

export type CreateEducationalItem = Omit<EducationalItem, "id"> & { id?: string };

export const educationalRepository = {
  create: (item: CreateEducationalItem): EducationalItem => {
    const id = item.id ?? `edu-${Math.random().toString(36).slice(2,8)}`;
    const newItem: EducationalItem = { ...item, id };
    items.push(newItem);
    return newItem;
  },

  getAll: (): EducationalItem[] => [...items],
  getById: (id: string): EducationalItem | undefined => items.find(i => i.id === id),
  getByTopic: (topic: string): EducationalItem[] => items.filter(i => i.topic.toLowerCase() === topic.toLowerCase()),

  update: (id: string, patch: Partial<Omit<EducationalItem, "id">>): EducationalItem | undefined => {
    const idx = items.findIndex(i => i.id === id);
    if (idx === -1) return undefined;
    items[idx] = { ...items[idx], ...patch };
    return items[idx];
  },

  remove: (id: string): boolean => {
    const prevLen = items.length;
    items = items.filter(i => i.id != id);
    return items.length !== prevLen;
  }
};
