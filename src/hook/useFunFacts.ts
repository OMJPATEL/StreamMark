import { useState, useEffect } from "react";
import { funFactsService } from "../services/funFactsService";
import type { FunFact } from "../repositories/funFactsRepository";

export function useFunFacts() {
  const [groupedFacts, setGroupedFacts] = useState<Record<string, FunFact[]>>({});

  useEffect(() => {
    funFactsService.getAll().then((list) => {
      const grouped = list.reduce((acc: Record<string, FunFact[]>, item: FunFact) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {});
      setGroupedFacts(grouped);
    });
  }, []);
 
  return { funfacts: groupedFacts };
}
