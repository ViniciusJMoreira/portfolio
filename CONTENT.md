# Contenuti definiti — portfolio Vinícius Junqueira Moreira

Testi confermati, pronti per essere inseriti nel codice. Aggiornato sezione per sezione insieme all'utente prima di toccare i file in `/src`.

## Home — Hero (`src/app/page.jsx`)

**Stato: confermato**

- H1: `Front-end developer. Logica incontra creatività.`
- Paragrafo:
  > Sono Vinícius, sviluppatore front-end basato a Rimini. Costruisco interfacce moderne, performanti e accessibili con React e Next.js, con attenzione alla qualità del codice e alla user experience. Integro strumenti AI nel workflow per accelerare prototipazione e sviluppo, senza perdere di vista i dettagli.

Note: nessun riferimento al percorso professionale (elettricista → dev) — quel racconto vive solo in `/about`.

## Home — loghi stack/strumenti (sostituisce `Photos`)

**Stato: confermato**

6 loghi, "i principali":
1. React
2. Next.js
3. Tailwind CSS
4. Supabase
5. Git / GitHub
6. Claude

Nota: JavaScript rimosso deliberatamente dalla home (ridondante con React/Next.js). v0.dev escluso dalla home per non affollare la fascia — resta nella lista completa di `/about`.

**Comportamento (nota tecnica per il componente)**:
- Marquee automatico continuo su tutti i breakpoint, desktop incluso — non più solo mobile. Velocità lenta e leggera (loop infinito, non a scatti/step).

## Home — preview articoli

**Stato: confermato (vuoto per ora)**

`/blog` (route rinominata da `/articles`) parte vuoto, nessun post placeholder fittizio da mostrare in questa preview finché non scrivi il primo articolo reale.

**Fatto**: gli articoli non vivono più in cartelle MDX. Sono voci in `src/content/articles.json` (slug, autore, data, titolo, descrizione, contenuto Markdown), renderizzate a runtime da `src/app/blog/[slug]/page.jsx` con `next-mdx-remote`. Per un nuovo articolo si compila `template-articolo.md` e lo si passa a Claude, che aggiunge la voce al JSON — non si tocca più nulla sotto `/src`.

## `/blog` — header pagina (route rinominata da `/articles`)

**Stato: confermato**

- Titolo (H1): `Condivido la mia esperienza di sviluppo front-end, React e Next.js, e di come uso l'AI nel workflow quotidiano.`
- Intro: `Note, appunti ed esperienze dal mio percorso — codice, strumenti e qualche riflessione lungo la strada.`

Nota: nessun riferimento a un calendario/scadenza fissa di pubblicazione (a differenza dell'originale in inglese, che parlava di "collected in chronological order").

## Home — sezione unica "Disponibilità" (sostituisce Newsletter + Resume)

**Stato: confermato**

Le due box originali (Newsletter, Resume/CV) diventano **una sola sezione**. Il CV vero e proprio vivrà in `/about`, qui c'è solo disponibilità + CTA.

- Titolo: `Attualmente disponibile`
- Testo:
  > Sono aperto a nuove opportunità come sviluppatore front-end — sia ruoli in team che progetti freelance, in sede, ibrido o da remoto. Se hai qualcosa in mente, contattami su LinkedIn.
- CTA primaria: `Contattami su LinkedIn` → link al profilo LinkedIn (`https://www.linkedin.com/in/vinicius-jmoreira`)
- CTA secondaria: `Download CV` → bottone recuperato dal vecchio box `Resume` (stesso stile: variant secondary + `ArrowDownIcon`), punta a un PDF del CV

**Asset mancante**: serve il file PDF del CV reale da caricare (es. `public/cv-vinicius-junqueira-moreira.pdf`) — da fornire prima di collegare il bottone.

Nota tecnica per dopo: in fase di codice, unificare/rimuovere i componenti `Newsletter` e `Resume` in `src/app/page.jsx` sostituendoli con questo box unico (testo + due CTA).

## `/about` — Chi sono / percorso

**Stato: confermato**

**H1**
> Sono Vinícius Junqueira Moreira. Vivo vicino a Rimini, dove trasformo problemi reali in interfacce che funzionano.

**Paragrafo 1**
> La mia passione per la tecnologia è nata da bambino, molto prima che diventasse un lavoro. La mia carriera, però, non è iniziata da uno schermo, ma da un cantiere: per anni ho lavorato come elettricista civile e industriale, imparando a leggere schemi, cablare quadri elettrici e risolvere problemi con le mani prima che con il codice.

**Paragrafo 2**
> La mia formazione nel digitale è partita ad Araçatuba, in Brasile, con un percorso Microcamp di quasi un anno e mezzo tra informatica, grafica, HTML, CSS e marketing digitale. Da lì ho scelto di specializzarmi in front-end: il percorso Full-Stack JavaScript di OneBitCode, seguito dal 2022, approfondito con un corso su React, Next.js e Redux su Udemy, mi ha dato le basi solide su cui costruisco ogni giorno.

**Paragrafo 3**
> Oggi lavoro ancora a tempo pieno nella manutenzione di centri sportivi, ma nel frattempo ho costruito — di mia iniziativa — una web app gestionale e un bot WhatsApp per digitalizzare la raccolta delle segnalazioni dei custodi: un problema reale, visto da vicino, risolto con codice.

**Paragrafo 4**
> Mi concentro su React e Next.js, curando qualità del codice, accessibilità e performance, e integrando strumenti AI nel workflow per lavorare più velocemente senza abbassare gli standard. Sono abituato a lavorare con attenzione ai dettagli e a portare a termine quello che inizio, anche quando la strada è lunga. Cerco un contesto dove mettere in pratica questo approccio e continuare a crescere come sviluppatore.

Fonti/materiale grezzo usato (da LinkedIn + certificati forniti):
- Percorso: elettricista civile/industriale (Italia/UK) → Microcamp ad Araçatuba, Brasile (24/08/2021–15/12/2022, 192h: informatica moderna, grafica, Photoshop, produzione video, HTML, CSS, Adobe Spark/XD, SEO, marketing digitale, progetto app) → OneBitCode Full-Stack JS dal 2022 → corso Udemy "The Ultimate React Course 2025" (Jonas Schmedtmann)
- Oggi: lavora a tempo pieno in manutenzione centri sportivi (COOP134) mentre si forma come dev — situazione attuale, non conclusa
- Progetto reale forte: web app gestionale + bot WhatsApp costruiti di iniziativa personale per digitalizzare le segnalazioni dei custodi sul posto di lavoro
- Passione per la tecnologia fin da bambino (dettaglio tenuto generico nel testo, non specificato)
- Obiettivo dichiarato: collaborare a progetti stimolanti/innovativi, crescere come sviluppatore

Skill list completa (**confermata**), organizzata per categoria:
- **Frontend**: React (Hooks, Routing, State Management), Next.js, JavaScript (ES6+), Sass, Tailwind CSS
- **Backend / Database**: Supabase (Postgres, Auth, Storage)
- **Sicurezza**: Supabase Auth / Row Level Security (RLS)
- **Strumenti**: Git & GitHub, Vercel, Figma
- **Workflow AI**: Claude Code (MCP), v0.dev, Google Stitch
- **In approfondimento**: TypeScript, Testing (Jest, React Testing Library)

## `/projects`

**Stato: header confermato, lista progetti ancora da definire**

Header pagina:
- Titolo (H1): `Progetti che ho costruito, dal percorso di apprendimento a problemi reali.`
- Intro: `Alcuni nascono da corsi ed esercizi, altri da un problema vero che ho deciso di risolvere. Qui trovi il codice e cosa ho imparato lungo il mio percorso.`

Lista progetti: **vuota per ora**, da popolare più avanti — l'utente deve ancora decidere cosa mostrare oltre al progetto COOP134 (web app gestionale + bot WhatsApp, digitalizzazione segnalazioni custodi), che resta il candidato certo quando si riprende questa sezione.

## `/uses`

**Stato: rimossa (fatto)**

Come `/speaking`, anche `/uses` è stata eliminata: route, file e voce di menu tolti dal codice (`src/app/uses`, `Header.jsx`, `Footer.jsx`).
