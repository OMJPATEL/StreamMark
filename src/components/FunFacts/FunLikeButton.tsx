import "./FunFacts.css";

type Props = {
  video: {
    id: string;
    title: string;
    url?: string;
  };
};

export default function FunLikeButton({ video }: Props) {
  return (
    <button
      className="like-btn"
      type="button"
      aria-label={`Like ${video.title}`}
    >
      Like
    </button>
  );
}
