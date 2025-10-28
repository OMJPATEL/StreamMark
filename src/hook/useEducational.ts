import { useMemo, useState } from "react";
import { educationalService } from "../services/educationalService";
import type { EducationalItem } from "../testdata/educationalItems";

export function useEducational() {
  const [query, setQuery] = useState<string>("");
  const [topic, setTopic] = useState<string>("");

  const all = useMemo(() => educationalService.list(), []);
  const topics = useMemo(() => educationalService.listTopics(), []);

  const items: EducationalItem[] = useMemo(() => {
    let list = all;
    if (topic) list = educationalService.byTopic(topic);
    if (query) list = educationalService.search(query);
    return list;
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
