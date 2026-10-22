import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Missions } from "@/components/Missions";
import { SkillTree } from "@/components/SkillTree";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Console } from "@/components/Console";
import { Footer } from "@/components/Footer";
import { Toast } from "@/components/Toast";

// Set to false to drop the CRT scanline overlay.
const SCANLINES = true;

export default function Home() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      {SCANLINES && <div className="scan" aria-hidden="true" />}
      <Header />
      <main id="top" className="wrap">
        <Hero />
        <Missions />
        <SkillTree />
        <Projects />
        <Achievements />
        <Console />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
