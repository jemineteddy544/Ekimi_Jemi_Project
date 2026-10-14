# Ekimi Jemy Nig. Ltd. — website

Next.js site for **Ekimi Jemy Nig. Ltd.** (RC 1006872): marine equipment, dredging & reclamation,
shoreline piling, heavy-equipment haulage & lease, and construction. HQ: Addo Road, Ajah, Lagos.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

No environment variables are required. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used
automatically for canonical URLs, the sitemap and social previews (`src/lib/url.ts`).

## Project structure

```
src/
  app/                 Routes (App Router)
    page.tsx           Home
    services/          Services + fleet & lease (#fleet)
    projects/          Project case studies
    about/             Company, mission/vision, founder, community
    contact/           Quote form (sends via WhatsApp) + contact details
    privacy/           Privacy policy (NDPA 2023)
    icon.tsx           Favicon, generated
    opengraph-image.tsx  Social share image, generated
    sitemap.ts, robots.ts
    globals.css        All styling — design tokens at the top
  components/          Header, Footer, Media, VideoGallery, ContactForm, Cta, Year
  content/site.ts      ← ALL copy, contact details, services, projects, media paths
  lib/url.ts           Site URL + WhatsApp link helper
public/
  images/              Web-ready photos (+ posters/ for video thumbnails)
  media/               Short site videos (.mp4)
assets/                Fonts used to render the favicon and OG image
source-material/       Raw client files (PDF profile, WhatsApp exports) — git-ignored
```

## Editing content

Everything a client would ask to change lives in **`src/content/site.ts`**:

- **Contact / address / RC number:** the `site` object at the top.
- **Services:** `services` — each has an `id` used for `/services#id` anchors.
- **Projects:** `projects` — add `figure` for a headline number and `gallery` for extra photos.
- **Fleet & lease:** `fleet` — set `lease: true` only for equipment confirmed available.
- **Videos:** `videos` — drop the `.mp4` into `public/media/` and a poster into `public/images/posters/`.
- **Hero video:** `hero.video.src`. Leave empty to show the poster photo with a slow zoom.

Search the file for `TODO` to see items still waiting on the client.

## Media notes

Photos and videos came via WhatsApp, so they're compressed (~1080 px photos, 576 px videos).
For sharper hero and project images, ask for originals from the phone/camera and replace the
files in `public/images` with the same names. A vector (SVG) version of the dolphin logo would
also replace `public/images/logo.png`, which was cropped from the PDF profile.
