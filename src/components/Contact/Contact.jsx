import { useLanguage } from '../../hooks/useLanguage';
import { useContactForm } from './useContactForm';
import styles from './Contact.module.css';

function Contact() {
  const { t } = useLanguage();
  const { formData, errors, status, handleChange, handleSubmit } =
    useContactForm(t);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={styles.subtitle}>{t('contact.subtitle')}</p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {/* Honeypot — hidden from real users */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name */}
          <div className={styles.fieldGroup}>
            <label htmlFor="contact-name" className={styles.label}>
              {t('contact.name')}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.namePlaceholder')}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && (
              <span id="contact-name-error" className={styles.errorText} role="alert">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className={styles.fieldGroup}>
            <label htmlFor="contact-email" className={styles.label}>
              {t('contact.email')}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.emailPlaceholder')}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
            {errors.email && (
              <span id="contact-email-error" className={styles.errorText} role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Message */}
          <div className={styles.fieldGroup}>
            <label htmlFor="contact-message" className={styles.label}>
              {t('contact.message')}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.messagePlaceholder')}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && (
              <span id="contact-message-error" className={styles.errorText} role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'submitting'}
          >
            {status === 'submitting'
              ? t('contact.submitting')
              : t('contact.submit')}
          </button>

          {/* Status feedback */}
          {status === 'success' && (
            <div className={`${styles.statusBox} ${styles.statusSuccess}`} role="status">
              {t('contact.success')}
            </div>
          )}
          {status === 'error' && (
            <div className={`${styles.statusBox} ${styles.statusError}`} role="alert">
              {t('contact.error')}
            </div>
          )}
        </form>

        {/* Chatbot CTA */}
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>{t('contact.divider')}</span>
          <span className={styles.dividerLine} />
        </div>

        <a href="#chatbot-demo" className={styles.chatbotCta}>
          {t('contact.chatbotCta')}
        </a>
      </div>
    </section>
  );
}

export default Contact;
