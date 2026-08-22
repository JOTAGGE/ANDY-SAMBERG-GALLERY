import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Andy Samberg — Andy Samberg Gallery",
  description: "Actor, comedian, writer, producer, musician and one third of The Lonely Island.",
};

const timeline = [
  ["1978", "Born David Andrew J. Samberg in Berkeley, California."],
  ["2001", "The Lonely Island begins releasing self-produced comedy shorts online."],
  ["2005", "Joins Saturday Night Live as a featured player and writer."],
  ["2007", "Wins an Emmy for Outstanding Original Music and Lyrics for a Digital Short."],
  ["2013", "Begins an eight-season run as Jake Peralta in Brooklyn Nine-Nine."],
  ["2014", "Wins the Golden Globe for Best Actor in a TV Comedy or Musical."],
  ["2020", "Stars in and produces Palm Springs, earning Golden Globe nominations."],
  ["2023—", "Co-creates and voices the title character in Digman! while continuing film, television and music work."],
];

const disciplines = ["Actor", "Comedian", "Writer", "Producer", "Musician", "Director", "Voice artist"];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-topbar">
        <Link className="wordmark" href="/"><span>ANDY</span><span>SAMBERG</span></Link>
        <p>Biography / Archive note</p>
        <Link href="/">← Return to the gallery</Link>
      </header>

      <section className="about-hero">
        <div className="about-title"><p>David Andrew J. Samberg</p><h1>FUNNY<br /><i>BY</i><br />DESIGN.</h1></div>
        <figure><img src="/andy/portrait.jpg" alt="Andy Samberg smiling at a press event" /><figcaption>Actor · Comedian · Musician<br />Berkeley, California · 1978</figcaption></figure>
        <div className="about-intro"><p className="section-label">The short version</p><p>Andy Samberg is an American actor, comedian, musician, writer and producer whose career connects homemade internet comedy, live television, studio film and some very committed nonsense.</p></div>
      </section>

      <section className="bio-grid">
        <div className="bio-lede"><span>01</span><h2>From a small island<br />to everywhere.</h2></div>
        <div className="bio-copy">
          <p>Born in Berkeley in 1978, Samberg studied experimental film and began making comedy videos with childhood friends Akiva Schaffer and Jorma Taccone. Together they became The Lonely Island, posting shorts online before online video had settled into its modern shape.</p>
          <p>That work brought the trio to <em>Saturday Night Live</em> in 2005. Their SNL Digital Shorts — compressed, musical and built to travel — helped translate a television institution into the language of the web. Samberg stayed as a cast member and writer through 2012.</p>
          <p>From 2013 to 2021, he played detective Jake Peralta in <em>Brooklyn Nine-Nine</em>, also serving as a producer. The performance won him the 2014 Golden Globe for Best Actor in a Television Series, Musical or Comedy. His film work ranges from full-tilt cult comedy to quieter romance and animation.</p>
        </div>
      </section>

      <section className="disciplines" aria-label="Disciplines">{disciplines.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2,"0")}</span><strong>{item}</strong></div>)}</section>

      <section className="timeline-section">
        <div className="timeline-heading"><p className="section-label">Selected chronology</p><h2>A career in<br />controlled chaos.</h2></div>
        <div className="timeline">{timeline.map(([year, text]) => <article key={year}><time>{year}</time><p>{text}</p></article>)}</div>
      </section>

      <section className="awards-strip">
        <div><strong>1</strong><span>Golden Globe<br />acting win</span></div>
        <div><strong>1</strong><span>Primetime Emmy<br />music win</span></div>
        <div><strong>8</strong><span>Seasons as<br />Jake Peralta</span></div>
        <div><strong>25+</strong><span>Years of<br />creative work</span></div>
      </section>

      <section className="sources">
        <p className="section-label">Sources & further reading</p>
        <div><a href="https://en.wikipedia.org/wiki/Andy_Samberg" target="_blank" rel="noreferrer">Biography & filmography · Wikipedia ↗</a><a href="https://www.televisionacademy.com/bios/andy-samberg" target="_blank" rel="noreferrer">Awards profile · Television Academy ↗</a><a href="https://goldenglobes.com/tv-show/brooklyn-nine-nine/" target="_blank" rel="noreferrer">Golden Globe record ↗</a><a href="https://www.thelonelyisland.com/" target="_blank" rel="noreferrer">The Lonely Island · Official site ↗</a></div>
      </section>

      <footer><p>2026 Andy Samberg Gallery by NOMA</p><p>Unofficial editorial archive. Images belong to their respective owners.</p><Link href="/">Enter the gallery →</Link></footer>
    </main>
  );
}
