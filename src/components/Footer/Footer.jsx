import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'var(--space-2xl) var(--space-xl)',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: 'var(--font-sm)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-lg)', marginBottom: 'var(--space-md)' }}>
        <Link to="/impressum">{t('footer.impressum')}</Link>
        <Link to="/datenschutz">{t('footer.datenschutz')}</Link>
      </div>
      <p>{t('footer.copyright').replace('{year}', year)}</p>
      <p style={{ marginTop: 'var(--space-xs)', color: 'var(--text-muted)' }}>{t('footer.location')}</p>
    </footer>
  );
}

export default Footer;
