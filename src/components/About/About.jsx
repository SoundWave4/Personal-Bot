import { useLanguage } from '../../hooks/useLanguage';
import styles from './About.module.css';

/* Map pin icon for location line */
function MapPinIcon() {
  return (
    <svg
      className={styles.mapPin}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function About() {
  const { t } = useLanguage();

  const skills = t('about.skills');

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left column: bio + location */}
          <div className={styles.bioColumn}>
            <h2 className={styles.title}>{t('about.title')}</h2>
            <p className={styles.bio}>{t('about.bio')}</p>
            <div className={styles.location}>
              <MapPinIcon />
              <span>{t('about.location')}</span>
            </div>
          </div>

          {/* Right column: skills + portfolio link */}
          <div className={styles.skillsColumn}>
            <h3 className={styles.skillsHeading}>{t('about.portfolioLabel')}</h3>

            {/* Skill tags */}
            <div className={styles.skillTags}>
              {Array.isArray(skills) &&
                skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
            </div>

            {/* Portfolio CTA */}
            <a
              href="https://samplevault.win"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioLink}
            >
              {t('about.portfolioCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
