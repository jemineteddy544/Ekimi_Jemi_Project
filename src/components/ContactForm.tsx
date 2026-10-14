"use client";

import Link from "next/link";
import { useState } from "react";
import { services, site } from "@/content/site";
import { whatsappLink } from "@/lib/url";

/**
 * Builds the enquiry into a WhatsApp message to Ekimi Jemy and opens WhatsApp
 * (app on phones, WhatsApp Web on desktop). Nothing is stored by the site.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const line = (label: string, key: string) => {
      const v = String(data.get(key) ?? "").trim();
      return v ? `${label}: ${v}` : null;
    };
    const text = [
      `Hello ${site.shortName}, I'd like a quote.`,
      "",
      line("Name", "name"),
      line("Company", "company"),
      line("Phone / email", "contact"),
      line("Service", "service"),
      line("Site location", "location"),
      line("Timeline", "timeline"),
      line("Details", "message"),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(whatsappLink(site.whatsapp, text), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company (optional)</label>
        <input id="company" name="company" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="contact">Phone or email</label>
        <input id="contact" name="contact" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.id}>{s.title}</option>
          ))}
          <option>Equipment lease</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="location">Site location</label>
        <input id="location" name="location" placeholder="e.g. Lekki, Lagos" />
      </div>
      <div className="field">
        <label htmlFor="timeline">Timeline</label>
        <select id="timeline" name="timeline" defaultValue="Within a month">
          <option>Urgent — this week</option>
          <option>Within a month</option>
          <option>1–3 months</option>
          <option>Just planning</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          placeholder="Scope, quantities, equipment needed, site access, duration…"
        />
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-signal">
          Send on WhatsApp
        </button>
      </div>
      <p className="form-note" aria-live="polite">
        {sent ? (
          "WhatsApp should now be open with your enquiry ready — just press send."
        ) : (
          <>
            Your enquiry opens in WhatsApp, ready to send. See our{" "}
            <Link href="/privacy">privacy policy</Link>.
          </>
        )}
      </p>
    </form>
  );
}
