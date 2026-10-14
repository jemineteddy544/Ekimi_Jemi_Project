import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/url";

export const metadata: Metadata = {
  title: "Contact & Quotes",
  description: `Request a quote from ${site.name} for dredging, piling, equipment haulage, lease or marine supply.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker reveal">Contact</span>
          <h1 className="display-xl reveal">
            <span className="line">Tell us</span>
            <span className="line">about the job.</span>
          </h1>
          <p className="lead reveal">
            Share the scope, site and timeline. Your enquiry goes straight to our team on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div id="quote" className="container contact-grid">
          <div className="contact-info reveal">
            <span className="kicker">Direct lines</span>
            <dl className="spec spec-lg">
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={whatsappLink(site.whatsapp)} target="_blank" rel="noreferrer">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Call</dt>
                <dd>
                  <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Head office</dt>
                <dd>
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.region}
                </dd>
              </div>
              <div>
                <dt>Bases</dt>
                <dd>{site.branches.join(" · ")}</dd>
              </div>
            </dl>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
