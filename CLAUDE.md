# Freelance Business Website + AI Chatbot Demo

## Project Overview

A production-grade business website for a Berlin-based freelance web developer offering:
1. Website creation (from scratch)
2. Website redesign
3. AI Chatbot integration for businesses

The site doubles as a **portfolio/marketing site** and a **live chatbot demo** for potential clients.

## Tech Stack

- **Frontend**: React + Vite
- **Chatbot API**: Claude API (Anthropic) — model `claude-sonnet-4-20250514`
- **Backend**: Cloudflare Workers as API proxy (keeps API key server-side)
- **Hosting**: Cloudflare Pages + Cloudflare Pages Functions
- **Language**: Bilingual — German (DE) and English (EN) with localStorage-persisted toggle

## Key Architecture Decisions

- All static text uses a `translations` object keyed by `de`/`en`
- Chatbot auto-detects language from user input (no toggle needed)
- API key is NEVER exposed to the frontend — Cloudflare Worker proxies all Claude API calls
- Streaming responses for chatbot UX
- Rate limiting: ~20 messages per session to prevent API abuse
- Conversation history maintained in frontend, sent with each request

## Design System

- **Theme**: Professional dark theme
- **Background**: `#0A0E17` / `#0F1420`
- **Blue accent**: `#3B82F6`
- **Green accent**: `#10B981`
- **Text**: `#F5F3EF`
- **Typography**: Google Font (TBD — to be selected during implementation)
- **Layout**: Mobile-first responsive (many users come from Kleinanzeigen on phones)

## Site Structure

1. Hero Section (with DE/EN toggle in navbar)
2. Leistungen / Services (3 tiers with pricing)
3. So funktioniert's / How it works (3-step process)
4. Chatbot Demo (live embedded widget — THE KEY SECTION)
5. Uber mich / About
6. Kontakt / Contact (form + chatbot booking)
7. Footer (Impressum, Datenschutz, copyright)

## Legal Requirements (German Law)

- **Impressum** required (SS 5 TMG) — full name, address, email, phone
- **Datenschutzerklarung** required (DSGVO) — data collection, cookies, chatbot data, hosting
- **Cookie Banner** — at minimum: "Diese Website verwendet nur technisch notwendige Cookies."

## Environment Variables

```
ANTHROPIC_API_KEY=sk-ant-...  # Set in Cloudflare Pages dashboard (Production AND Preview)
```

## File Structure (planned)

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ChatbotDemo.jsx
│   │   ├── ChatWidget.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── CookieBanner.jsx
│   ├── pages/
│   │   ├── Impressum.jsx
│   │   └── Datenschutz.jsx
│   ├── i18n/
│   │   └── translations.js
│   ├── hooks/
│   │   └── useLanguage.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── functions/
│   └── api/
│       └── chat.js          # Cloudflare Pages Function (API proxy)
├── index.html
├── vite.config.js
├── package.json
├── PROJECT_SPEC.md
├── PRD.md
└── CLAUDE.md
```

## Development Commands

```bash
# Local dev
npm run dev

# Build for production
npm run build

# Cloudflare Pages local preview (with Functions)
npx wrangler pages dev dist

# Deploy (auto via GitHub → Cloudflare Pages)
git push origin main
```

## Owner Details (for Impressum)

- **Name**: Saba Gogia
- **Address**: Manteuffelstr. 44, Berlin
- **Phone**: +49 176 43168374
- **Email**: sabagogia11@gmail.com
- **Portfolio**: samplevault.win

## Coding Conventions

- React + Vite with functional components and hooks
- CSS Modules or single App.css — no CSS-in-JS
- English comments in code
- All user-facing text must go through the translations system — no hardcoded strings
- DSGVO/GDPR compliance is non-negotiable on every feature
- Contact form backend: Cloudflare Worker

## Reference Documents

- `PROJECT_SPEC.md` — Full technical specification
- `compass_artifact_*.md` — Market research, pricing strategy, lead generation strategy
