"use client";

import { useEffect, useRef, useState } from "react";
import { missions, profile, projects, skills } from "@/lib/data";
import { useAchievements } from "./AchievementsProvider";

type Line = { k: "in" | "out" | "acc" | "err" | "dim"; t: string };

const o = (t: string): Line => ({ k: "out", t });
const a = (t: string): Line => ({ k: "acc", t });

function exec(c: string): Line[] {
  switch (c) {
    case "help":
      return [
        o("available commands:"),
        a("  whoami     who is this"),
        a("  missions   work history"),
        a("  skills     skill branches"),
        a("  projects   side quests"),
        a("  contact    how to reach me"),
        a("  hire       start the hiring protocol"),
        a("  clear      wipe the screen"),
      ];
    case "whoami":
      return [
        o(`${profile.name} — Software Engineer, React Native & full-stack.`),
        o("5+ years shipping. Founding engineer at Plena (now Noah)."),
        o(`${profile.location} · ${profile.availability}.`),
      ];
    case "missions":
    case "experience":
      return missions.map((m) => o(`[${m.status}] ${m.company} — ${m.role} (${m.dates})`));
    case "skills":
      return skills.map((s) => o(s.name.padEnd(13) + s.items.slice(0, 4).join(", ")));
    case "projects":
      return projects.map((p) => o(p.name.padEnd(8) + p.link));
    case "contact":
      return [
        a(`email     ${profile.email}`),
        a(`github    ${profile.github.replace("https://", "")}`),
        a(`linkedin  ${profile.linkedin.replace("https://", "")}`),
      ];
    case "hire":
      return [
        o("initiating hire protocol …"),
        o(`checking availability … ${profile.availability}`),
        a(`→ send a mission brief to ${profile.email}`),
      ];
    case "ls":
      return [o("missions/  skills/  projects/  achievements/  resume.pdf")];
    default:
      if (c.startsWith("sudo")) return [{ k: "err", t: "permission denied: nice try. root access is earned in interviews." }];
      return [{ k: "err", t: `command not found: ${c} — try help` }];
  }
}

const QUICK = ["help", "whoami", "skills", "projects", "contact", "hire"];

export function Console() {
  const { unlock } = useAchievements();
  const [cmd, setCmd] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { k: "dim", t: "arijeet-os v5.0 — interactive shell" },
    { k: "out", t: "Type help to list commands." },
  ]);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const run = (raw: string) => {
    const c = raw.trim().toLowerCase();
    if (!c) return;
    if (c === "clear") setLines([]);
    else setLines((ls) => [...ls, { k: "in" as const, t: `$ ${raw.trim()}` }, ...exec(c)].slice(-60));
    setCmd("");
    unlock("contact");
    if (c === "hire") setTimeout(() => unlock("hire"), 0);
    if (c.startsWith("sudo")) setTimeout(() => unlock("sudo"), 0);
  };

  return (
    <section id="console" aria-labelledby="console-h" className="section" style={{ paddingBottom: 96 }}>
      <div className="sec-head">
        <span className="eyebrow">// 05 — CONSOLE</span>
        <h2 id="console-h" className="h2">Talk to the machine</h2>
      </div>
      <div className="hud term">
        <div className="term-bar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot acc" />
          <span style={{ marginLeft: 10 }}>guest@arijeet: ~</span>
        </div>
        <div className="term-out" role="log" aria-live="polite" ref={outRef}>
          {lines.map((l, i) => (
            <p key={i} className={`ln ln-${l.k}`}>{l.t}</p>
          ))}
        </div>
        <form
          className="term-form"
          onSubmit={(e) => {
            e.preventDefault();
            run(cmd);
          }}
        >
          <label htmlFor="cmd" className="prompt">$</label>
          <input
            id="cmd"
            className="cmdinput"
            type="text"
            autoComplete="off"
            spellCheck={false}
            placeholder="type help and press enter"
            value={cmd}
            onChange={(e) => setCmd(e.target.value)}
          />
          <button className="btn" type="submit" style={{ minHeight: 40 }}>run ⏎</button>
        </form>
      </div>
      <div className="tabs">
        <span className="quick-label">quick:</span>
        {QUICK.map((q) => (
          <button key={q} className="tab" type="button" onClick={() => run(q)}>{q}</button>
        ))}
      </div>
    </section>
  );
}
