# Development Checkpoints — Rafli Kurnia Nugroho Portfolio

Setiap checkpoint = satu unit kerja yang bisa diverifikasi & di-commit sendiri.
Urutan bersifat sequential (checkpoint berikutnya butuh checkpoint sebelumnya selesai).

Status: `[ ]` belum, `[x]` selesai

---

## CP0 — Project Scaffold
- [x] Init Vite + React + TypeScript
- [x] Install Tailwind CSS v4 + config dark mode
- [x] Install Three.js, @react-three/fiber, @react-three/drei
- [x] Install Framer Motion
- [x] Struktur folder: `src/components`, `src/sections`, `src/data`, `src/three`, `src/lib`
- [x] Design tokens: warna dark + red modern (lihat `src/index.css`)
- **Verifikasi:** `npm run build` sukses tanpa error TypeScript; `npm run dev` menyajikan halaman dengan background dark. ✅ Diverifikasi 13 Sep 2026.

## CP1 — Design System & Layout Shell
- [x] Token warna (background layers, red accent scale, text, border) di CSS variables
- [x] Typography scale (heading font Space Grotesk + body font Inter)
- [x] Komponen layout: `Navbar`, `Footer`, `SectionWrapper`, `Container`
- [x] Reusable UI ala React Bits: `SpotlightCard`, `GradientText`, `AnimatedText` (fade/blur-in), `MagneticButton`
- **Verifikasi:** Navbar sticky + scroll spy (IntersectionObserver) jalan; screenshot menunjukkan komponen ter-render dengan benar. ✅ Diverifikasi 13 Sep 2026.

## CP2 — Hero Section (Three.js)
- [x] `HeroScene.tsx` — particle field + wireframe icosahedron ganda (React Three Fiber)
- [x] Parallax mouse-follow pada scene 3D (rotasi core mengikuti pointer)
- [x] Headline animasi teks (nama, role, tagline) pakai `AnimatedText`
- [x] CTA buttons (Lihat Proyek, Hubungi Saya)
- [x] Fallback: WebGL tidak didukung / `prefers-reduced-motion` → gradient background statis
- **Verifikasi:** Screenshot headless Edge mengonfirmasi render benar; readability scrim ditambahkan setelah core mesh awalnya menabrak teks headline (fixed: mesh digeser ke kanan + gradient overlay kiri). ✅ Diverifikasi 13 Sep 2026.
- **Catatan:** "Download CV" dihilangkan dari CTA karena belum ada file CV yang disediakan — tambahkan nanti jika dibutuhkan.

## CP3 — About / Identity Section
- [ ] Ringkasan professional identity (manufacturing → IT → data → AI)
- [ ] 3-layer experience card (Shop Floor / Technology / Business)
- [ ] Value proposition quote block
- **Verifikasi:** Konten sesuai `.agent.md` bagian 1–2, responsive di mobile.

## CP4 — Career Timeline Section
- [ ] Data timeline di `src/data/timeline.ts` (Pendidikan → Operator → Maintenance → IT)
- [ ] Komponen `Timeline` dengan animasi scroll-reveal per item
- [ ] Highlight pencapaian nasional IoT 2019
- **Verifikasi:** Semua milestone tampil urut, animasi trigger saat scroll masuk viewport.

## CP5 — Skills & Domain Section
- [ ] Skills matrix dikelompokkan per kategori (Programming, IIoT, Data, ML, dst)
- [ ] Domain knowledge sebagai progress bar/rating (bintang → visual bar)
- [ ] Tampilan grid dengan hover glow merah
- **Verifikasi:** Data sinkron dengan bagian 29–30 `.agent.md`.

## CP6 — Featured Projects Section
- [ ] 4 project card: Preventive Maintenance Digitalization, Painting Booth Monitoring, Industrial IoT Integration (HighByte/OPC UA/MQTT), LSTM Autoencoder Thesis
- [ ] `SpotlightCard` dengan tag teknologi per proyek
- [ ] Modal/expand detail (opsional ringkas)
- **Verifikasi:** Semua project dari `.agent.md` bagian 10–13, 20–23 terwakili.

## CP7 — Certifications & Education Section
- [ ] List sertifikasi/training (Kawasaki Robot Teaching, T3 Power BI, dll)
- [ ] Education cards (BINUS, Akademi Komunitas Toyota, SMKN 2 Depok)
- **Verifikasi:** Sesuai bagian 27–28.

## CP8 — Contact Section & Footer
- [ ] Contact CTA (email, GitHub, LinkedIn placeholder)
- [ ] Footer dengan quote signature statement
- **Verifikasi:** Link berfungsi, tidak ada broken anchor.

## CP9 — Polish Pass
- [ ] Responsive check (mobile/tablet/desktop)
- [ ] Accessibility (contrast rasio teks vs background dark, aria-label)
- [ ] Performance (lazy load Three.js scene, reduce-motion support)
- [ ] SEO meta tags + favicon + OG image
- **Verifikasi:** Lighthouse mobile ≥ 85 performance, ≥ 90 accessibility (indikatif).

## CP10 — Version Control & Deploy Prep
- [ ] `.gitignore` (termasuk `.agent.md`, `node_modules`, `dist`, `.env`)
- [ ] `git init` + initial commit
- [ ] Connect remote `origin` → `https://github.com/raflikurnia70/profile.git`
- [ ] Push ke branch `main`
- [ ] (Opsional lanjutan) Setup GitHub Pages / Vercel deploy workflow

---

## Catatan Tech Stack
- **Build tool:** Vite
- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4 (dark theme default)
- **3D:** Three.js via `@react-three/fiber` + `@react-three/drei`
- **Animasi UI:** Framer Motion (komponen custom bergaya React Bits — bukan library reactbits.dev langsung)
- **Palet warna:** Dark base (`#0a0a0d` – `#161619`) + red accent modern (`#e11d2e` / `#ff3b4e` gradient), netral abu-abu hangat sebagai penyeimbang
