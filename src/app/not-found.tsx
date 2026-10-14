import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="container">
        <span className="kicker reveal">Error 404 — Page not found</span>
        <h1 className="display-xl reveal">
          <span className="line">Off the</span>
          <span className="line">survey map.</span>
        </h1>
        <p className="lead reveal">The page you&apos;re looking for has moved or doesn&apos;t exist.</p>
        <div className="not-found-actions reveal">
          <Link href="/" className="btn btn-signal">
            Back to home
          </Link>
          <Link href="/services" className="text-link">
            Our services →
          </Link>
        </div>
      </div>
    </section>
  );
}
