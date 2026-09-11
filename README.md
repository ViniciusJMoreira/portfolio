# Portfolio — Vinícius Junqueira Moreira

Portfolio personale (front-end developer), costruito a partire dal template [Spotlight](https://tailwindcss.com/plus/templates/spotlight) di Tailwind Plus (licenza Personal, acquistata — vedi `LICENSE.md`).

Sostituisce il vecchio portfolio GitHub (spostato in `portfolio-old`). Lo storico completo delle decisioni sui contenuti, testo per testo, è in [`CONTENT.md`](./CONTENT.md) — questo README descrive lo stato attuale del codice.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** + Headless UI
- **MDX** per il blog (`/blog`)
- **motion** (ex Framer Motion) — animazione della fascia loghi stack in home
- **JavaScript** (non TypeScript — scelta fatta per semplicità in questa fase)

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000). `.env.local` richiede solo `NEXT_PUBLIC_SITE_URL`.

Per l'anteprima live in questa sessione: server configurato in `.claude/launch.json` (nome `portfolio-dev`, porta 3000).

## Struttura del sito e stato

| Route | Stato |
|---|---|
| `/` | ✅ Hero, fascia loghi stack, preview articoli, bottone "Scopri di più su di me" → `/about`, box "Disponibilità" (CTA LinkedIn + Download CV) |
| `/about` | ✅ Bio completa (H1 + 4 paragrafi) + skill list per categoria |
| `/blog` | ✅ Header inserito (route rinominata da `/articles` → `/blog`), contenuto vuoto salvo un **articolo di prova temporaneo** (`articolo-di-prova`, da rimuovere) |
| `/projects` | ✅ Header inserito, un **progetto di prova temporaneo** in lista (da sostituire con progetti reali) |
| `/uses` | 🗑️ Rimossa (route, file, voce di menu) |
| `/speaking` | 🗑️ Rimossa (route, file, voce di menu) |
| Contatti | ⏸️ Rimandato — nessuna pagina dedicata per ora |

## Dettagli tecnici implementati

- **Loghi stack** (`src/components/StackLogos.jsx`): marquee animato con `motion`, loghi da file SVG locali in `src/images/logos/` (`react-logo.svg`, `nextjs-logo.svg`, `tailwindcss-logo.svg`, `supabase-logo.svg`, `github-logo.svg`, `claude-logo.svg`)
- **Box "Disponibilità"**: sostituisce i vecchi componenti `Newsletter` + `Resume` in `src/app/page.jsx`, con due CTA (LinkedIn + Download CV)
- **Rename `/articles` → `/blog`**: cartella `src/app/blog` (era `src/app/articles`), `src/lib/blog.js` (era `articles.js`), aggiornati tutti i link interni, nav (`Header.jsx`, `Footer.jsx`), `next.config.mjs` (`outputFileTracingIncludes`), `feed.xml/route.js` (path + autore RSS)
- `src/app/layout.jsx`: `lang="it"`, title template e meta description aggiornati al posto di quelli di Spencer Sharp (template originale)

## Cose da verificare (modifiche fatte direttamente in VS Code, da confermare)

- La fascia loghi ora scorre **sempre** (anche su desktop) — la decisione presa in chat era: marquee solo su mobile, riga statica su desktop. Verificare se è un cambio voluto.
- Manca il logo **JavaScript** nella fascia stack (restano 6 loghi invece di 7) — verificare se voluto.

## Cosa manca ancora

Asset o decisioni che dipendono dall'utente, non dal codice:

- [ ] **Rimuovere i contenuti di prova**: `src/app/blog/articolo-di-prova` e la card "Progetto di prova" in `src/app/projects/page.jsx`, quando ci sono contenuti reali
- [ ] Foto reali: `src/images/avatar.jpg`, `src/images/portrait.jpg` (ancora placeholder del template)
- [ ] PDF del CV reale — il bottone "Download CV" in home punta a `#` in attesa del file (es. `public/cv-vinicius-junqueira-moreira.pdf`)
- [ ] Lista progetti reale in `/projects` — candidato certo: progetto COOP134 (web app gestionale + bot WhatsApp per digitalizzare le segnalazioni dei custodi)
- [ ] Decidere se/come aggiungere una pagina Contatti dedicata
- [ ] Aggiornare `NEXT_PUBLIC_SITE_URL` in `.env.local` con l'URL definitivo
- [ ] Deploy (Vercel è il più naturale per Next.js)
- [ ] Sostituire/pulire i loghi rimasti in `src/images/logos/*` non più usati (es. `planetaria.svg` usato solo dal progetto di prova)

## Note

- Licenza Tailwind Plus Personal: uso consentito per creare un sito personale (vedi `LICENSE.md`); non ridistribuire il template/i suoi sorgenti separatamente dal progetto finito.
- `CONTENT.md` resta lo storico di riferimento per capire *perché* ogni testo è scritto così (bozze scartate, correzioni, fonti usate — LinkedIn, certificati Microcamp/Udemy).
