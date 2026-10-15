import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/Cta";
import { fleet, fleetNote, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services & Fleet",
  description:
    "Dredging and land reclamation, shoreline piling, heavy-equipment haulage and lease, marine supply, geotechnical investigation and construction across Nigeria.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">Services</span>
          <h1 className="display-xl reveal">
            <span className="line">Plant, people</span>
            <span className="line">and know-how.</span>
          </h1>
          <p className="lead reveal">
            Eight lines of work, one team. We supply the equipment, move it to site and put it to work.
          </p>
          <nav className="jump reveal" aria-label="Jump to service">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="mono">
                {s.code}
              </a>
            ))}
            <a href="#fleet" className="mono">
              FLEET
            </a>
          </nav>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container service-list">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className="service-row">
              <div className="service-row-media reveal">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 900px) 100vw, 45vw" />
              </div>
              <div className="service-row-copy reveal">
                <span className="code mono">
                  {s.code}-{String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display-md">{s.title}</h2>
                <p>{s.body}</p>
                <ul className="check-list">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link href="/contact#quote" className="text-link">
                  Enquire about {s.title.toLowerCase()} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="fleet" className="section lease">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Fleet & lease</span>
              <h2 className="display-lg">On the water and on the road</h2>
            </div>
            <p className="section-note">{fleetNote}</p>
          </div>
          <div className="fleet-grid">
            {fleet.map((f, i) => (
              <div key={f.name} className="fleet-card reveal" style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}>
                <div className="fleet-media">
                  <Image src={f.image} alt={f.name} fill sizes="(max-width: 700px) 100vw, 25vw" />
                  {f.lease && <span className="tag tag-accent mono">For lease</span>}
                </div>
                <h3>{f.name}</h3>
                <p>{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
