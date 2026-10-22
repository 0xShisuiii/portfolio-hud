"use client";

import { useAchievements } from "./AchievementsProvider";

const links = [
  ["#missions", "missions"],
  ["#skills", "skill_tree"],
  ["#projects", "projects"],
  ["#achievements", "achievements"],
  ["#console", "console"],
] as const;

export function Header() {
  const { count, total } = useAchievements();
  return (
    <header className="header">
      <div className="header-in">
        <a href="#top" className="logo">
          <span style={{ color: "var(--acc)" }}>AG</span>
          <span style={{ color: "var(--muted)" }}>://portfolio</span>
        </a>
        <nav aria-label="Sections" className="nav">
          {links.map(([href, label]) => (
            <a key={href} className="navlink" href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="counter">
          <span className="pulse" aria-hidden="true" />
          <span>
            {count}/{total} unlocked
          </span>
        </div>
      </div>
    </header>
  );
}
