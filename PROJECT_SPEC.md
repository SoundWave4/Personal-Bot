# Project Spec: Freelance Business Website + AI Chatbot Demo

## Overview

Build a full business website for a Berlin-based freelance web developer who offers:
1. Website creation (from scratch)
2. Website redesign
3. AI Chatbot integration for businesses

The site serves two purposes:
- **Portfolio/marketing site** to attract clients (linked from Kleinanzeigen, Fiverr, etc.)
- **Live chatbot demo** so potential clients can experience an AI chatbot firsthand and book a consultation

## Tech Stack

- Frontend: HTML/CSS/JS (or React — developer's choice)
- Chatbot: Claude API (Anthropic) — model `claude-sonnet-4-20250514`
- Backend: Cloudflare Worker as API proxy to call Claude API (keeps API key server-side)
- Hosting: Cloudflare Pages (with Cloudflare Workers for the API proxy)
- Language: Site content in both German AND English (bilingual — either with a language toggle or separate sections)

---

## Site Structure (Pages/Sections)

### 1. Hero Section
- Language toggle button (DE / EN) in the navbar — switches all site content
- **German:**
  - Headline: "Professionelle Websites & KI-Chatbots für Ihr Unternehmen"
  - Subtitle: "Modern, schnell, DSGVO-konform — deutschlandweit verfügbar"
  - CTAs: "Leistungen ansehen" / "Chatbot testen"
- **English:**
  - Headline: "Professional Websites & AI Chatbots for Your Business"
  - Subtitle: "Modern, fast, GDPR-compliant — available across Germany & the EU"
  - CTAs: "View Services" / "Try the Chatbot"
- Clean, professional dark or light theme — corporate feel

### 2. Leistungen (Services)
Three service cards with pricing tiers:

**Website Erstellung**
- Starter (200 €): Landingpage / Onepager — mobilfreundlich, DSGVO-konform, Kontaktformular
- Standard (500 €): Business-Website (3–5 Seiten) — SEO, Google Maps, Cookie-Banner
- Premium (ab 900 €): Komplette Website + KI-Chatbot Integration

**Website Redesign**
- Modernisierung bestehender Websites
- Responsive Design Update
- Performance & SEO Optimierung

**KI-Chatbot**
- FAQ-Chatbot (ab 500 €): Beantwortet häufige Kundenfragen automatisch
- KI-Assistent (ab 1.500 €): Terminbuchung, Lead-Erfassung, CRM-Anbindung
- Monatliche Wartung ab 50 €/Monat

### 3. So funktioniert's / How it works
Simple 3-step process (show in active language):

**German:**
1. Kostenlose Erstberatung — Wir besprechen Ihre Wünsche
2. Umsetzung — Ich erstelle Ihre Website / Ihren Chatbot
3. Übergabe — Sie erhalten alles fertig, inklusive Einweisung

**English:**
1. Free consultation — We discuss your needs
2. Development — I build your website / chatbot
3. Delivery — You receive everything ready, including a walkthrough

### 4. Chatbot Demo (THE KEY SECTION)
**German:**
- Headline: "Testen Sie den KI-Chatbot selbst!"
- Subtitle: "So könnte ein Chatbot auf Ihrer Website aussehen. Stellen Sie eine Frage — der Bot antwortet sofort."
- Below chatbot: "Gefällt Ihnen der Chatbot? Lassen Sie sich unverbindlich beraten!"

**English:**
- Headline: "Try the AI Chatbot yourself!"
- Subtitle: "This is what a chatbot on your website could look like. Ask a question — the bot answers instantly."
- Below chatbot: "Like what you see? Get a free consultation!"

- Embedded chatbot widget (see Chatbot Spec below)
- The chatbot itself auto-detects language — user can write in German or English and get a response in the same language

### 5. Über mich (About)
- Short personal intro
- Based in Berlin, working remotely across Germany
- Skills: Web Development, AI/Chatbot Integration, DSGVO compliance
- Link to portfolio projects (The Sample Vault, Open Brain, Last Take)

### 6. Kontakt / Termin buchen
- Simple contact form (Name, Email, Nachricht)
- Or: the chatbot itself can handle appointment booking (see below)
- Email delivery via the chatbot itself, or a simple Cloudflare Worker that sends emails (or use a free service like Formspree/Web3Forms)

### 7. Footer
- Impressum link (required by German law — this page can stay in German only, it's a legal requirement)
- Datenschutzerklärung / Privacy Policy link (German version required by law, English version optional)
- Standort / Location: Berlin, Deutschland / Germany
- "© 2026 — Webentwicklung & KI-Chatbots / Web Development & AI Chatbots"

---

## Language Toggle Implementation

- Add a DE / EN toggle button in the top navbar
- Store the selected language in localStorage so it persists
- All static text on the site should be stored in a translations object, e.g.:
```javascript
const translations = {
  de: {
    heroTitle: "Professionelle Websites & KI-Chatbots für Ihr Unternehmen",
    heroSubtitle: "Modern, schnell, DSGVO-konform — deutschlandweit verfügbar",
    servicesTitle: "Leistungen",
    // ... etc
  },
  en: {
    heroTitle: "Professional Websites & AI Chatbots for Your Business",
    heroSubtitle: "Modern, fast, GDPR-compliant — available across Germany & the EU",
    servicesTitle: "Services",
    // ... etc
  }
};
```
- The chatbot does NOT need a language toggle — it auto-detects from the user's message

---

## Chatbot Spec

### Purpose
The chatbot is a LIVE DEMO that shows potential clients what a chatbot on THEIR website could do. It also doubles as the site's actual customer service assistant.

### Behavior & System Prompt

The chatbot should use this system prompt (adjust as needed):

```
Du bist der KI-Assistent auf der Website eines freiberuflichen Webentwicklers aus Berlin. Du hilfst potenziellen Kunden, Informationen über die angebotenen Dienstleistungen zu erhalten, und kannst Beratungstermine vereinbaren.

Dein Verhalten:
- Erkenne automatisch die Sprache des Nutzers und antworte in derselben Sprache
- Sei freundlich, professionell und hilfsbereit
- Halte Antworten kurz und präzise (max 2-3 Sätze, außer der Nutzer fragt nach Details)
- Du bist auch eine DEMO — wenn jemand fragt, was der Chatbot kann, erkläre, dass genau so ein Chatbot auch auf ihrer Website integriert werden kann

Informationen über die Dienstleistungen:

WEBSITE ERSTELLUNG:
- Starter (200 €): Landingpage / Onepager, mobilfreundlich, DSGVO-konform, Kontaktformular, Lieferung in 5 Werktagen
- Standard (500 €): Business-Website mit 3–5 Seiten, SEO-Grundoptimierung, Google Maps, Cookie-Banner & Datenschutz
- Premium (ab 900 €): Komplette Website + KI-Chatbot Integration

WEBSITE REDESIGN:
- Modernisierung bestehender Websites mit neuem Design
- Responsive Design für alle Geräte
- Performance- und SEO-Optimierung
- Preise nach Absprache, abhängig vom Umfang

KI-CHATBOT:
- FAQ-Chatbot (ab 500 €): Beantwortet häufige Kundenfragen automatisch, individuelle Wissensbasis, DSGVO-konform
- KI-Assistent (ab 1.500 €): Intelligenter Assistent mit Terminbuchung, Lead-Erfassung, CRM-Anbindung, mehrsprachig
- Monatliche Wartung & Updates: ab 50 €/Monat

ALLGEMEINE INFOS:
- Standort: Berlin, arbeitet remote deutschlandweit
- Alle Websites sind DSGVO-konform (Datenschutz, Cookie-Banner, Impressum)
- Kostenlose Erstberatung verfügbar
- Lieferzeit: ab 5 Werktagen je nach Projektumfang

TERMINBUCHUNG:
Wenn jemand einen Termin buchen möchte oder Interesse zeigt:
1. Frage nach Name und bevorzugtem Kontaktweg (E-Mail oder Telefon)
2. Frage nach dem gewünschten Service (Website, Redesign, oder Chatbot)
3. Frage nach einem Wunschtermin
4. Bestätige die Angaben und sage, dass sich der Entwickler schnellstmöglich melden wird
5. Bedanke dich freundlich

Wenn du etwas nicht weißt, sage ehrlich, dass du es nicht weißt, und schlage vor, direkt Kontakt aufzunehmen.
```

### Chatbot UI Requirements
- Floating chat button in bottom-right corner (common pattern)
- Opens a chat window overlay
- Clean, modern design matching the site theme
- Shows typing indicator while waiting for Claude response
- Chat history persists during the session
- First message from bot should match the site's current language:
  - If site is in DE: "Hallo! 👋 Ich bin der KI-Assistent. Wie kann ich Ihnen helfen? Sie können mich zu unseren Leistungen, Preisen oder Verfügbarkeit fragen — oder direkt einen Beratungstermin vereinbaren."
  - If site is in EN: "Hello! 👋 I'm the AI assistant. How can I help you? You can ask me about our services, pricing, or availability — or book a free consultation right away."
  - After the first message, the bot auto-detects the user's language regardless of site language

### Technical Implementation
- Frontend sends user message to a Cloudflare Worker endpoint (e.g., `/api/chat`)
- Cloudflare Worker proxies the request to Claude API (keeps API key in Worker environment variables, never exposed to frontend)
- Use streaming for better UX (responses appear word by word) — Cloudflare Workers support streaming responses
- Maintain conversation history in the frontend (send full history with each request)
- Rate limiting: use Cloudflare's built-in rate limiting or implement a simple counter — max ~20 messages per session to prevent API abuse

### Cloudflare Worker Example
```javascript
// functions/api/chat.js (Cloudflare Pages Function)
// or as a standalone Worker

export async function onRequestPost(context) {
  const { messages } = await context.request.json();
  
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': context.env.ANTHROPIC_API_KEY, // Set in Cloudflare dashboard
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: messages
    })
  });

  return new Response(response.body, {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

---

## Design Guidelines

- **Theme**: Professional, corporate, dark theme preferred (matches the infographic style already created)
- **Colors**: Dark background (#0A0E17 / #0F1420), blue accent (#3B82F6), green accent (#10B981), white text (#F5F3EF)
- **Typography**: Clean sans-serif (system fonts are fine, or use a nice Google Font)
- **Layout**: Responsive — must look good on mobile (many Kleinanzeigen users browse on phones)
- **Feel**: Should look like it was made by someone who KNOWS web development — this IS the portfolio

## Legal Requirements (German law)

The site MUST include:
1. **Impressum** — legally required for any commercial website in Germany (§5 TMG). Include: full name, address, contact email, phone number
2. **Datenschutzerklärung** — privacy policy required by DSGVO. Must cover: what data is collected, cookies, contact form data, chatbot data processing, hosting provider info
3. **Cookie Banner** — if using analytics or non-essential cookies. At minimum: "Diese Website verwendet nur technisch notwendige Cookies."

---

## Environment Variables Needed
Set these in Cloudflare Dashboard → Pages → Settings → Environment Variables:
```
ANTHROPIC_API_KEY=sk-ant-...  (Claude API key)
```

---

## Deployment

### Cloudflare Pages Setup
1. Connect your GitHub repo to Cloudflare Pages
2. Build command: depends on framework (e.g., `npm run build` for React/Vite, or none for plain HTML)
3. Output directory: `dist` or `build` or `/` (depends on framework)
4. Add `ANTHROPIC_API_KEY` in Cloudflare Pages → Settings → Environment Variables (set for Production AND Preview)
5. For the API proxy: use Cloudflare Pages Functions — put your Worker code in a `/functions` directory (e.g., `functions/api/chat.js`)
6. Cloudflare Pages Functions automatically deploy alongside your site — no separate Worker needed

---

## Deployment Checklist
- [ ] Site loads fast (< 2s)
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] Chatbot works and responds correctly
- [ ] API key is NOT exposed in frontend code
- [ ] Impressum page exists
- [ ] Datenschutzerklärung page exists
- [ ] Cookie banner (if needed)
- [ ] Contact form works
- [ ] Meta tags & Open Graph tags set (for sharing on social media)
- [ ] Favicon set

---

## Portfolio Projects to Reference
- **The Sample Vault** — https://samplevault.netlify.app/
- **Open Brain** — (ask developer for link/details)
- **Last Take** — (ask developer for link/details)
