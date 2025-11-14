import { useEffect, useMemo, useState } from "react";
import { getAllLiked, unlike } from "../../utils/likes";
import type { LikedVideo } from "../../utils/likes";
import "./LikedPage.css";

type Grouped = Record<string, LikedVideo[]>;

export default function LikedPage() {
  const [items, setItems] = useState<LikedVideo[]>([]);
  const refresh = () => setItems(getAllLiked());

  useEffect(() => {
    refresh();
  }, []);

  const grouped: Grouped = useMemo(() => {
    const out: Grouped = {
      "Education": [],
      "Music": [],
      "Fun Fact": [],
      "Movies": []
    };
    for (const v of items) {
      (out[v.category] ?? (out[v.category] = [])).push(v);
    }
    return out;
  }, [items]);

  const remove = (id: string) => {
    unlike(id);
    refresh();
  };

  const Section = ({ title }: { title: keyof Grouped | string }) => (
    <section className="liked-section">
      <h3 className="liked-heading">{title} liked videos</h3>

      {grouped[title as string]?.length ? (
        <ul className="liked-list">
          {grouped[title as string].map((v) => (
            <li key={v.id} className="liked-item">
              <div className="meta">
                <a
                  className="title"
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {v.title}
                </a>
                {v.channel && <span className="channel">{v.channel}</span>}
              </div>

              <button className="remove-btn" onClick={() => remove(v.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="liked-empty" />
      )}
    </section>
  );

  return (
    <div className="liked-page">
      <h2 className="liked-title">Liked Videos</h2>
      <Section title="Education" />
      <Section title="Music" />
      <Section title="Fun Fact" />
      <Section title="Movies" />
    </div>
  );
}
