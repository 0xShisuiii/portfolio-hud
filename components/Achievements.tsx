"use client";

import { achievements } from "@/lib/data";
import { useAchievements } from "./AchievementsProvider";

export function Achievements() {
  const { unlocked, count, total } = useAchievements();
  return (
    <section id="achievements" aria-labelledby="ach-h" className="section">
      <div className="sec-head">
        <span className="eyebrow">// 04 — ACHIEVEMENTS</span>
        <h2 id="ach-h" className="h2">Trophy case</h2>
      </div>

      <div className="hud trophy">
        <div className="trophy-icon">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 21h8" />
            <path d="M12 17v4" />
            <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
            <path d="M17 5h3v2a3 3 0 0 1-3 3" />
            <path d="M7 5H4v2a3 3 0 0 0 3 3" />
          </svg>
        </div>
        <div className="trophy-text">
          <span className="eyebrow" style={{ fontSize: 12 }}>LEGENDARY · EARNED IN THE WILD</span>
          <span className="trophy-title">Winner, Starknet Winter Hackathon 2025</span>
          <span className="trophy-sub">
            Also co-founder of RogueDevs — a nonprofit collective of web3 and gaming developers who ship products and compete in hackathons.
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <span className="label">VISITOR ACHIEVEMENTS — {count}/{total}</span>
        <div className="achs">
          {achievements.map((a) => {
            const on = !!unlocked[a.id];
            return (
              <div key={a.id} className={on ? "ach on" : "ach"}>
                <span className="badge" aria-hidden="true">{a.icon}</span>
                <span style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                  <span className="ach-name">{a.name}</span>
                  <span className="ach-hint">{on ? a.hint : `Locked — ${a.hint}`}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
