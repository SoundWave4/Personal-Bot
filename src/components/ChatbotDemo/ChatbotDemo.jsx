import { useLanguage } from '../../hooks/useLanguage';
import styles from './ChatbotDemo.module.css';

/* Decorative chat bubble icon for the browser mockup */
function DemoChatIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={styles.demoIcon}
    >
      <path
        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Arrow pointing to bottom-right where the chat trigger button lives */
function PointingArrow() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={styles.arrow}
    >
      <path
        d="M12 12 C 24 20, 36 32, 52 52"
        stroke="var(--accent-blue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M44 50 L52 52 L50 44"
        stroke="var(--accent-blue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatbotDemo() {
  const { t } = useLanguage();

  function handleTryChat() {
    window.dispatchEvent(new Event('openChat'));
  }

  return (
    <section id="chatbot-demo" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('chatbotDemo.title')}</h2>
        <p className={styles.subtitle}>{t('chatbotDemo.subtitle')}</p>

        {/* Browser window mockup */}
        <div className={styles.mockup}>
          <div className={styles.mockupBar}>
            <span className={styles.dot} data-color="red" />
            <span className={styles.dot} data-color="yellow" />
            <span className={styles.dot} data-color="green" />
          </div>
          <div className={styles.mockupBody}>
            <DemoChatIcon />
            <p className={styles.mockupText}>{t('chatbotDemo.subtitle')}</p>
            <button
              type="button"
              className={styles.tryButton}
              onClick={handleTryChat}
            >
              {t('chatbotDemo.cta')}
            </button>
            <PointingArrow />
          </div>
        </div>

        {/* CTA area */}
        <p className={styles.ctaText}>{t('chatbotDemo.ctaText')}</p>
        <a href="#contact" className={styles.ctaButton}>
          {t('chatbotDemo.cta')}
        </a>
      </div>
    </section>
  );
}

export default ChatbotDemo;
