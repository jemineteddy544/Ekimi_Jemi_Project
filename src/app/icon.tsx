import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Read at module level so the icon is rendered once at build time.
const display = await readFile(join(process.cwd(), "assets/BarlowCondensed-SemiBold.ttf"));

/** Browser-tab icon: "EJ" monogram on brand navy with a light-blue rule. */
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1f4d",
          borderRadius: 12,
          color: "#ffffff",
          fontFamily: "Barlow Condensed",
          fontSize: 36,
          letterSpacing: 1,
        }}
      >
        EJ
        <div style={{ width: 30, height: 5, marginTop: 2, background: "#8fb3f5" }} />
      </div>
    ),
    { ...size, fonts: [{ name: "Barlow Condensed", data: display, style: "normal", weight: 600 }] }
  );
}
