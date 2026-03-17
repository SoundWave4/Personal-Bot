/**
 * Parses an SSE stream from the Claude API and yields text tokens.
 *
 * @param {Response} response - The fetch Response with streaming body
 * @param {Function} onToken - Callback called with each text token string
 * @param {AbortSignal} signal - Optional AbortSignal for cancellation
 * @returns {Promise<void>} Resolves when stream completes
 */
export async function parseSSE(response, onToken, signal) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      if (signal?.aborted) break;

      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // SSE events are separated by double newlines
      const events = buffer.split('\n\n');
      // Keep the last (possibly incomplete) chunk in the buffer
      buffer = events.pop() || '';

      for (const event of events) {
        const lines = event.split('\n');
        let eventType = '';
        let eventData = '';

        for (const line of lines) {
          if (line.startsWith('event: ')) {
            eventType = line.slice(7).trim();
          } else if (line.startsWith('data: ')) {
            eventData = line.slice(6);
          }
        }

        if (!eventData) continue;

        // Handle different event types
        if (eventType === 'content_block_delta') {
          try {
            const parsed = JSON.parse(eventData);
            if (parsed.delta?.type === 'text_delta' && parsed.delta?.text) {
              onToken(parsed.delta.text);
            }
          } catch {
            // Skip malformed JSON
          }
        } else if (eventType === 'message_stop') {
          return; // Stream complete
        } else if (eventType === 'error') {
          try {
            const parsed = JSON.parse(eventData);
            throw new Error(parsed.error?.message || 'API streaming error');
          } catch (e) {
            if (e.message !== 'API streaming error') throw e;
            throw new Error('API streaming error');
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}
