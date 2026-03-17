import { useLanguage } from '../hooks/useLanguage';

function Datenschutz() {
  const { lang } = useLanguage();

  return (
    <section style={{ padding: 'var(--space-section) var(--space-xl)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
      <h1>{lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}</h1>
      {/* Full Datenschutz content will be implemented in Task 4 */}
    </section>
  );
}

export default Datenschutz;
