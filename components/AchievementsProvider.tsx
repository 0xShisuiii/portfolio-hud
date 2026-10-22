"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { achievements, type AchievementId } from "@/lib/data";

type Ctx = {
  unlocked: Partial<Record<AchievementId, true>>;
  unlock: (id: AchievementId) => void;
  toast: AchievementId | null;
};

const AchievementsContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "ag-portfolio:achievements";

export function AchievementsProvider({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<Ctx["unlocked"]>({});
  const [toast, setToast] = useState<AchievementId | null>(null);
  const unlockedRef = useRef(unlocked);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Restore progress for returning visitors.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Ctx["unlocked"];
        unlockedRef.current = saved;
        setUnlocked(saved);
      }
    } catch {
      /* storage unavailable — progress just won't persist */
    }
  }, []);

  const unlock = useCallback((id: AchievementId) => {
    if (unlockedRef.current[id]) return;
    const next = { ...unlockedRef.current, [id]: true as const };
    unlockedRef.current = next;
    setUnlocked(next);
    setToast(id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3600);
  }, []);

  // "System Online" on first load.
  useEffect(() => {
    const t = setTimeout(() => unlock("boot"), 900);
    return () => {
      clearTimeout(t);
      clearTimeout(timer.current);
    };
  }, [unlock]);

  return (
    <AchievementsContext.Provider value={{ unlocked, unlock, toast }}>
      {children}
    </AchievementsContext.Provider>
  );
}

export function useAchievements() {
  const ctx = useContext(AchievementsContext);
  if (!ctx) throw new Error("useAchievements must be used inside AchievementsProvider");
  const count = achievements.filter((a) => ctx.unlocked[a.id]).length;
  return { ...ctx, count, total: achievements.length };
}
