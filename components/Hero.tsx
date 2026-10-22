"use client";

import { profile, stats } from "@/lib/data";
import { useAchievements } from "./AchievementsProvider";
import { ScrambleName } from "./ScrambleName";

export function Hero() {
  const { count, total } = useAchievements();
  const pct = Math.round((count / total) * 100);

  return (
    <section aria-labelledby="hero-name" className="hero">
      <div className="hero-main">
        <div className="boot">
          <p className="ln">&gt; booting arijeet.ghosh … <span className="ok">ok</span></p>
          <p className="ln">&gt; modules: react-native · agents · mcp · web3 · infra … <span className="ok">ok</span></p>
          <p className="ln">
            &gt; location: {profile.location} · {profile.availability}
            <span className="cursor" aria-hidden="true" />
          </p>
        </div>
        <div>
          <ScrambleName first={profile.first} last={profile.last} />
        </div>
        <p className="role">{profile.role}</p>
        <p className="summary">{profile.summary}</p>
        <div className="cta">
          <a className="btn primary" href="#console">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            Open console
          </a>
          <a className="btn" href={`mailto:${profile.email}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            Email
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      <aside className="hud stats" aria-label="Player stats">
        <div className="stats-top label">
          <span>PLAYER_STATS</span>
          <span className="ok">● ONLINE</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span className="label">CLASS</span>
          <span className="class-name">Full-Stack · Mobile · Agents</span>
        </div>
        <div className="stat-row">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-v">{s.value}</div>
              <div className="stat-l">{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="label" style={{ display: "flex", justifyContent: "space-between" }}>
            <span>EXPLORATION</span>
            <span>{count}/{total}</span>
          </div>
          <div className="bar" role="progressbar" aria-label="Exploration progress" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
            <div style={{ width: `${pct}%` }} />
          </div>
        </div>
      </aside>
    </section>
  );
}
