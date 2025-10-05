export type FunFactLikedVideo = {
  id: string;
  title: string;
  url?: string;
  category: "Fun Fact";
};

const KEY = "liked_videos_v1";

function getstore(): Record<string, FunFactLikedVideo> {
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : {};
}
