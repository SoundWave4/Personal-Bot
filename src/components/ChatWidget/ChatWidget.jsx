import { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useChat } from './useChat';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import styles from './ChatWidget.module.css';

/* ---- Inline SVG icons ---- */

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        fill="white"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 19V5M5 12l7-7 7 7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MinimizeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- ChatWidget ---- */

function ChatWidget() {
  const { t } = useLanguage();
  const {
    messages,
    isStreaming,
    error,
    messageCount,
    isLimitReached,
    isWarning,
    remaining,
    sendMessage,
    clearError,
  } = useChat();

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Listen for custom 'openChat' event (from ChatbotDemo CTA)
  useEffect(() => {
    function handleOpenChat() {
      setIsOpen(true);
    }
    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, []);

  // Auto-scroll to bottom on new messages or streaming
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isStreaming]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to wait for animation
      const id = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(id);
    }
  }, [isOpen]);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleSend = useCallback(() => {
    const text = inputValue.trim();
    if (!text) return;
    sendMessage(text);
    setInputValue('');
  }, [inputValue, sendMessage]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <>
      {/* WhatsApp button */}
      {!isOpen && (
        <a
          href="https://wa.me/4917643168374"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
          aria-label="WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}

      {/* Floating trigger button */}
      <button
        className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''} ${
          !isOpen && messageCount === 0 ? styles.triggerPulse : ''
        } ${isOpen ? styles.triggerHiddenMobile : ''}`}
        onClick={toggle}
        aria-label={t('chat.title')}
        type="button"
      >
        <span className={styles.triggerIcon}>
          {isOpen ? <CloseIcon /> : <ChatIcon />}
        </span>
      </button>

      {/* Chat panel */}
      <div
        className={`${styles.panel} ${isOpen ? styles.panelOpen : styles.panelClosed}`}
        role="complementary"
        aria-label={t('chat.title')}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className={styles.headerIcon}
            >
              <path
                d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                fill="white"
              />
            </svg>
            <span className={styles.headerTitle}>{t('chat.title')}</span>
          </div>
          <button
            className={styles.headerClose}
            onClick={toggle}
            aria-label="Close"
            type="button"
          >
            <MinimizeIcon />
          </button>
        </div>

        {/* Messages area */}
        <div className={styles.messagesArea}>
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {isStreaming &&
            messages[messages.length - 1]?.content === '' && (
              <TypingIndicator />
            )}

          {/* Error message */}
          {error && (
            <div className={styles.errorBanner} role="alert">
              <span>{error}</span>
              <button
                className={styles.errorDismiss}
                onClick={clearError}
                type="button"
                aria-label="Dismiss"
              >
                &times;
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Rate limit warning */}
        {isWarning && (
          <div className={styles.rateLimitWarning}>
            {t('chat.rateLimitWarning').replace('{count}', String(remaining))}
          </div>
        )}

        {/* Input bar */}
        <div className={styles.inputBar}>
          {isLimitReached ? (
            <div className={styles.limitReached}>
              <span>{t('chat.rateLimit')}</span>
              <a href="#contact" className={styles.limitLink} onClick={toggle}>
                {t('contact.title')}
              </a>
            </div>
          ) : (
            <>
              <input
                ref={inputRef}
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('chat.placeholder')}
                disabled={isStreaming}
                aria-label={t('chat.placeholder')}
              />
              <button
                className={styles.sendButton}
                onClick={handleSend}
                disabled={!inputValue.trim() || isStreaming}
                aria-label="Send"
                type="button"
              >
                <SendIcon />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ChatWidget;
