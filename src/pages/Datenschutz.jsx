import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import styles from './Datenschutz.module.css';

function Datenschutz() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          {t('legal.backHome')}
        </Link>

        <h1 className={styles.pageTitle}>Datenschutzerkl&auml;rung</h1>

        {/* 1. Verantwortlicher */}
        <h2 className={styles.sectionTitle}>1. Verantwortlicher</h2>
        <p className={styles.text}>Saba Gogia</p>
        <p className={styles.text}>Manteuffelstr. 44</p>
        <p className={styles.text}>10999 Berlin</p>
        <p className={styles.text}>Deutschland</p>
        <p className={styles.text}>
          E-Mail:{' '}
          <a href="mailto:sabagogia11@gmail.com" className={styles.link}>
            sabagogia11@gmail.com
          </a>
        </p>
        <p className={styles.text}>
          Telefon:{' '}
          <a href="tel:+4917643168374" className={styles.link}>
            +49 176 43168374
          </a>
        </p>

        {/* 2. Hosting */}
        <h2 className={styles.sectionTitle}>2. Hosting</h2>
        <p className={styles.text}>
          Diese Website wird gehostet von Cloudflare, Inc. (101 Townsend St,
          San Francisco, CA 94107, USA). Cloudflare verarbeitet dabei technisch
          notwendige Daten (z.B. IP-Adresse) gem&auml;&szlig; den
          EU-Standardvertragsklauseln.
        </p>
        <p className={styles.text}>
          Weitere Informationen:{' '}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://www.cloudflare.com/privacypolicy/
          </a>
        </p>

        {/* 3. Kontaktformular */}
        <h2 className={styles.sectionTitle}>3. Kontaktformular</h2>
        <p className={styles.text}>
          Wenn Sie uns per Kontaktformular kontaktieren, werden Ihre Angaben
          (Name, E-Mail, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet.
        </p>
        <p className={styles.text}>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
          bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
        </p>
        <p className={styles.text}>
          Die Daten werden nicht dauerhaft gespeichert und nach Bearbeitung der
          Anfrage gel&ouml;scht.
        </p>

        {/* 4. KI-Chatbot */}
        <h2 className={styles.sectionTitle}>4. KI-Chatbot</h2>
        <p className={styles.text}>
          Diese Website bietet einen KI-gest&uuml;tzten Chatbot, der
          &uuml;ber die API von Anthropic (Claude) betrieben wird.
        </p>
        <p className={styles.text}>
          Ihre Chatnachrichten werden zur Verarbeitung an Anthropic (Anthropic,
          PBC, San Francisco, USA) &uuml;bermittelt.
        </p>
        <p className={styles.text}>
          Die Konversationen werden NICHT serverseitig gespeichert und nach
          Ende der Sitzung automatisch gel&ouml;scht.
        </p>
        <p className={styles.text}>
          Anthropic verarbeitet die Daten gem&auml;&szlig; ihrer
          Datenschutzrichtlinie:{' '}
          <a
            href="https://www.anthropic.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://www.anthropic.com/privacy
          </a>
        </p>
        <p className={styles.text}>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch
          Nutzung des Chatbots).
        </p>

        {/* 5. Cookies */}
        <h2 className={styles.sectionTitle}>5. Cookies</h2>
        <p className={styles.text}>
          Diese Website verwendet ausschlie&szlig;lich technisch notwendige
          Cookies (z.B. Spracheinstellung, Cookie-Einwilligung).
        </p>
        <p className={styles.text}>
          Es werden KEINE Tracking-, Analyse- oder Werbe-Cookies eingesetzt.
        </p>
        <p className={styles.text}>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse).
        </p>

        {/* 6. Ihre Rechte */}
        <h2 className={styles.sectionTitle}>6. Ihre Rechte</h2>
        <p className={styles.text}>
          Sie haben das Recht auf: Auskunft (Art. 15 DSGVO), Berichtigung
          (Art. 16), L&ouml;schung (Art. 17), Einschr&auml;nkung (Art. 18),
          Daten&uuml;bertragbarkeit (Art. 20), Widerspruch (Art. 21).
        </p>
        <p className={styles.text}>
          Beschwerderecht bei der Aufsichtsbeh&ouml;rde: Berliner Beauftragte
          f&uuml;r Datenschutz und Informationsfreiheit, Friedrichstr. 219,
          10969 Berlin.
        </p>

        {/* 7. Aenderungen */}
        <h2 className={styles.sectionTitle}>7. &Auml;nderungen</h2>
        <p className={styles.text}>
          Wir behalten uns vor, diese Datenschutzerkl&auml;rung bei Bedarf zu
          aktualisieren.
        </p>

        <p className={styles.lastUpdated}>Stand: M&auml;rz 2026</p>
      </div>
    </div>
  );
}

export default Datenschutz;
