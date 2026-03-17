import { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './CookieBanner.module.css';

function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable — show banner to be safe
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookieConsent', 'true');
    } catch {
      // silently fail if localStorage unavailable
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="alert" aria-live="polite">
      <div className={styles.content}>
        <p className={styles.text}>{t('cookie.text')}</p>
        <button className={styles.acceptBtn} onClick={handleAccept}>
          {t('cookie.accept')}
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
