# Product Requirements Document (PRD)
## Freelance Business Website + AI Chatbot Demo

**Version**: 1.0
**Date**: 2026-03-17
**Status**: Draft

---

## 1. Executive Summary

Build a production-grade bilingual (DE/EN) business website for a Berlin-based freelance web developer. The site serves as both a marketing/portfolio platform and a live AI chatbot demonstration. Potential clients — primarily German SMEs found via Kleinanzeigen, Fiverr, and direct outreach — can experience an AI chatbot firsthand, explore services, and book consultations.

The chatbot is the primary differentiator. With only 20% of German Mittelstand companies using AI and 82% calling digitalization "survival-critical," a live demo that lets business owners interact with a real AI assistant converts interest into leads far more effectively than screenshots or descriptions.

---

## 2. Problem Statement

### For the freelancer (site owner):
- Needs a professional web presence to link from Kleinanzeigen, Fiverr, Upwork, Reddit, and cold outreach
- Needs to demonstrate AI chatbot capability — not just describe it
- Needs lead capture (contact form + chatbot-driven booking)
- Must comply with German law (Impressum, DSGVO, Cookie Banner)

### For potential clients (site visitors):
- German SMEs (Handwerker, Gastronomie, Arztpraxen, Einzelhandel) need affordable websites
- Many have zero web presence — they don't know what a modern site looks like
- AI chatbots sound abstract — they need to try one to understand the value
- They need clear pricing and an easy way to get started

---

## 3. Target Users

### Primary: German SME owners (Berlin + remote)
- **Handwerker** — 30,000 registered craft businesses in Berlin, many relying on word-of-mouth only
- **Gastronomie** — Independent restaurants, Imbisse, cafes with no website beyond Google Maps
- **Friseure/Kosmetik** — 5,000+ hair salons in Berlin with zero or minimal web presence
- **Arzte/Praxen** — Dental, GP, physio practices with outdated websites
- **Einzelhandel** — Local retail facing e-commerce pressure without online presence

### Secondary: International clients
- Small business owners found via Upwork, Fiverr, Reddit r/forhire
- Startups needing quick, affordable web presence + chatbot integration

### User Characteristics
- Non-technical — they don't understand frameworks or hosting
- Price-sensitive at entry level (€200-€500 range)
- Browse primarily on mobile (especially Kleinanzeigen users)
- May speak only German — bilingual support is essential
- Decision-makers: they are the owner, not a department

---

## 4. Goals & Success Metrics

### Business Goals
| Goal | Metric | Target |
|------|--------|--------|
| Generate leads | Contact form submissions + chatbot bookings per month | 10+ in first 3 months |
| Demonstrate chatbot value | % of visitors who interact with chatbot | >30% |
| Convert chatbot users | % of chatbot users who book consultation | >10% |
| Support tiered pricing | Upsell from Starter to Standard/Premium | 40% of leads inquire about higher tiers |
| Mobile experience | Mobile bounce rate | <50% |
| Page performance | Lighthouse Performance score | >90 |

### Product Goals
| Goal | Measure |
|------|---------|
| Bilingual experience | All content available in DE and EN with seamless toggle |
| Live chatbot demo | <2s response time, streaming output, auto language detection |
| Legal compliance | Impressum, Datenschutzerklarung, Cookie Banner all present |
| Professional appearance | Site quality demonstrates the freelancer's own capabilities |
| Zero-downtime hosting | Cloudflare Pages with 99.9% uptime |

---

## 5. Features & Requirements

### 5.1 Navigation & Language Toggle

**Priority**: P0 (Must Have)

| Requirement | Details |
|-------------|---------|
| Sticky navbar | Fixed to top on scroll, transparent initially |
| DE/EN toggle | Button in navbar, switches ALL static content |
| Language persistence | Selected language stored in `localStorage` |
| Smooth scroll | Navbar links scroll to sections smoothly |
| Mobile menu | Hamburger menu on mobile with all nav items |
| Active section indicator | Highlight current section in nav |

### 5.2 Hero Section

**Priority**: P0

| Requirement | Details |
|-------------|---------|
| Headline (DE) | "Professionelle Websites & KI-Chatbots fur Ihr Unternehmen" |
| Headline (EN) | "Professional Websites & AI Chatbots for Your Business" |
| Subtitle (DE) | "Modern, schnell, DSGVO-konform — deutschlandweit verfugbar" |
| Subtitle (EN) | "Modern, fast, GDPR-compliant — available across Germany & the EU" |
| CTA buttons | "Leistungen ansehen" / "View Services" + "Chatbot testen" / "Try the Chatbot" |
| Visual style | Dark theme, professional corporate feel, subtle animations |

### 5.3 Services Section (Leistungen)

**Priority**: P0

| Requirement | Details |
|-------------|---------|
| Three service categories | Website Erstellung, Website Redesign, KI-Chatbot |
| Pricing cards | Clear tier structure with prices |
| Visual hierarchy | Premium tier visually emphasized |
| CTA per card | "Jetzt anfragen" / "Get Started" linking to contact/chatbot |

**Pricing Tiers:**

| Service | Tier | Price | Includes |
|---------|------|-------|----------|
| Website Erstellung | Starter | €200 | Landingpage/Onepager, mobile-friendly, DSGVO, contact form |
| Website Erstellung | Standard | €500 | 3-5 page business site, SEO, Google Maps, Cookie Banner |
| Website Erstellung | Premium | ab €900 | Full website + AI chatbot integration |
| KI-Chatbot | FAQ Bot | ab €500 | Auto-answers common questions, custom knowledge base |
| KI-Chatbot | AI Assistant | ab €1,500 | Booking, lead capture, CRM integration, multilingual |
| KI-Chatbot | Maintenance | ab €50/mo | Monthly updates and support |

### 5.4 "How It Works" Section

**Priority**: P1

| Requirement | Details |
|-------------|---------|
| 3-step process | Consultation → Development → Delivery |
| Visual steps | Numbered cards or timeline with icons |
| Bilingual content | Full DE and EN versions |

### 5.5 Chatbot Demo Section (KEY FEATURE)

**Priority**: P0 — This is the most important section

| Requirement | Details |
|-------------|---------|
| Embedded chatbot | Full chat widget visible in this section |
| Headline (DE) | "Testen Sie den KI-Chatbot selbst!" |
| Headline (EN) | "Try the AI Chatbot yourself!" |
| Context text | Explains this is a live demo of what their chatbot could look like |
| Post-demo CTA | "Gefallt Ihnen der Chatbot? Lassen Sie sich unverbindlich beraten!" |

### 5.6 Chatbot Widget (Full Specification)

**Priority**: P0

#### UI Requirements:

| Requirement | Details |
|-------------|---------|
| Floating button | Bottom-right corner, always visible |
| Chat overlay | Opens on click, modern slide-up panel |
| Typing indicator | Animated dots while waiting for response |
| Streaming responses | Text appears word-by-word for natural feel |
| Session persistence | Chat history maintained during browser session |
| Greeting message (DE) | "Hallo! Ich bin der KI-Assistent. Wie kann ich Ihnen helfen?" |
| Greeting message (EN) | "Hello! I'm the AI assistant. How can I help you?" |
| Auto language detection | After first message, bot responds in user's language regardless of site language |
| Input field | Text input + send button, Enter to send |
| Scroll behavior | Auto-scroll to latest message |
| Close button | X button to minimize chat |
| Mobile responsive | Full-screen on mobile, overlay on desktop |

#### Technical Requirements:

| Requirement | Details |
|-------------|---------|
| API Model | `claude-sonnet-4-20250514` |
| Max tokens | 500 per response |
| API Proxy | Cloudflare Pages Function at `/api/chat` |
| API Key security | Key stored in Cloudflare env vars, never in frontend |
| Request format | Full conversation history sent with each request |
| Rate limiting | Max ~20 messages per session |
| Error handling | Graceful error messages if API fails |
| Streaming | Use Claude API streaming for word-by-word display |
| CORS | Configured on Worker to allow only the site's origin |

#### Chatbot Persona & Knowledge:

The chatbot knows:
- All service offerings and exact pricing
- Delivery timelines (ab 5 Werktagen)
- That it's based in Berlin, works remotely across Germany
- DSGVO compliance details
- How to collect booking information (name, contact, desired service, preferred date)
- That it IS a demo — it can explain how this same chatbot can be on the visitor's website
- When it doesn't know something, it suggests direct contact

### 5.7 About Section (Uber mich)

**Priority**: P1

| Requirement | Details |
|-------------|---------|
| Personal intro | Short, professional bio |
| Location | Berlin, remote across Germany |
| Skills | Web Development, AI/Chatbot Integration, DSGVO compliance |
| Portfolio link | The Sample Vault — samplevault.win |

### 5.8 Contact Section

**Priority**: P0

| Requirement | Details |
|-------------|---------|
| Contact form | Name, Email, Nachricht/Message fields |
| Form submission | Via Cloudflare Worker |
| Chatbot integration | "Or ask the chatbot to book a consultation" |
| Validation | Client-side + server-side validation |
| Success/error feedback | Clear confirmation after submission |
| Spam protection | Honeypot field or simple captcha |

### 5.9 Footer

**Priority**: P0 (legally required)

| Requirement | Details |
|-------------|---------|
| Impressum link | Links to full Impressum page (German, required by SS 5 TMG) |
| Datenschutz link | Links to Datenschutzerklarung page |
| Location | Berlin, Deutschland / Germany |
| Copyright | "(c) 2026 — Webentwicklung & KI-Chatbots" |

### 5.10 Legal Pages

**Priority**: P0 (legally mandatory)

| Page | Requirements |
|------|-------------|
| Impressum | Saba Gogia, Manteuffelstr. 44, Berlin, sabagogia11@gmail.com, +49 176 43168374 |
| Datenschutzerklarung | Data collection, cookies, contact form data, chatbot data processing, hosting provider info, rights of data subjects |
| Cookie Banner | Minimal banner: "Diese Website verwendet nur technisch notwendige Cookies." with accept button |

---

## 6. Technical Architecture

### 6.1 Frontend (React + Vite)

```
src/
  ├── components/
  │   ├── Navbar.jsx          — Sticky nav + DE/EN toggle
  │   ├── Hero.jsx            — Hero section with CTAs
  │   ├── Services.jsx        — Pricing cards
  │   ├── HowItWorks.jsx      — 3-step process
  │   ├── ChatbotDemo.jsx     — Demo section wrapper
  │   ├── ChatWidget.jsx      — Floating chat widget + overlay
  │   ├── About.jsx           — Bio + portfolio
  │   ├── Contact.jsx         — Contact form
  │   ├── Footer.jsx          — Footer + legal links
  │   └── CookieBanner.jsx    — Cookie consent
  ├── pages/
  │   ├── Impressum.jsx       — Legal page
  │   └── Datenschutz.jsx     — Privacy policy page
  ├── i18n/translations.js    — DE/EN content object
  ├── hooks/useLanguage.js    — Language state + toggle hook
  ├── App.jsx                 — Main app with routing
  └── main.jsx                — Entry point
```

### 6.2 Backend (Cloudflare)

```
Cloudflare Pages
  ├── Static site hosting (global CDN)
  └── Pages Functions
      └── functions/api/chat.js — Claude API proxy
          ├── Receives: { messages: [...] }
          ├── Adds: system prompt + API key
          ├── Calls: Claude API with streaming
          ├── Returns: Streamed response
          └── Rate limits: per-IP or per-session
```

### 6.3 Data Flow

```
User types message
  → chatbot.js appends to conversation history
  → POST /api/chat { messages: [...history] }
  → Cloudflare Worker receives request
  → Worker adds system prompt + API key
  → Worker calls api.anthropic.com/v1/messages (streaming)
  → Streamed response piped back to client
  → chatbot.js renders tokens as they arrive
  → User sees word-by-word response
```

### 6.4 Security

| Concern | Mitigation |
|---------|------------|
| API key exposure | Key lives only in Cloudflare env vars, never in frontend code |
| API abuse | Rate limiting (20 msgs/session), per-IP throttling |
| XSS | Sanitize all chatbot output before rendering |
| CSRF | CORS restricted to site origin |
| Data privacy | No conversation data stored server-side, DSGVO-compliant |

---

## 7. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Performance | Lighthouse Performance score >90, LCP <2.5s, FID <100ms, CLS <0.1 |
| Responsiveness | Fully functional on mobile (360px+), tablet, and desktop |
| Accessibility | WCAG 2.1 AA — semantic HTML, ARIA labels, keyboard navigation |
| Browser support | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| Load time | Initial page load <2s on 3G |
| SEO | Meta tags, Open Graph tags, semantic HTML, sitemap |
| Favicon | Custom favicon set |
| Uptime | 99.9% via Cloudflare Pages |

---

## 8. Implementation Phases

### Phase 1: Foundation (React + Vite)
- [ ] Project scaffolding (React + Vite + React Router)
- [ ] Design system implementation (colors, typography, spacing)
- [ ] Responsive navbar with DE/EN toggle
- [ ] Hero section with CTAs
- [ ] Services section with pricing cards
- [ ] "How it works" section
- [ ] About section
- [ ] Contact form (frontend only)
- [ ] Footer with legal links
- [ ] Impressum page
- [ ] Datenschutzerklarung page
- [ ] Cookie banner
- [ ] Mobile responsiveness pass
- [ ] Translation system (`translations.js` + toggle logic)

### Phase 2: Chatbot Integration
- [ ] Chatbot UI widget (floating button + chat overlay)
- [ ] Chat message rendering (user + bot messages)
- [ ] Typing indicator animation
- [ ] Cloudflare Pages Function (`/api/chat`)
- [ ] Claude API integration with streaming
- [ ] System prompt configuration
- [ ] Rate limiting implementation
- [ ] Error handling (API failures, network issues)
- [ ] Auto language detection for greeting
- [ ] Session-based conversation history
- [ ] Chatbot demo section integration

### Phase 3: Polish & Deploy
- [ ] Animations and transitions (subtle, professional)
- [ ] SEO optimization (meta tags, Open Graph, sitemap)
- [ ] Favicon
- [ ] Lighthouse audit and performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Contact form backend (Cloudflare Worker)
- [ ] Cloudflare Pages deployment
- [ ] Environment variable configuration
- [ ] Final legal review (Impressum, Datenschutz content)
- [ ] Domain configuration (if applicable)

---

## 9. Competitive Positioning (from Market Research)

### Why this site matters strategically:

- **Kleinanzeigen validation**: Competitors bundle "free KI-Chatbot" (valued at €297) with website packages from €599 — a live demo on your own site makes the chatbot tangible
- **Price anchoring**: Site displays €200 Starter tier as entry point, naturally upselling to €500-€900+ tiers
- **Trust signal**: The site IS the portfolio — its quality directly proves the developer's capability
- **AI chatbot market**: Germany's AI market projected at ~€40.4B by 2031, SME AI adoption doubled from 11% to 25% in two years
- **Target market**: 350,000 registered Berlin businesses, average digital maturity self-rating of 2.8/5
- **Funding angle**: The chatbot can mention government digitalization funding (ERP-Forderkredit, BAFA) as conversation hooks

### Key differentiators vs. competition:
1. **Live demo** — competitors describe chatbots, we let clients use one
2. **DSGVO-native** — built by a Berlin developer who understands German compliance
3. **Bilingual** — serves both German SMEs and international clients
4. **Transparent pricing** — clear tiers eliminate "request a quote" friction
5. **AI-first positioning** — not a website agency that also does chatbots; a chatbot specialist who also builds websites

---

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Claude API costs from demo abuse | High monthly bills | Rate limit (20 msgs/session), max_tokens: 500, monitor usage |
| Chatbot gives incorrect pricing | Client trust damage | Pricing hardcoded in system prompt, tested thoroughly |
| Legal non-compliance | Fines, takedown | Impressum + Datenschutz reviewed against SS 5 TMG and DSGVO |
| Slow chatbot responses | Poor demo experience | Streaming responses, typing indicator, Cloudflare edge proximity |
| Mobile UX issues | Lost Kleinanzeigen leads | Mobile-first design, tested on real devices |
| API key leak | Financial + security risk | Key only in Cloudflare env vars, CORS locked to origin |

---

## 11. Out of Scope (v1)

- CRM integration
- Analytics dashboard
- User accounts / login
- Blog / content management
- E-commerce / payment processing
- Multi-page portfolio with individual project pages
- Automated email sequences
- A/B testing
- Real appointment calendar integration (chatbot collects info, developer follows up manually)

---

## 12. Resolved Decisions

| # | Question | Decision |
|---|----------|----------|
| 1 | Framework | **React + Vite** |
| 2 | Contact form backend | **Cloudflare Worker** |
| 3 | Portfolio | **The Sample Vault** (samplevault.win) — only confirmed project for now |
| 4 | Impressum | Saba Gogia, Manteuffelstr. 44, Berlin, +49 176 43168374, sabagogia11@gmail.com |
| 5 | Domain | **No custom domain yet** — start with Cloudflare Pages default URL |
| 6 | Typography | **Google Font** — specific font to be selected during design implementation |
