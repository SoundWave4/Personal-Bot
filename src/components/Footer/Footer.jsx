import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './Footer.module.css';

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Column 1: Brand */}
          <div>
            <h3 className={styles.brandName}>Saba Gogia</h3>
            <p className={styles.tagline}>{t('footer.madeWith')}</p>
            <p className={styles.location}>
              <svg
                className={styles.locationIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t('footer.location')}
            </p>
          </div>

          {/* Column 2: Services + Legal links */}
          <div>
            <div className={styles.linkGroup}>
              <h4 className={styles.columnHeader}>{t('footer.services')}</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/#services" className={styles.footerLink}>
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link to="/#chatbot-demo" className={styles.footerLink}>
                    {t('nav.chatbot')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.columnHeader}>{t('footer.legal')}</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/impressum" className={styles.footerLink}>
                    {t('footer.impressum')}
                  </Link>
                </li>
                <li>
                  <Link to="/datenschutz" className={styles.footerLink}>
                    {t('footer.datenschutz')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className={styles.columnHeader}>{t('footer.contact')}</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <a
                  href="mailto:sabagogia98@gmail.com"
                  className={styles.contactLink}
                >
                  sabagogia98@gmail.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <a href="tel:+4917643168374" className={styles.contactLink}>
                  +49 176 43168374
                </a>
              </li>
              <li className={styles.contactItem}>{t('footer.location')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            {t('footer.copyright').replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
