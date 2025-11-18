export type LikedCategory =
  | "Fun Fact"
  | "Movies"
  | "Education"
  | "Music"
  | string;

export type LikedItem = {
  id: string;              
  title: string;
  category: LikedCategory;
  url?: string;
  year?: number;
  poster?: string;
  channel?: string;
  thumbnail?: string;
};

export const likesRepository = {

  async getAll(): Promise<LikedItem[]> {
    const response = await fetch("http://localhost:3000/api/v1/liked");
    return response.json();
  },

  async add(data: LikedItem | any): Promise<void> {
    await fetch("http://localhost:3000/api/v1/liked", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },

  async remove(id: string): Promise<void> {
    await fetch('http://localhost:3000/api/v1/liked/${id}', {
      method: "DELETE",
    });
  },
};
