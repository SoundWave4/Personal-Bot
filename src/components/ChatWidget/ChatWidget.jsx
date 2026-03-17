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
