"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { VideoItem } from "@/content/site";

function PlayIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 18 20" aria-hidden="true">
      <path d="M17 10 1 19V1z" fill="currentColor" />
    </svg>
  );
}

/** Portrait clips from site, opened in a lightbox player. */
export default function VideoGallery({ videos }: { videos: VideoItem[] }) {
  const [active, setActive] = useState<VideoItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="video-grid">
        {videos.map((v, i) => (
          <button
            key={v.src}
            className="video-card reveal"
            style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
            onClick={() => setActive(v)}
            aria-label={`Play: ${v.title}`}
          >
            <Image src={v.poster} alt="" fill sizes="(max-width: 800px) 50vw, 25vw" />
            <span className="video-tag mono">
              REC · {v.length}
            </span>
            <span className="play">
              <PlayIcon />
            </span>
            <span className="video-caption">{v.title}</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button className="modal-close" aria-label="Close video" onClick={() => setActive(null)} autoFocus>
            ×
          </button>
          <div className="modal-frame" onClick={(e) => e.stopPropagation()}>
            <video src={active.src} poster={active.poster} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </>
  );
}
