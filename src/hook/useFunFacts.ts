import { useState, useEffect } from "react";
import { funFactsService } from "../services/funFactsService";
import type { FunFact } from "../repositories/funFactsRepository";

type FunFactData = Record<string, FunFact[]>;

export function useFunFacts() {
  const [funfacts, setFunfacts] = useState<FunFactData>({});

  useEffect(() => {
    const data = funFactsService.getAll();
    setFunfacts(data);
  }, []);

  return { funfacts };
}
