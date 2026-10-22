import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-in">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.education}</span>
        <span className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">github</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
        </span>
      </div>
    </footer>
  );
}
