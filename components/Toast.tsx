"use client";

import { achievements } from "@/lib/data";
import { useAchievements } from "./AchievementsProvider";

export function Toast() {
  const { toast } = useAchievements();
  const a = achievements.find((x) => x.id === toast);
  return (
    <div role="status" aria-live="polite">
      {a && (
        <div className="toast" key={a.id}>
          <span className="toast-badge" aria-hidden="true">{a.icon}</span>
          <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span className="toast-kicker">ACHIEVEMENT UNLOCKED</span>
            <span className="toast-name">{a.name}</span>
            <span className="ach-hint">{a.hint}</span>
          </span>
        </div>
      )}
    </div>
  );
}
