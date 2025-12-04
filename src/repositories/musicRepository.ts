export type MusicItem = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  videoId: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const musicRepository = {
  getAll: async (): Promise<MusicItem[]> => {
    const res = await fetch(`${API_BASE_URL}/api/v1/music`);
    return res.json();
  },
};
