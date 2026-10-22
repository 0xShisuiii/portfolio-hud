import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-h" className="section">
      <div className="sec-head">
        <span className="eyebrow">// 03 — SIDE QUESTS</span>
        <h2 id="projects-h" className="h2">Selected projects</h2>
      </div>
      <div className="cards">
        {projects.map((p) => (
          <a key={p.name} className="card" href={p.href} target="_blank" rel="noreferrer">
            <div className="card-top">
              <span>{p.tag}</span>
              <span className="arrow" aria-hidden="true">↗</span>
            </div>
            <span className="card-name">{p.name}</span>
            <p className="card-desc">{p.desc}</p>
            <div className="stack">
              {p.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <span className="card-link">{p.link}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
