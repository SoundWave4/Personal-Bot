import { useLanguage } from '../../hooks/useLanguage';
import styles from './Comparison.module.css';

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(27, 94, 59, 0.1)" />
      <path d="M6 10.5L8.5 13L14 7" stroke="#1B5E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(220, 60, 60, 0.08)" />
      <path d="M7 7L13 13M13 7L7 13" stroke="#DC3C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Comparison() {
  const { t } = useLanguage();
  const rows = t('comparison.rows');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('comparison.title')}</h2>
        <p className={styles.subtitle}>{t('comparison.subtitle')}</p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureHeader}></th>
                <th className={styles.colHeader}>
                  <span className={styles.colLabel}>{t('comparison.traditional')}</span>
                </th>
                <th className={`${styles.colHeader} ${styles.colHighlight}`}>
                  <span className={styles.colLabel}>{t('comparison.ai')}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className={styles.featureCell}>{row.feature}</td>
                  <td className={styles.valueCell}>
                    <CrossIcon />
                    <span>{row.traditional}</span>
                  </td>
                  <td className={`${styles.valueCell} ${styles.valueCellHighlight}`}>
                    <CheckIcon />
                    <span>{row.ai}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Comparison;
