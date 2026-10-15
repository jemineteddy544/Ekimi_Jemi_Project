import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import Media from "@/components/Media";
import VideoGallery from "@/components/VideoGallery";
import {
  clients,
  fleet,
  fleetNote,
  hero,
  intro,
  projects,
  services,
  stats,
  values,
  videos,
} from "@/content/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  const [featured, ...rest] = projects;
  const lease = fleet.find((f) => f.lease);

  return (
    <>
      {/* Hero — full-bleed site footage */}
      <section className="hero">
        <Media src={hero.video.src} poster={hero.video.poster} preload />
        <div className="container hero-content">
          <span className="kicker reveal">{hero.eyebrow}</span>
          <h1 className="display-xl reveal" style={delay(120)}>
            {hero.title.map((line) => (
              <span key={line} className="line">
                {line}
              </span>
            ))}
          </h1>
          <div className="hero-bottom reveal" style={delay(240)}>
            <p>{hero.body}</p>
            <div className="hero-actions">
              <Link href={hero.primary.href} className="btn btn-primary">
                {hero.primary.label}
              </Link>
              <Link href={hero.secondary.href} className="text-link light">
                {hero.secondary.label} →
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-stamp mono" aria-hidden="true">
          <span>6.47° N · 3.57° E</span>
          <span>HQ — Ajah, Lagos</span>
        </div>
      </section>

      {/* Headline numbers */}
      <section className="stats" aria-label="Key figures">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className="stat reveal" style={delay(i * 80)}>
              <span className="mono">{s.label}</span>
              <strong>{s.value}</strong>
              <small>{s.note}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Intro statement */}
      <section className="section">
        <div className="container intro">
          <span className="kicker reveal">{intro.kicker}</span>
          <div>
            <p className="statement reveal">{intro.statement}</p>
            <div className="intro-body reveal">
              <p>{intro.body}</p>
              <Link href={intro.link.href} className="text-link">
                {intro.link.label} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services index */}
      <section className="section section-tight">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">01 — Services</span>
              <h2 className="display-lg">What we do</h2>
            </div>
            <Link href="/services" className="text-link">
              All services →
            </Link>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <Link
                key={s.id}
                href={`/services#${s.id}`}
                className="service-card reveal"
                style={delay((i % 4) * 90)}
              >
                <div className="service-media">
                  <Image src={s.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                </div>
                <span className="code mono">
                  {s.code}-{String(i + 1).padStart(2, "0")}
                </span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="section featured">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">02 — Featured project</span>
              <h2 className="display-lg">{featured.title}</h2>
            </div>
            <Link href="/projects" className="text-link light">
              All projects →
            </Link>
          </div>
          <div className="featured-grid">
            <div className="featured-main reveal">
              <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 900px) 100vw, 60vw" />
            </div>
            <div className="featured-side">
              {featured.figure && (
                <div className="figure reveal">
                  <strong>{featured.figure.value}</strong>
                  <span>{featured.figure.label}</span>
                </div>
              )}
              <p className="reveal">{featured.summary}</p>
              <dl className="spec reveal">
                <div>
                  <dt>Location</dt>
                  <dd>{featured.location}</dd>
                </div>
                <div>
                  <dt>Scope</dt>
                  <dd>{featured.scope}</dd>
                </div>
              </dl>
              <div className="featured-thumbs reveal">
                {featured.gallery?.map((g) => (
                  <div key={g} className="thumb">
                    <Image src={g} alt="" fill sizes="(max-width: 900px) 50vw, 20vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="section">
        <div className="container">
          <div className="project-row">
            {rest.slice(0, 3).map((p, i) => (
              <Link key={p.id} href={`/projects#${p.id}`} className="project-card reveal" style={delay(i * 110)}>
                <div className="project-media">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 700px) 100vw, 33vw" />
                  <span className="tag mono">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <span className="mono muted">{p.location}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet & lease */}
      {lease && (
        <section className="section lease">
          <div className="container lease-grid">
            <div className="lease-media reveal">
              <Image src={lease.image} alt={lease.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="stamp" aria-hidden="true">
                Available
                <br />
                for lease
              </span>
            </div>
            <div className="lease-copy reveal">
              <span className="kicker">03 — Fleet & lease</span>
              <h2 className="display-lg">{lease.name} available now.</h2>
              <p>{fleetNote}</p>
              <ul className="check-list">
                {fleet.map((f) => (
                  <li key={f.name}>
                    <strong>{f.name}</strong> — {f.detail}
                  </li>
                ))}
              </ul>
              <Link href="/services#fleet" className="btn btn-navy">
                View fleet
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Field footage */}
      <section className="section field-log">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">04 — Field log</span>
              <h2 className="display-lg">Straight from site</h2>
            </div>
          </div>
          <VideoGallery videos={videos} />
        </div>
      </section>

      {/* Values + clients */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal" style={{ borderBottom: 0, paddingBottom: 0 }}>
            <div>
              <span className="kicker">05 — How we work</span>
              <h2 className="display-lg">Why clients call us</h2>
            </div>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <div key={v.title} className="value reveal" style={delay(i * 90)}>
                <span className="mono num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
          <div className="clients reveal">
            <span className="mono">Equipment supplied to</span>
            <ul>
              {clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
