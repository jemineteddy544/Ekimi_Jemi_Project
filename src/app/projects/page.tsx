import type { Metadata } from "next";
import Image from "next/image";
import Cta from "@/components/Cta";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Ekimi Jemy: 1.5 km of shoreline piling and land reclamation in Ajah, a marine school in Ilaje, a community jetty in Arogbo and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">Projects</span>
          <h1 className="display-xl reveal">
            <span className="line">Work on</span>
            <span className="line">the record.</span>
          </h1>
          <p className="lead reveal">
            Selected projects across Lagos and Ondo State, from lagoon shorelines to riverine communities.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container project-list">
          {projects.map((p, i) => (
            <article key={p.id} id={p.id} className="project-entry">
              <header className="project-entry-head reveal">
                <span className="mono muted">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <span className="tag mono">{p.category}</span>
              </header>
              <div className="project-entry-body">
                <div className="project-entry-media reveal">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 55vw" />
                </div>
                <div className="project-entry-copy reveal">
                  <h2 className="display-md">{p.title}</h2>
                  <p>{p.summary}</p>
                  {p.figure && (
                    <div className="figure">
                      <strong>{p.figure.value}</strong>
                      <span>{p.figure.label}</span>
                    </div>
                  )}
                  <dl className="spec">
                    <div>
                      <dt>Location</dt>
                      <dd>{p.location}</dd>
                    </div>
                    <div>
                      <dt>Scope</dt>
                      <dd>{p.scope}</dd>
                    </div>
                  </dl>
                  {p.gallery && (
                    <div className="project-thumbs">
                      {p.gallery.map((g) => (
                        <div key={g} className="thumb">
                          <Image src={g} alt="" fill sizes="(max-width: 900px) 33vw, 12vw" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
