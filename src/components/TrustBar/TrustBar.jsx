import { useLanguage } from '../../hooks/useLanguage';
import styles from './TrustBar.module.css';

function TrustBar() {
  const { t } = useLanguage();
  const stats = t('trustBar.stats');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
