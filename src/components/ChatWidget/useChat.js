import { useState, useRef, useCallback, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const MAX_MESSAGES = 20;
const WARN_THRESHOLD = 18;
const TIMEOUT_MS = 30000;
const SESSION_KEY = 'chatMessageCount';
const WEB3FORMS_KEY = 'c41be729-6157-484b-a675-a564e507cd16';

function getStoredCount() {
  try {
    return parseInt(sessionStorage.getItem(SESSION_KEY) || '0', 10);
  } catch {
    return 0;
  }
}

function setStoredCount(count) {
  try {
    sessionStorage.setItem(SESSION_KEY, String(count));
  } catch {
    // sessionStorage unavailable — silently ignore
  }
}

function makeGreeting(t) {
  return {
    id: 'greeting',
    role: 'assistant',
    content: t('chat.greeting'),
    timestamp: new Date(),
  };
}

export function useChat() {
  const { t, lang } = useLanguage();

  const [messages, setMessages] = useState(() => [makeGreeting(t)]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(null);
  const [messageCount, setMessageCount] = useState(getStoredCount);

  const abortRef = useRef(null);

  // Update greeting when language changes
  useEffect(() => {
    setMessages((prev) => {
      const updated = [...prev];
      const idx = updated.findIndex((m) => m.id === 'greeting');
      if (idx !== -1) {
        updated[idx] = { ...updated[idx], content: t('chat.greeting') };
      }
      return updated;
    });
  }, [lang, t]);

  const isLimitReached = messageCount >= MAX_MESSAGES;
  const isWarning = messageCount >= WARN_THRESHOLD && !isLimitReached;
  const remaining = MAX_MESSAGES - messageCount;

  const clearError = useCallback(() => setError(null), []);

  const resetChat = useCallback(() => {
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
    setMessages([makeGreeting(t)]);
    setMessageCount(0);
    setStoredCount(0);
    setIsStreaming(false);
    setError(null);
  }, [t]);

  const sendMessage = useCallback(
    async (text) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming || isLimitReached) return;

      // Update count
      const newCount = messageCount + 1;
      setMessageCount(newCount);
      setStoredCount(newCount);

      if (newCount > MAX_MESSAGES) return;

      // Create user message
      const userMsg = {
        id: crypto.randomUUID?.() || Date.now().toString(),
        role: 'user',
        content: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsStreaming(true);
      setError(null);

      // Build API payload (exclude greeting)
      const apiMessages = [...messages.filter((m) => m.id !== 'greeting'), userMsg].map(
        ({ role, content }) => ({ role, content })
      );

      // Set up abort controller with timeout
      const controller = new AbortController();
      abortRef.current = controller;
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages }),
          signal: controller.signal,
        });

        if (!response.ok) {
          let errMsg;
          try {
            const errData = await response.json();
            errMsg = errData.error || response.statusText;
          } catch {
            errMsg = response.statusText;
          }
          throw new Error(errMsg);
        }

        const data = await response.json();

        // If backend detected a booking, send the email from the frontend
        // and wait for the result, so the visitor only sees a confirmation
        // once the email has actually been accepted by Web3Forms.
        let bookingFailed = false;
        if (data.booking) {
          const allMsgs = [...messages.filter((m) => m.id !== 'greeting'), userMsg];
          const log = allMsgs.map((m) => `[${m.role === 'user' ? 'KUNDE' : 'BOT'}]: ${m.content}`).join('\n\n');
          const b = data.booking;
          const lines = [
            'NEUE BUCHUNGSANFRAGE VIA CHATBOT',
            '================================',
            '',
            `Name: ${b.name}`,
            b.email ? `E-Mail: ${b.email}` : '',
            b.phone ? `Telefon: ${b.phone}` : '',
            b.service ? `Service: ${b.service}` : '',
            b.website_url ? `Website: ${b.website_url}` : '',
            b.preferred_date ? `Wunschtermin: ${b.preferred_date}` : '',
            b.budget ? `Budget: ${b.budget}` : '',
            b.project_description ? `\nProjektbeschreibung:\n${b.project_description}` : '',
            '',
            '================================',
            'GESPRACHSVERLAUF:',
            '================================',
            '',
            log,
          ].filter(Boolean).join('\n');

          try {
            const bookingResponse = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                access_key: WEB3FORMS_KEY,
                subject: `Neue Chatbot-Buchung von ${b.name}${b.service ? ` - ${b.service}` : ''}`,
                from_name: `Chatbot Lead: ${b.name}`,
                email: b.email || 'chatbot@personal-bot.pages.dev',
                message: lines,
              }),
            });
            const bookingResult = await bookingResponse.json().catch(() => null);
            bookingFailed = !bookingResponse.ok || !bookingResult?.success;
          } catch {
            bookingFailed = true;
          }
        }

        // Create assistant message from JSON response
        const assistantMsg = {
          id: crypto.randomUUID?.() || (Date.now() + 1).toString(),
          role: 'assistant',
          content: bookingFailed ? t('chat.bookingFailed') : data.content || '',
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMsg]);
      } catch (err) {
        if (err.name === 'AbortError') {
          setError(t('chat.networkError'));
        } else if (err.message === 'Failed to fetch' || err.message.includes('network')) {
          setError(t('chat.networkError'));
        } else {
          setError(t('chat.error'));
        }
      } finally {
        clearTimeout(timeoutId);
        abortRef.current = null;
        setIsStreaming(false);
      }
    },
    [isStreaming, isLimitReached, messageCount, messages, t]
  );

  return {
    messages,
    isStreaming,
    error,
    messageCount,
    isLimitReached,
    isWarning,
    remaining,
    sendMessage,
    clearError,
    resetChat,
  };
}
