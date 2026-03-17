import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import styles from './Impressum.module.css';

function Impressum() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          {t('legal.backHome')}
        </Link>

        <h1 className={styles.pageTitle}>Impressum</h1>

        {/* Angaben gemaess § 5 TMG */}
        <h2 className={styles.sectionTitle}>
          Angaben gem&auml;&szlig; &sect; 5 TMG
        </h2>
        <p className={styles.text}>Saba Gogia</p>
        <p className={styles.text}>Manteuffelstr. 44</p>
        <p className={styles.text}>10999 Berlin</p>
        <p className={styles.text}>Deutschland</p>

        {/* Kontakt */}
        <h2 className={styles.sectionTitle}>Kontakt</h2>
        <p className={styles.text}>
          Telefon:{' '}
          <a href="tel:+4917643168374" className={styles.link}>
            +49 176 43168374
          </a>
        </p>
        <p className={styles.text}>
          E-Mail:{' '}
          <a href="mailto:sabagogia11@gmail.com" className={styles.link}>
            sabagogia11@gmail.com
          </a>
        </p>

        {/* Umsatzsteuer-ID */}
        <h2 className={styles.sectionTitle}>Umsatzsteuer-ID</h2>
        <p className={styles.text}>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27a
          Umsatzsteuergesetz:
        </p>
        <p className={styles.text}>[Wird bei Bedarf erg&auml;nzt]</p>

        {/* Verantwortlich */}
        <h2 className={styles.sectionTitle}>
          Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
        </h2>
        <p className={styles.text}>Saba Gogia</p>
        <p className={styles.text}>Manteuffelstr. 44</p>
        <p className={styles.text}>10999 Berlin</p>

        {/* Haftungsausschluss */}
        <h2 className={styles.sectionTitle}>Haftungsausschluss</h2>

        <h3 className={styles.subTitle}>Haftung f&uuml;r Inhalte</h3>
        <p className={styles.text}>
          Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt
          erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und
          Aktualit&auml;t der Inhalte k&ouml;nnen wir jedoch keine
          Gew&auml;hr &uuml;bernehmen.
        </p>

        <h3 className={styles.subTitle}>Haftung f&uuml;r Links</h3>
        <p className={styles.text}>
          Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
          deren Inhalte wir keinen Einfluss haben. F&uuml;r die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>
      </div>
    </div>
  );
}

export default Impressum;
