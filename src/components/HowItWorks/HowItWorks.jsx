import { useLanguage } from '../../hooks/useLanguage';
import styles from './HowItWorks.module.css';

/* Inline SVG icons for each step */
const stepIcons = [
  // Step 1: Speech bubble / chat icon (Consultation)
  <svg key="chat" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,

  // Step 2: Code brackets icon (Development)
  <svg key="code" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <polyline
      points="16 18 22 12 16 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="8 6 2 12 8 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,

  // Step 3: Rocket icon (Delivery)
  <svg key="rocket" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11.95A22 22 0 0112 15z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

function HowItWorks() {
  const { t } = useLanguage();

  const steps = t('howItWorks.steps');

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{t('howItWorks.title')}</h2>
          <p className={styles.subtitle}>{t('howItWorks.subtitle')}</p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {Array.isArray(steps) &&
            steps.map((step, i) => (
              <div key={i} className={styles.step}>
                {/* Connector line (not on the first step) */}
                {i > 0 && <div className={styles.connector} aria-hidden="true" />}

                <div className={styles.circleWrap}>
                  <div className={styles.circle}>
                    <span className={styles.circleNumber}>{i + 1}</span>
                  </div>
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.icon}>{stepIcons[i]}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
