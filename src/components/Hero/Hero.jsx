import { useLanguage } from '../../hooks/useLanguage';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero.title')}</h1>

        <p className={styles.subtitle}>{t('hero.subtitle')}</p>

        <div className={styles.buttons}>
          <a href="#services" className={styles.ctaPrimary}>
            {t('hero.ctaServices')}
          </a>
          <a href="#chatbot-demo" className={styles.ctaSecondary}>
            {t('hero.ctaChatbot')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
