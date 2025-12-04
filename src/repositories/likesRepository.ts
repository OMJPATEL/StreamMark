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

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = `${API_BASE_URL}/api/v1/liked`;

export const likesRepository = {
  async getMine(token: string): Promise<LikedItem[]> {
    const response = await fetch(`${BASE_URL}/my-liked`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch liked items");
    }

    return response.json();
  },

  async add(data: LikedItem | any, token: string): Promise<LikedItem> {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to add liked item");
    }

    return response.json();
  },

  async remove(id: string, token: string): Promise<void> {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to remove liked item");
    }
  },
};
