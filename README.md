# Ibrahim Elmakky — Photographer & Videographer Portfolio

A bilingual (Arabic / English) editorial portfolio positioning Ibrahim as a
visual content creator for brands, businesses, and individuals — not a
generic freelance photographer page. Built with React + Vite.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To build the production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

## The ONE file you need to edit

**`src/data/content.js`**

Every piece of text — Ibrahim's name, bio, date of birth, WhatsApp number,
email, social links, services, brands/clients, and every image/video — lives
in this single file. Text is written as `{ ar: "...", en: "..." }` so both
languages stay in sync.

### Adding photos and videos to a brand project

1. Drop your image/video files into `public/media/`.
2. Open `src/data/content.js`, find the `brands` array, find the brand
   (e.g. `sodic`), and add entries to its `media` array:
   ```js
   media: [
     { type: 'image', src: '/media/sodic-01.jpg', alt: 'SODIC — campaign image' },
     { type: 'video', src: 'https://www.youtube.com/watch?v=...', poster: '/media/sodic-poster.jpg' },
   ]
   ```
3. Videos accept a local MP4 path, a YouTube link, or a Vimeo link.
   `poster` is the still shown before a video plays.

Brands with an empty `media` array automatically show a clean "coming soon"
placeholder instead of a broken gallery — no fake stock photography is used
anywhere on the site.

### Adding a new brand / client

Copy one existing object in the `brands` array in `content.js`, paste it as
a new entry, and fill in the details. It automatically appears in both the
**Selected Work** case-study section and the **Clients** strip.

### Editing services

The `services` array holds all 8 service offerings (name, description, and
"best for" tags). Edit any entry directly — no component changes needed.

## Project structure

```
src/
  data/content.js              ← edit this for all text, links, brands, services & media
  context/LanguageContext.jsx  ← AR/EN + RTL/LTR switching
  hooks/useReveal.js           ← scroll-reveal animation helper
  components/
    Header.jsx / header.css          ← sticky nav + language switcher + mobile menu
    Hero.jsx / hero.css              ← name, positioning statement, CTAs
    About.jsx / about.css            ← profile, bio paragraphs, editorial images
    Services.jsx / services.css      ← the 8 service offerings as editorial cards
    MarketingConnection.jsx / .css   ← visual flow showing where production fits
    Work.jsx                         ← renders the list of BrandProject sections
    BrandProject.jsx / .css          ← one reusable brand/client case study
    MediaCarousel.jsx / .css         ← mixed photo+video gallery (swipe, keyboard, fullscreen)
    Clients.jsx / clients.css        ← "worked with" brand strip
    Contact.jsx / .css               ← WhatsApp + Email CTAs, Instagram, Behance
    Footer.jsx / .css
  styles/global.css            ← design tokens (colors, type, spacing) + shared styles
public/
  media/                        ← all images/videos live here
  favicon.svg
```

## Site structure

1. Home / Hero — name, positioning, CTAs (View Selected Work / Start a Project via WhatsApp)
2. About — profile, full bilingual biography, "Emotion. Memory. Soul." pull quote
3. Services — 8 offerings framed around brand/social/campaign content
4. Where This Fits — a short flow showing Ibrahim's role in a brand's content pipeline
5. Selected Work — real brand case studies (Eagle, SODIC, Harby Group, Tidy, Coded, Hottzz), ready for real media
6. Clients — a simple "worked with" list of the same brands
7. Contact — WhatsApp, Email, Instagram, Behance
8. Footer

## Deploying (free, no backend needed)

This is a static site — no database, no authentication, no server required.

### Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy.

### Netlify
1. Push this project to GitHub (or drag-and-drop the `dist` folder after
   running `npm run build`).
2. Build command: `npm run build`. Publish directory: `dist`.

## Notes

- Default language is Arabic (RTL). The `العربية | EN` switcher in the
  header changes language, direction, and text alignment instantly.
- Ibrahim's real photos are already in place as the hero portrait and two
  About-section editorial images — no placeholder text or fake portraits
  remain in those spots.
- The Selected Work brands (Eagle, SODIC, Harby Group, Tidy, Coded, Hottzz)
  are real client names from Ibrahim's biography, each ready to receive real
  project photos and videos — none have been invented.
- All colors, fonts, and spacing live in `src/styles/global.css` as CSS
  variables if you want to adjust the palette later.
