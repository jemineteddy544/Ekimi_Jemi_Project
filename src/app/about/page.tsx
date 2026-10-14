import type { Metadata } from "next";
import Image from "next/image";
import Cta from "@/components/Cta";
import { about, community, founder, site, stats, values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: about.lead,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">About</span>
          <h1 className="display-xl reveal">
            {about.title.map((line) => (
              <span key={line} className="line">
                {line}
              </span>
            ))}
          </h1>
          <p className="lead reveal">{about.lead}</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container split">
          <div className="split-media reveal">
            <Image src={about.image} alt="Crane lifting a barge onto a low-bed trailer" fill preload sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="about-copy reveal">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <dl className="spec">
              <div>
                <dt>Incorporated</dt>
                <dd>
                  {site.founded} · CAC {site.rcNumber}
                </dd>
              </div>
              <div>
                <dt>Head office</dt>
                <dd>
                  {site.address.street}, {site.address.locality}, {site.address.region}
                </dd>
              </div>
              <div>
                <dt>Bases</dt>
                <dd>{site.branches.join(" · ")}</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>{stats.find((s) => s.label === "Professionals")?.value} professionals</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="container mission-grid">
          <div className="reveal">
            <span className="kicker">Mission</span>
            <p>{about.mission}</p>
          </div>
          <div className="reveal" style={{ "--delay": "120ms" } as React.CSSProperties}>
            <span className="kicker">Vision</span>
            <p>{about.vision}</p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="section">
        <div className="container founder">
          <div className="founder-media reveal">
            <Image src={founder.portrait} alt={founder.name} fill sizes="(max-width: 900px) 100vw, 35vw" />
          </div>
          <div className="founder-copy reveal">
            <span className="kicker">Meet the founder</span>
            <h2 className="display-md">{founder.name}</h2>
            <span className="mono muted">{founder.role}</span>
            {founder.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h3 className="mono small-head">Education & training</h3>
            <ul className="check-list">
              {founder.credentials.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section community">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Community</span>
              <h2 className="display-lg">{community.title}</h2>
            </div>
            <p className="section-note">{community.body}</p>
          </div>
          <div className="values">
            {community.items.map((c, i) => (
              <div key={c.title} className="value reveal" style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}>
                <span className="mono num">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <div className="goals reveal">
            <h3 className="mono small-head">Where we&apos;re going</h3>
            <ol>
              {community.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal" style={{ borderBottom: 0, paddingBottom: 0 }}>
            <div>
              <span className="kicker">Our standards</span>
              <h2 className="display-lg">How we work</h2>
            </div>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <div key={v.title} className="value reveal" style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}>
                <span className="mono num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
