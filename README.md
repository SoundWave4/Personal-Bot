# Gogia — freelance website with a live AI sales assistant

**Live:** https://personal-bot.pages.dev

A bilingual (German / English) business website for a Berlin freelance web developer. The site is also its own product demo: the chat in the corner is the same kind of AI assistant it sells. It answers questions about services and prices, and it can book a free consultation, which arrives as an email.

Built by Sound Wave with Claude Code.

## What it does

- **AI assistant** answers in the visitor's language, knows the packages and prices, and stays on topic
- **Booking by chat:** the assistant collects name, contact, service and preferred date, then sends a booking email with the full conversation
- **Contact form** as a second way in
- **German legal pages** (Impressum, Datenschutz) and a cookie notice
- **DE / EN toggle** for all page text, remembered between visits
- Mobile-first, because many visitors come from phone listings

## Tech stack

| Part | Choice |
|------|--------|
| Frontend | React + Vite, CSS Modules |
| AI | Claude Sonnet 5.5 via the Anthropic Messages API, with tool use |
| Backend | Cloudflare Pages Functions (serverless) |
| Email | Web3Forms |
| Hosting | Cloudflare Pages, auto-deploys from `main` |

## Architecture

```
Browser (React)
   │  conversation so far
   ▼
/api/chat  (Cloudflare Pages Function)
   │  adds the system prompt + API key, trims to the last 20 messages
   ▼
Claude API ── replies, or calls the `send_booking_email` tool
   │
   ▼
Browser ── if a booking came back: sends it to Web3Forms and waits
           ├─ email accepted → shows the assistant's confirmation
           └─ email failed   → tells the visitor and points to the contact form
```

- **The API key never reaches the browser.** All Claude calls go through the serverless function, which reads the key from Cloudflare's secret settings.
- **Abuse limits:** 20 messages per session in the browser, plus an optional per-IP hourly limit in the function.
- **All visible text** goes through one translations file, so both languages stay in sync.

## Bugs I found and fixed

1. **The assistant stopped answering.** The Claude model it used was retired, so every chat ended in "service unavailable". Moved to the current model and tuned it for short, fast replies.
2. **It confirmed bookings that were never sent.** The assistant said "your request is on its way" before the email was sent, and email errors were ignored. The chat now waits for the email service to accept the booking before confirming, and is honest when sending fails.
3. **The contact form showed success on failure.** The email service can answer "OK" while reporting an error inside the response. The form now checks the actual result.
4. **Mobile chat issues:** long input text overflowed and the chat panel slid behind the navigation bar. Both fixed.

## Run it locally

```bash
npm install
npm run build
echo "ANTHROPIC_API_KEY=your-key" > .dev.vars   # local secret, gitignored
npx wrangler pages dev dist                     # site + /api/chat on localhost
```
