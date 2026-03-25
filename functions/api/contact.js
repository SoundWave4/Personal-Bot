// Cloudflare Pages Function — Contact Form Handler
// Environment variable: WEB3FORMS_KEY (set in Cloudflare Pages dashboard)

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await context.request.json();
    const { name, email, message, website } = body;

    // Honeypot check — if filled, it's a bot. Return success silently.
    if (website) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Server-side validation
    const errors = [];
    if (!name || !name.trim()) errors.push('Name is required');
    if (!email || !email.trim()) errors.push('Email is required');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Invalid email format');
    if (!message || !message.trim()) errors.push('Message is required');
    if (message && message.trim().length < 10) errors.push('Message must be at least 10 characters');
    if (message && message.trim().length > 5000) errors.push('Message must be under 5000 characters');

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: errors }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Check Web3Forms key is configured (handle possible trailing space in env var name)
    const web3Key = context.env.WEB3FORMS_KEY || context.env['WEB3FORMS_KEY '];
    if (!web3Key) {
      return new Response(
        JSON.stringify({ error: 'Contact service not configured' }),
        { status: 503, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Forward to Web3Forms for email delivery
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: web3Key,
        subject: `Neue Kontaktanfrage von ${name.trim()}`,
        from_name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        to: 'sabagogia11@gmail.com',
      }),
    });

    if (!web3formsResponse.ok) {
      console.error('Web3Forms error:', await web3formsResponse.text());
      return new Response(
        JSON.stringify({ error: 'Failed to send message' }),
        { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (error) {
    console.error('Contact function error:', error);
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
