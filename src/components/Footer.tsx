import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/content/site";
import { whatsappLink } from "@/lib/url";
import Year from "./Year";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <div className="footer-brand">
              <span className="brand-badge">
                <Image src={site.logo} alt="" width={52} height={49} />
              </span>
              <span>
                {site.name}
                <small>{site.tagline}</small>
              </span>
            </div>
            <dl className="spec">
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
                <dt>Reg.</dt>
                <dd>CAC {site.rcNumber}</dd>
              </div>
            </dl>
          </div>
          {footer.groups.map((g) => (
            <div key={g.title}>
              <h4>{g.title}</h4>
              <ul>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4>Talk to us</h4>
            <ul>
              <li>
                <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <span>
            © <Year /> {site.name}. All rights reserved.
          </span>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <a href="#top">Back to top ↑</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
