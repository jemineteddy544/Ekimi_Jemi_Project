import Link from "next/link";
import { cta, site } from "@/content/site";
import { whatsappLink } from "@/lib/url";

/** Closing call-to-action band, shared by every page. */
export default function Cta() {
  return (
    <section className="cta">
      <div className="hazard" aria-hidden="true" />
      <div className="container cta-inner">
        <div className="reveal">
          <h2 className="display-lg">{cta.title}</h2>
          <p>{cta.body}</p>
        </div>
        <div className="cta-actions reveal">
          <Link href={cta.primary.href} className="btn btn-signal">
            {cta.primary.label}
          </Link>
          <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer" className="text-link">
            WhatsApp {site.phone} →
          </a>
        </div>
      </div>
    </section>
  );
}
