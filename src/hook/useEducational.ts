import { useEffect, useState } from "react";
import { educationalService } from "../services/educationalService";
import type { EducationalItem } from "../repositories/educationalRepository"; 

export function useEducational() {
  const [query, setQuery] = useState<string>("");
  const [topic, setTopic] = useState<string>("");

  const [all, setAll] = useState<EducationalItem[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [items, setItems] = useState<EducationalItem[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await educationalService.getEducational(); 
      setAll(data);

      const uniqueTopics = Array.from(
        new Set(data.map((i) => i.topic).filter(Boolean))
      );
      setTopics(uniqueTopics as string[]);
    };

    load();
  }, []);

  useEffect(() => {
    let list = all;

    if (topic) {
      list = all.filter((i) => i.topic?.toLowerCase() === topic.toLowerCase());
    }

    if (query) {
      list = list.filter((i) =>
        i.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setItems(list);
  }, [all, topic, query]);

  return {
    query,
    setQuery,
    topic,
    setTopic,
    topics,
    items,
  };
}
