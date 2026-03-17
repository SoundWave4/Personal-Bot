// Cloudflare Pages Function — Claude API Proxy with Streaming
// Environment variable: ANTHROPIC_API_KEY (set in Cloudflare Pages dashboard)
// Optional: RATE_LIMIT_KV (KV namespace binding for rate limiting)

const SYSTEM_PROMPT = `Du bist der KI-Assistent auf der Website eines freiberuflichen Webentwicklers aus Berlin. Du hilfst potenziellen Kunden, Informationen über die angebotenen Dienstleistungen zu erhalten, und kannst Beratungstermine vereinbaren.

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

Wenn du etwas nicht weißt, sage ehrlich, dass du es nicht weißt, und schlage vor, direkt Kontakt aufzunehmen über das Kontaktformular oder per E-Mail an sabagogia11@gmail.com.`;

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    // Check API key is configured
    if (!context.env.ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'Chat service not configured' }),
        { status: 503, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Parse and validate request body
    const body = await context.request.json();

    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid request: messages must be a non-empty array' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Validate message format
    for (const msg of body.messages) {
      if (!msg.role || !msg.content || !['user', 'assistant'].includes(msg.role)) {
        return new Response(
          JSON.stringify({ error: 'Invalid message format' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }
    }

    // Rate limiting (IP-based, requires KV namespace binding)
    const clientIP = context.request.headers.get('CF-Connecting-IP') || 'unknown';
    if (context.env.RATE_LIMIT_KV) {
      const rateLimitKey = `ratelimit:${clientIP}:${Math.floor(Date.now() / 3600000)}`;
      const currentCount = parseInt(await context.env.RATE_LIMIT_KV.get(rateLimitKey) || '0', 10);

      if (currentCount >= 30) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
        );
      }

      await context.env.RATE_LIMIT_KV.put(rateLimitKey, String(currentCount + 1), {
        expirationTtl: 3600,
      });
    }

    // Trim conversation history to last 20 messages (prevent token bloat)
    const trimmedMessages = body.messages.slice(-20);

    // Call Claude API with streaming
    const apiResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': context.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: trimmedMessages,
        stream: true,
      }),
    });

    // Handle API errors
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error('Anthropic API error:', apiResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: 'AI service temporarily unavailable' }),
        { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Pipe streaming response back to client
    return new Response(apiResponse.body, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error('Chat function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
}

// CORS preflight handler
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
