export type MusicItem = {
  id: number;
  title: string;
  artist: string;
  duration: string;
  videoId: string;
};

export const musicRepository = {
  getAll: async (): Promise<MusicItem[]> => {
    const res = await fetch("http://localhost:3000/api/v1/music");
    return res.json();
  },
};
