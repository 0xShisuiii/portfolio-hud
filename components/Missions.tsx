"use client";

import { useState } from "react";
import { missions } from "@/lib/data";
import { useAchievements } from "./AchievementsProvider";

export function Missions() {
  const { unlock } = useAchievements();
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) => {
    setOpen((o) => ({ ...o, [i]: !o[i] }));
    const next = new Set(seen).add(i);
    setSeen(next);
    if (next.size >= missions.length) unlock("archivist");
  };

  return (
    <section id="missions" aria-labelledby="missions-h" className="section">
      <div className="sec-head">
        <span className="eyebrow">// 01 — MISSION LOG</span>
        <h2 id="missions-h" className="h2">Where I&apos;ve shipped</h2>
        <p className="sec-sub">Open each log to read the debrief.</p>
      </div>
      <div className="missions">
        {missions.map((m, i) => {
          const isOpen = !!open[i];
          const bodyId = `mission-${i}`;
          return (
            <div key={m.company} className={isOpen ? "mission open" : "mission"}>
              <button className="mbtn" type="button" onClick={() => toggle(i)} aria-expanded={isOpen} aria-controls={bodyId}>
                <span className="m-idx">0{i + 1}</span>
                <span className="m-title">
                  <span className="m-company">{m.company}</span>
                  <span className="m-role">{m.role}</span>
                </span>
                <span className="m-dates">{m.dates}</span>
                <span className={m.status === "ACTIVE" ? "m-status active" : "m-status"}>{m.status}</span>
                <span className="m-sign" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="m-body" id={bodyId}>
                  <p className="m-brief">{m.brief}</p>
                  <ul className="m-points">
                    {m.points.map((p) => (
                      <li key={p.k}>
                        <span className="tick" aria-hidden="true">▸</span>
                        <span>
                          <strong>{p.k}</strong> {p.v}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
