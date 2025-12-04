export interface EducationalItem {
  id: string;
  title: string;
  url: string;
  channel?: string;
  topic?: string;
}

export const educationalRepository = {

  async getAll(): Promise<EducationalItem[]> {   
    const res = await fetch("http://localhost:3000/api/v1/educational");
    return res.json();
  },

  async getById(id: string): Promise<EducationalItem> {  
    const res = await fetch(`http://localhost:3000/api/v1/educational/${id}`);
    return res.json();
  },

  async getByTopic(topic: string): Promise<EducationalItem[]> {   
    const items = await educationalRepository.getAll();
    return items.filter(
      (i: any) => i.topic.toLowerCase() === topic.toLowerCase()
    );
  },

  async create(item: Record<string, unknown>): Promise<EducationalItem> {   
    const res = await fetch("http://localhost:3000/api/v1/educational", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    return res.json();
  },

  async update(id: string, patch: any): Promise<EducationalItem> {   
    const res = await fetch(`http://localhost:3000/api/v1/educational/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    return res.json();
  },

  async remove(id: string): Promise<boolean> {   
    await fetch(`http://localhost:3000/api/v1/educational/${id}`, {
      method: "DELETE",
    });
    return true;
  },
};
