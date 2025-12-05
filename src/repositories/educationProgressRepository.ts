import { API_BASE_URL } from "../config/api";

export const educationProgressRepository = {
  async markCompleted(id: string, token: string) {
    const res = await fetch(`${API_BASE_URL}/api/v1/education-progress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ educationalId: id }),
    });
    return res.json();
  },

  async getCompleted(token: string): Promise<string[]> {
    const res = await fetch(`${API_BASE_URL}/api/v1/education-progress`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data.map((i: any) => i.educationalId);
  },

  async removeCompleted(id: string, token: string) {
    const res = await fetch(`${API_BASE_URL}/api/v1/education-progress/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  },
};
