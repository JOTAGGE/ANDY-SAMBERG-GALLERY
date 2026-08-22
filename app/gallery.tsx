"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Work = {
  slug: string; title: string; shortTitle: string; year: string; medium: string; role: string;
  image: string; foreground: string; character: string; foregroundScale?: number; accent: string; ink: string; muted: string;
  summary: string; quote: string; rating: string; audience: string; award: string; credits: string;
  watch: { label: string; href: string }[];
};

const works: Work[] = [
  {
    slug: "brooklyn-nine-nine", title: "Brooklyn Nine-Nine", shortTitle: "B99", year: "2013—2021", medium: "Series · 8 seasons",
    role: "Jake Peralta · Lead / Producer", character: "Jake Peralta", image: "/works/b99.jpg", foreground: "/andy/jake.png",
    accent: "#f5d800", ink: "#101e35", muted: "#e14b35",
    summary: "A brilliant but immature detective learns that the best cases are solved by a squad, not a lone cowboy. Samberg’s signature role turns procedural rhythm into warm, elastic comedy.",
    quote: "Cool. Cool cool cool cool cool.", rating: "95%", audience: "92%", award: "2× Golden Globe winner · 2014",
    credits: "Created by Dan Goor & Michael Schur · FOX / NBC · 153 episodes",
    watch: [
      { label: "Netflix", href: "https://www.netflix.com/search?q=Brooklyn%20Nine-Nine" },
      { label: "Prime Video", href: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=Brooklyn%20Nine-Nine" },
      { label: "Rotten Tomatoes", href: "https://www.rottentomatoes.com/tv/brooklyn_nine_nine" },
    ],
  },
  {
    slug: "palm-springs", title: "Palm Springs", shortTitle: "PALM", year: "2020", medium: "Film · 90 min",
    role: "Nyles · Lead / Producer", character: "Nyles", image: "/works/palm-springs.jpg", foreground: "/characters/nyles.png",
    accent: "#ff7c51", ink: "#173f4b", muted: "#f8ddb4",
    summary: "A wedding, an infinite time loop and a romance that keeps finding new ways to begin. Samberg gives the high-concept comedy its strange, bruised center.",
    quote: "Today, tomorrow, yesterday — it’s all the same.", rating: "95%", audience: "89%", award: "Critics Choice Super Award · Best Actor",
    credits: "Directed by Max Barbakow · Written by Andy Siara · Hulu / Neon",
    watch: [
      { label: "Disney+", href: "https://www.disneyplus.com/search?q=Palm%20Springs" },
      { label: "Hulu", href: "https://www.hulu.com/search?q=Palm%20Springs" },
      { label: "Rotten Tomatoes", href: "https://www.rottentomatoes.com/m/palm_springs_2020" },
    ],
  },
  {
    slug: "popstar", title: "Popstar", shortTitle: "POP★", year: "2016", medium: "Film · 87 min",
    role: "Conner4Real · Lead / Writer / Producer", character: "Conner4Real", image: "/works/popstar.jpg", foreground: "/characters/conner4real.png", foregroundScale: 1.14,
    accent: "#f2c45b", ink: "#24160f", muted: "#faebe0",
    summary: "A diamond-plated mockumentary about ego, algorithms and the catastrophic launch of a second album. The Lonely Island made a cult comedy hiding inside a pop spectacle.",
    quote: "Never stop never stopping.", rating: "79%", audience: "65%", award: "Certified Fresh · Cult favorite",
    credits: "Written by The Lonely Island · Directed by Akiva Schaffer & Jorma Taccone",
    watch: [
      { label: "Prime Video", href: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=Popstar%20Never%20Stop%20Never%20Stopping" },
      { label: "Apple TV", href: "https://tv.apple.com/search?term=Popstar%20Never%20Stop%20Never%20Stopping" },
      { label: "Rotten Tomatoes", href: "https://www.rottentomatoes.com/m/popstar_never_stop_never_stopping" },
    ],
  },
  {
    slug: "hot-rod", title: "Hot Rod", shortTitle: "ROD", year: "2007", medium: "Film · 88 min",
    role: "Rod Kimble · Lead", character: "Rod Kimble", image: "/works/hot-rod.jpg", foreground: "/characters/rod-kimble.png", foregroundScale: 1.25,
    accent: "#e33d2f", ink: "#10152e", muted: "#74baf1",
    summary: "An amateur stuntman attempts one impossible jump for the least sensible reason imaginable. Initially misunderstood, now quoted like scripture by a generation of comedy fans.",
    quote: "I’ve been drinking green tea all goddamn day!", rating: "39%", audience: "64%", award: "Cult status · Internet canon",
    credits: "Directed by Akiva Schaffer · Written by Pam Brady · Paramount Pictures",
    watch: [
      { label: "Netflix", href: "https://www.netflix.com/title/70058022" },
      { label: "Apple TV", href: "https://tv.apple.com/search?term=Hot%20Rod" },
      { label: "Rotten Tomatoes", href: "https://www.rottentomatoes.com/m/hot_rod" },
    ],
  },
  {
    slug: "snl", title: "Saturday Night Live", shortTitle: "SNL", year: "2005—2012", medium: "Television · 139 episodes",
    role: "Digital Short era · Cast / Writer", character: "SNL Digital Short Andy", image: "/works/snl.jpg", foreground: "/characters/snl-era.png", foregroundScale: 1.12,
    accent: "#60a9e8", ink: "#080f1b", muted: "#e1eef9",
    summary: "Seven seasons that helped move sketch comedy into the internet age. With The Lonely Island, Samberg made the Digital Short a cultural event and rewired how SNL traveled online.",
    quote: "Live from New York — and already viral.", rating: "1 Emmy", audience: "6 music nominations", award: "Outstanding Original Music & Lyrics · 2007",
    credits: "Created by Lorne Michaels · NBC · Digital Shorts with The Lonely Island",
    watch: [
      { label: "Peacock", href: "https://www.peacocktv.com/watch-online/tv/saturday-night-live/8885992813767211112" },
      { label: "NBC", href: "https://www.nbc.com/saturday-night-live" },
      { label: "Emmys", href: "https://www.televisionacademy.com/bios/andy-samberg" },
    ],
  },
  {
    slug: "celeste-jesse", title: "Celeste & Jesse Forever", shortTitle: "C+J", year: "2012", medium: "Film · 92 min",
    role: "Jesse Abrams · Lead", character: "Jesse Abrams", image: "/works/celeste-jesse.jpg", foreground: "/characters/jesse-abrams.png",
    accent: "#e8aa9e", ink: "#252822", muted: "#dce5bd",
    summary: "Two best friends try to stay close while their marriage comes apart. A smaller, tender performance that proved Samberg could let silence do some of the comedy’s work.",
    quote: "A love story about the part after love changes shape.", rating: "71%", audience: "62%", award: "Sundance selection · Certified Fresh",
    credits: "Directed by Lee Toland Krieger · Written by Rashida Jones & Will McCormack",
    watch: [
      { label: "Prime Video", href: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=Celeste%20and%20Jesse%20Forever" },
      { label: "Apple TV", href: "https://tv.apple.com/search?term=Celeste%20and%20Jesse%20Forever" },
      { label: "Rotten Tomatoes", href: "https://www.rottentomatoes.com/m/celeste_and_jesse_forever" },
    ],
  },
];

export default function Gallery() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [dragX, setDragX] = useState(0);
  const [portalExit, setPortalExit] = useState<"left" | "right" | null>(null);
  const lock = useRef(false);
  const dragStart = useRef<number | null>(null);
  const dragged = useRef(false);
  const suppressClick = useRef(false);
  const work = works[active];
  const go = useCallback((next: number) => {
    const safe = (next + works.length) % works.length;
    setDirection(safe > active || (active === works.length - 1 && safe === 0) ? 1 : -1);
    setActive(safe);
  }, [active]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(active + 1);
      if (event.key === "ArrowLeft") go(active - 1);
    };
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) < 35 || lock.current) return;
      lock.current = true; go(active + (event.deltaX > 0 ? 1 : -1));
      window.setTimeout(() => (lock.current = false), 700);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("wheel", onWheel); };
  }, [active, go]);

  const openAbout = useCallback((side: "left" | "right" = "right") => {
    if (portalExit) return;
    setPortalExit(side);
    window.setTimeout(() => router.push("/about"), 560);
  }, [portalExit, router]);

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    dragStart.current = event.clientX;
    dragged.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (dragStart.current === null) return;
    const delta = Math.max(-180, Math.min(180, event.clientX - dragStart.current));
    if (Math.abs(delta) > 5) dragged.current = true;
    setDragX(delta);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    suppressClick.current = dragged.current;
    dragStart.current = null;
    event.currentTarget.releasePointerCapture(event.pointerId);
    if (Math.abs(delta) >= 82) openAbout(delta < 0 ? "left" : "right");
    else setDragX(0);
  };

  return (
    <main id="top" className={`gallery${portalExit ? ` portal-exit exit-${portalExit}` : ""}`} style={{ "--accent": work.accent, "--ink": work.ink, "--muted": work.muted } as React.CSSProperties}>
      <section className="hero" aria-live="polite">
        <div key={`bg-${work.slug}`} className="hero-bg" style={{ backgroundImage: `url(${work.image})` }} />
        <div className="grain" aria-hidden="true" />
        <header className="topbar">
          <Link className="wordmark" href="/" aria-label="Andy Samberg Gallery home"><span>ANDY</span><span>SAMBERG</span></Link>
          <div className="edition">A living filmography<br />Issue № 01 / 2026</div>
          <Link className="about-link" href="/about">The person behind the characters ↗</Link>
        </header>

        <div className="hero-copy" key={`copy-${work.slug}`} data-direction={direction}>
          <p className="eyebrow">Selected work / {String(active + 1).padStart(2, "0")}</p>
          <h1>{work.title}</h1><p className="role">{work.role}</p>
        </div>

        <button
          type="button"
          className={`andy-portal character-${work.slug}`}
          style={{ "--drag-x": `${dragX}px`, "--character-scale": work.foregroundScale ?? 1 } as React.CSSProperties}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { dragStart.current = null; setDragX(0); }}
          onClick={() => {
            if (suppressClick.current) { suppressClick.current = false; return; }
            openAbout("right");
          }}
          aria-label={`Click or drag ${work.character} sideways to open Andy Samberg biography`}
        >
          <span className="pull-rail pull-rail-left" aria-hidden="true"><i>←</i><b>PULL</b></span>
          <img key={work.slug} src={work.foreground} alt={`Andy Samberg as ${work.character} in ${work.title}`} draggable="false" />
          <span className="pull-rail pull-rail-right" aria-hidden="true"><b>PULL</b><i>→</i></span>
          <span className="portal-label">CLICK OR PULL · ABOUT ANDY <b>↗</b></span>
        </button>

        <div className="hero-meta"><span>{work.year}</span><span>{work.medium}</span></div>
        <div className="slide-count"><strong>{String(active + 1).padStart(2, "0")}</strong><span>/ {String(works.length).padStart(2, "0")}</span></div>
      </section>

      <nav className="work-nav" aria-label="Selected projects">
        {works.map((item, index) => <button key={item.slug} className={index === active ? "active" : ""} onClick={() => go(index)} aria-label={`Show ${item.title}`} aria-current={index === active ? "page" : undefined}><span>{String(index + 1).padStart(2, "0")}</span><b>{item.shortTitle}</b></button>)}
      </nav>

      <section key={`details-${work.slug}`} className="details">
        <div className="details-lede"><p className="section-label">The work</p><blockquote>“{work.quote}”</blockquote></div>
        <div className="synopsis"><p>{work.summary}</p><small>{work.credits}</small></div>
        <div className="scores" aria-label="Ratings and awards">
          <div><span>Critics</span><strong>{work.rating}</strong></div><div><span>Audience</span><strong>{work.audience}</strong></div>
          <div className="award"><span>Recognition</span><strong>{work.award}</strong></div>
        </div>
        <div className="watch"><p className="section-label">Watch / Explore</p><div>{work.watch.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<span>↗</span></a>)}</div><p className="availability">Availability varies by region. Ratings retrieved Aug 2026.</p></div>
      </section>

      <section className="manifesto"><span>ACTOR</span><span>COMEDIAN</span><span>WRITER</span><span>PRODUCER</span><span>MUSICIAN</span></section>
      <footer><p>2026 Andy Samberg Gallery by NOMA</p><p>Unofficial editorial archive. Images belong to their respective owners.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
