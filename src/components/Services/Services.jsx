import { useLanguage } from '../../hooks/useLanguage';
import styles from './Services.module.css';

/* Reusable checkmark icon (green) */
function Check() {
  return (
    <svg
      className={styles.checkIcon}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* A single pricing / service card */
function ServiceCard({ name, price, description, features, cta, badge, highlighted }) {
  const cls = [styles.card];
  if (highlighted) cls.push(styles.cardHighlighted);

  return (
    <div className={cls.join(' ')}>
      {badge && <span className={styles.badge}>{badge}</span>}

      <h4 className={styles.cardName}>{name}</h4>
      <p className={styles.cardPrice}>{price}</p>
      <p className={styles.cardDescription}>{description}</p>

      {features && features.length > 0 && (
        <ul className={styles.featureList}>
          {features.map((feature, i) => (
            <li key={i} className={styles.featureItem}>
              <Check />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {cta && (
        <a href="#contact" className={styles.ctaButton}>
          {cta}
        </a>
      )}
    </div>
  );
}

function Services() {
  const { t } = useLanguage();

  // Website tiers
  const websiteTiers = ['starter', 'standard', 'premium'];

  // Chatbot tiers
  const chatbotTiers = ['faq', 'assistant'];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{t('services.title')}</h2>
          <p className={styles.subtitle}>{t('services.subtitle')}</p>
        </div>

        {/* Group 1: Website Erstellung */}
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>{t('services.websites.title')}</h3>
          <div className={styles.websiteGrid}>
            {websiteTiers.map((tier) => (
              <ServiceCard
                key={tier}
                name={t(`services.websites.${tier}.name`)}
                price={t(`services.websites.${tier}.price`)}
                description={t(`services.websites.${tier}.description`)}
                features={t(`services.websites.${tier}.features`)}
                cta={t(`services.websites.${tier}.cta`)}
                badge={tier === 'premium' ? t('services.websites.premium.badge') : null}
                highlighted={tier === 'premium'}
              />
            ))}
          </div>
        </div>

        {/* Group 2: Website Redesign */}
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>{t('services.redesign.title')}</h3>
          <div className={styles.redesignGrid}>
            <ServiceCard
              name={t('services.redesign.title')}
              price=""
              description={t('services.redesign.description')}
              features={t('services.redesign.features')}
              cta={t('services.redesign.cta')}
            />
          </div>
        </div>

        {/* Group 3: KI-Chatbot */}
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>{t('services.chatbot.title')}</h3>
          <div className={styles.chatbotGrid}>
            {chatbotTiers.map((tier) => (
              <ServiceCard
                key={tier}
                name={t(`services.chatbot.${tier}.name`)}
                price={t(`services.chatbot.${tier}.price`)}
                description={t(`services.chatbot.${tier}.description`)}
                features={t(`services.chatbot.${tier}.features`)}
                cta={t(`services.chatbot.${tier}.cta`)}
              />
            ))}
          </div>

          {/* Maintenance aside */}
          <div className={styles.maintenanceNote}>
            <span className={styles.maintenanceName}>
              {t('services.chatbot.maintenance.name')}
            </span>
            <span className={styles.maintenancePrice}>
              {t('services.chatbot.maintenance.price')}
            </span>
            <span className={styles.maintenanceDesc}>
              {t('services.chatbot.maintenance.description')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
