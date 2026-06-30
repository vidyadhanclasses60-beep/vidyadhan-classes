# Vidyadhan Classes — Official Website

A complete, production-ready website for **Vidyadhan Classes** (Vitawa, Kalwa, Thane) — *For Quality Education since 2008*. Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **10 pages** — Home, About, Courses & Fees, Faculty, Results, Gallery, Testimonials, Admissions, Contact, FAQ, plus Privacy & Terms and a custom 404.
- **All content from the institute** — 25 SSC + 17 HSC 2026 toppers, full 2026-27 fee structure, courses, awards and contact details.
- **Responsive** — mobile-first, works from 360px phones to large desktops.
- **SEO ready** — per-page metadata, OpenGraph/Twitter cards, `sitemap.xml`, `robots.txt`, JSON-LD (Organization + FAQ).
- **Animations** — Framer Motion scroll reveals, animated counters, marquee announcement bar, sliders.
- **Working enquiry form** — sends admission enquiries straight to WhatsApp or email (no backend required).
- **Brand theme** — navy / crimson / gold palette derived from the institute logo.

## 🧱 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.1.6 (App Router) |
| React | 19 |
| TypeScript | 5.7 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| lucide-react | icons |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm run start
```

> Requires Node.js 18.18+ (Node 20 LTS recommended).

## ⚙️ Configuration

Copy `.env.example` to `.env.local` and adjust if needed:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for SEO + sitemap |
| `NEXT_PUBLIC_PHONE` | Phone number shown in the UI |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number (with country code) |
| `NEXT_PUBLIC_EMAIL` | Contact email |
| `NEXT_PUBLIC_MAPS_QUERY` | Google Maps embed query for the Contact page |

## 📁 Project Structure

```
vidyadhan-classes/
├── app/                  # App Router pages
│   ├── layout.tsx        # Root layout (fonts, SEO, header/footer)
│   ├── page.tsx          # Home
│   ├── about/ courses/ faculty/ results/ gallery/
│   ├── testimonials/ admissions/ contact/ faq/
│   ├── privacy-policy/ terms/
│   ├── sitemap.ts robots.ts not-found.tsx globals.css
├── components/
│   ├── layout/   # Header, Footer, AnnouncementBar
│   ├── home/     # Hero, Stats, previews, slider, CTA
│   ├── shared/   # Logo, Reveal, SectionHeading, TopperCard, PageHero...
│   ├── results/ gallery/ forms/  ui/
├── constants/site.ts     # Institute details & navigation
├── lib/data.ts           # ALL content (toppers, fees, courses, awards...)
├── lib/seo.ts utils.ts
├── types/index.ts
└── public/               # logo, icons, manifest
```

## ✏️ What to Replace Before Going Live

These items were **not** present in the source material and use clearly-marked placeholders:

1. **Email address** — set `NEXT_PUBLIC_EMAIL` (currently `info@vidyadhanclasses.com`).
2. **Social links** — update `social` in `constants/site.ts` (Facebook / Instagram / YouTube).
3. **Topper photos** — optional; drop images in `public/images/toppers/` and swap the initials avatar in `components/shared/TopperCard.tsx`. Works fine without them.
4. **Gallery images** — replace the placeholder cards in `components/gallery/GalleryGrid.tsx` with real photos.
5. **Testimonials** — the quotes in `lib/data.ts` are representative samples; replace with genuine signed testimonials.

## ⬆️ Getting this onto GitHub (with all folders)

> GitHub's **web** "Upload files" page often drops sub-folders — that's why a
> previous attempt left the repo with only root files and Vercel failed with
> *"Couldn't find any pages or app directory."* Use one of the methods below
> instead; each one preserves `app/`, `components/`, etc.

**Method A — Git command line (most reliable)**
```bash
# inside the unzipped vidyadhan-classes folder
git init
git add .
git commit -m "Vidyadhan Classes website"
git branch -M main
git remote add origin https://github.com/vidyadhanclasses60-beep/vidyadhan-classes.git
git push -u origin main --force
```
`--force` cleanly overwrites the half-uploaded repo. Done.

**Method B — GitHub Desktop (no terminal)**
1. Install **GitHub Desktop**, sign in.
2. File → **Add local repository** → select the unzipped `vidyadhan-classes` folder.
3. It offers to create a repository — accept, then **Publish repository**.
All folders upload automatically.

**Method C — Web upload, done correctly**
On the repo's **Add file → Upload files** page, **drag the folders themselves**
(`app`, `components`, `constants`, `lib`, `public`, `types`) into the box — not
the individual files. Chrome/Edge preserve the folder structure. Commit.

After any method, Vercel will redeploy automatically and the build will pass.

## ▲ Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset is auto-detected as **Next.js** — no config needed.
4. (Optional) add the environment variables from `.env.example`.
5. Click **Deploy**. Done.

## 📞 Institute

**Vidyadhan Classes** — A/3, Ramdas Apartment CHS Ltd, Vitawa, Post-Kalwa, Thane 400605
Director: Mahendra Chaudhari Sir (B.Sc. B.Ed.) · Phone / WhatsApp: 9322094000

---

© 2026 Vidyadhan Classes. Built with Next.js.
