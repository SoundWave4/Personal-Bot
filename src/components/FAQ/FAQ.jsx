import { useState, useCallback } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './FAQ.module.css';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        className={styles.question}
        onClick={toggle}
        aria-expanded={open}
      >
        <span>{question}</span>
        <svg
          className={styles.chevron}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={styles.answerWrap}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const { t } = useLanguage();
  const items = t('faq.items');

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('faq.title')}</h2>
        <p className={styles.subtitle}>{t('faq.subtitle')}</p>
        <div className={styles.list}>
          {items.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
