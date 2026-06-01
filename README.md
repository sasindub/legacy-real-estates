# Legacy Real Estates — Next.js Website

A premium, animated, multi-page marketing site for **Legacy Real Estates**, a Sri Lankan
land & property company based in **Dambulla & Sigiriya**.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion** so it's
easy to extend with more animation libraries, a CMS, or a real backend.

---

## ✨ What's inside

- **Modern animated hero** — rotating headline word synced to **crossfading background
  viewpoints** of Sigiriya, Dambulla, Kandalama lake and paddy fields, with slide controls.
- **Dark & light mode** (remembers the visitor's choice; no flash on load).
- **Solid, no-gradient design** built strictly on the logo palette: purple `#8d479e`,
  gold `#f39223`, charcoal `#14111c` / cream `#faf7f2`.
- **Unique brand cursor** — a slowly rotating gold diamond (echoing the star in the crest)
  that fills purple over interactive elements.
- **Scroll animations everywhere** (Framer Motion reveal + scroll progress bar).
- **Top utility bar** with mobile **hotline** + **social media icons**; sticky navbar with
  Call-Now button and a slide-in mobile drawer.
- **Pages**
  - `/` — Home (hero, marquee, about, locations, featured properties, stats, gallery
    preview, process, testimonials, CTA, contact)
  - `/properties` — full **Our Properties** listing with a view filter
  - `/properties/[id]` — **property detail** pages: photo gallery, key facts, description,
    features, and a sticky **Contact-us card with phone / WhatsApp / email**
  - `/gallery` — full **masonry gallery** with category filters + full-screen lightbox
- Floating **WhatsApp** button.
- Fully responsive; respects `prefers-reduced-motion`.

## ▶️ Run it

```bash
npm install
npm run dev      # http://localhost:3000
# production:
npm run build && npm run start
```

## 📂 Where things live

```
src/app/                 routes (home, gallery, properties, property detail)
src/components/          UI + sections (Hero, Navbar, Cursor, PropertyCard, …)
src/components/sections/ home-page sections
src/data/properties.ts   ← edit/add properties here
src/data/gallery.ts      ← gallery images + categories
src/lib/site.ts          ← phone, email, address, social links (PLACEHOLDERS)
public/images/           landscape + property photos
public/logo/             transparent logo (crest + full lockup)
tailwind.config.ts       brand colours
src/app/globals.css      theme tokens (dark/light), cursor styles
```

---

## ⚠️ Before going live — replace placeholders

All business contact info is in **`src/lib/site.ts`** — update once and it propagates
everywhere (nav, footer, property pages, WhatsApp button):

```ts
phone, phoneHref, whatsapp, email, address, socials.{facebook,instagram,youtube,tiktok}
```

Current placeholders: phone `+94 00 000 0000`, email `info@legacyrealestates.lk`.

- **Property data & prices** live in `src/data/properties.ts` — replace with real listings.
- **Contact form** (`src/components/sections/Contact.tsx`) currently shows a success
  message only. Wire it to a form backend / email service / WhatsApp API for production.

## 📸 Images & the Facebook page

- I **could not pull content/photos from the Facebook page** — Facebook requires a login
  and blocks automated access. Please copy real listing photos & details from the page
  into `public/images/` and `src/data/properties.ts`.
- Current photos are **free, license-clear Unsplash images** of the actual Dambulla /
  Sigiriya region and tropical homes, used as high-quality stand-ins (I avoided scraping
  copyrighted Google Images). Swap in the client's own property photography anytime —
  just drop files in `public/images/` and point the data files at them.

## 🎨 Re-skinning

Change the brand colours in `tailwind.config.ts` (`purple`, `gold`, `ink`, `cream`) and the
theme tokens in `src/app/globals.css`. No gradients are used anywhere by design.
