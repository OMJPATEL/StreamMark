const BASE_URL = "http://localhost:3000/api/v1/comments";

export const commentsRepository = {
  async getComments(videoId: string) {
    const res = await fetch(`${BASE_URL}/${encodeURIComponent(videoId)}`);
    if (!res.ok) throw new Error("Failed to fetch comments");
    return res.json();
  },

  async addComment(videoId: string, text: string, token: string) {
    const res = await fetch(`${BASE_URL}/${encodeURIComponent(videoId)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) throw new Error("Failed to add comment");
    return res.json();
  },
};
