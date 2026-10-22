"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_/[]{}=+*^?#01█▓▒░$%&";
const FLICKER: Record<number, string> = { 2: " fl1", 5: " fl3", 9: " fl2" };

type Props = { first: string; last: string };

export function ScrambleName({ first, last }: Props) {
  const total = first.length + last.length;
  // Start fully revealed so the server render and no-JS view show the real name.
  const [rev, setRev] = useState(total);
  const [, setTick] = useState(0);
  const interval = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const revRef = useRef(total);

  const scramble = useCallback(() => {
    clearInterval(interval.current);
    revRef.current = 0;
    setRev(0);
    interval.current = setInterval(() => {
      revRef.current = Math.min(total, revRef.current + 0.34);
      setRev(revRef.current);
      setTick((t) => t + 1);
      if (revRef.current >= total) clearInterval(interval.current);
    }, 45);
  }, [total]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = reduce ? undefined : setTimeout(scramble, 350);
    return () => {
      clearTimeout(t);
      clearInterval(interval.current);
    };
  }, [scramble]);

  const letters = (word: string, offset: number) =>
    word.split("").map((ch, i) => {
      const g = offset + i;
      if (g >= Math.floor(rev)) {
        return <span key={i} className="lt scr">{GLYPHS[Math.floor(Math.random() * GLYPHS.length)]}</span>;
      }
      return <span key={i} className={"lt" + (FLICKER[g] ?? "")}>{ch}</span>;
    });

  return (
    <h1
      id="hero-name"
      className="name"
      aria-label={`${first} ${last}`}
      onMouseEnter={() => {
        if (revRef.current >= total) scramble();
      }}
    >
      <span aria-hidden="true">{letters(first, 0)}</span>
      <br />
      <span aria-hidden="true" className="last">{letters(last, first.length)}</span>
    </h1>
  );
}
