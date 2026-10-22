"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import { useAchievements } from "./AchievementsProvider";

export function SkillTree() {
  const { unlock } = useAchievements();
  const [cat, setCat] = useState(0);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0]));
  const cur = skills[cat];

  const pick = (i: number) => {
    setCat(i);
    const next = new Set(seen).add(i);
    setSeen(next);
    if (next.size >= skills.length) unlock("polyglot");
  };

  return (
    <section id="skills" aria-labelledby="skills-h" className="section">
      <div className="sec-head">
        <span className="eyebrow">// 02 — SKILL TREE</span>
        <h2 id="skills-h" className="h2">Loadout</h2>
      </div>
      <div role="tablist" aria-label="Skill branches" className="tabs">
        {skills.map((s, i) => (
          <button
            key={s.name}
            id={`tab-${i}`}
            className={i === cat ? "tab on" : "tab"}
            type="button"
            role="tab"
            aria-selected={i === cat}
            aria-controls="skill-panel"
            onClick={() => pick(i)}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div className="hud branch" role="tabpanel" id="skill-panel" aria-labelledby={`tab-${cat}`}>
        <div className="branch-info">
          <span className="label">BRANCH</span>
          <span className="branch-name">{cur.name}</span>
          <p className="branch-blurb">{cur.blurb}</p>
          <p className="branch-where">deployed at: {cur.where}</p>
        </div>
        <div className="chips">
          {cur.items.map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
