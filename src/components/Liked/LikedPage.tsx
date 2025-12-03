import { useEffect, useMemo, useState } from "react";
import { likesService } from "../../services/likesService";
import { useAuth } from "@clerk/clerk-react";
import type { LikedItem } from "../../repositories/likesRepository";
import "./LikedPage.css";

type Grouped = Record<string, LikedItem[]>;

export default function LikedPage() {
  const [items, setItems] = useState<LikedItem[]>([]);
  const { getToken, isSignedIn } = useAuth();

  const refresh = async () => {
    if (!isSignedIn) return;

    const token = await getToken();
    if (!token) return;

    const data = await likesService.getMyLikes(token);
    setItems(data);
  };

  useEffect(() => {
    refresh();
  }, [isSignedIn]);

  const grouped: Grouped = useMemo(() => {
    const out: Grouped = {
      Education: [],
      Music: [],
      "Fun Fact": [],
      Movies: [],
    };

    for (const item of items) {
      (out[item.category] ?? (out[item.category] = [])).push(item);
    }

    return out;
  }, [items]);

  const remove = async (id: string) => {
    const token = await getToken();
    if (!token) return;

    await likesService.removeLike(id, token);
    refresh();
  };

  const Section = ({ title }: { title: keyof Grouped | string }) => (
    <section className="liked-section">
      <h3 className="liked-heading">{title} liked items</h3>

      {grouped[title]?.length ? (
        <ul className="liked-list">
          {grouped[title].map((item) => (
            <li key={item.id} className="liked-item">
              <div className="meta">
                {item.url ? (
                  <a className="title" href={item.url} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                ) : (
                  <span className="title">{item.title}</span>
                )}

                {item.channel && (
                  <span className="channel">{item.channel}</span>
                )}
              </div>

              <button className="remove-btn" onClick={() => remove(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="liked-empty">No liked items.</div>
      )}
    </section>
  );

  return (
    <div className="liked-page">
      <h2 className="liked-title">Your Liked Items</h2>

      <Section title="Education" />
      <Section title="Music" />
      <Section title="Fun Fact" />
      <Section title="Movies" />
    </div>
  );
}
