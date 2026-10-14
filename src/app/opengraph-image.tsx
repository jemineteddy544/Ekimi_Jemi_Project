import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} — marine equipment, dredging, piling and heavy-equipment haulage in Nigeria`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview image shown when the site is shared on WhatsApp, LinkedIn, X, etc. */
export default async function OpengraphImage() {
  const root = process.cwd();
  const [display, body, mono, photo, logo] = await Promise.all([
    readFile(join(root, "assets/BarlowCondensed-SemiBold.ttf")),
    readFile(join(root, "assets/Barlow-Medium.ttf")),
    readFile(join(root, "assets/IBMPlexMono-Medium.ttf")),
    readFile(join(root, "public/images/tug-and-barge.jpg")),
    readFile(join(root, "public/images/logo.png")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0a1f4d" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 56px 52px 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                background: "#ffffff",
                borderRadius: 999,
                padding: 8,
              }}
            >
              <img src={logoSrc} alt="" width={64} height={61} />
            </div>
            <div style={{ display: "flex", fontFamily: "Plex Mono", fontSize: 18, letterSpacing: 3, color: "#f5b301" }}>
              {`EST. ${site.founded} · ${site.rcNumber}`}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", color: "#ffffff" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Barlow Condensed",
                fontSize: 108,
                lineHeight: 0.92,
                textTransform: "uppercase",
              }}
            >
              Ekimi Jemy
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Barlow Condensed",
                fontSize: 52,
                lineHeight: 1.1,
                textTransform: "uppercase",
                color: "#f5b301",
              }}
            >
              {"Engineering at the water's edge"}
            </div>
            <div style={{ display: "flex", marginTop: 22, fontFamily: "Barlow", fontSize: 24, color: "#c3cde3" }}>
              Marine equipment · Dredging · Piling · Heavy-equipment haulage
            </div>
          </div>
          <div style={{ display: "flex", fontFamily: "Plex Mono", fontSize: 18, letterSpacing: 2, color: "#ffffff" }}>
            LAGOS · ONDO · DELTA — NIGERIA
          </div>
        </div>
        <img src={photoSrc} alt="" width={400} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Barlow Condensed", data: display, style: "normal", weight: 600 },
        { name: "Barlow", data: body, style: "normal", weight: 500 },
        { name: "Plex Mono", data: mono, style: "normal", weight: 500 },
      ],
    }
  );
}
