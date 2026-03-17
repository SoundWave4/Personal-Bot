import { useLanguage } from '../../hooks/useLanguage';

function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav
      style={{
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--space-xl)',
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <span style={{ fontWeight: 700, fontSize: 'var(--font-xl)' }}>
        Saba Gogia
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
        <a href="#services">{t('nav.services')}</a>
        <a href="#how-it-works">{t('nav.howItWorks')}</a>
        <a href="#chatbot-demo">{t('nav.chatbot')}</a>
        <a href="#about">{t('nav.about')}</a>
        <a href="#contact">{t('nav.contact')}</a>

        <button
          onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: 'var(--space-xs) var(--space-sm)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: 'var(--font-sm)',
          }}
          aria-label={lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
        >
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
