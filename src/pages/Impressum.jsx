import { useLanguage } from '../hooks/useLanguage';

function Impressum() {
  const { lang } = useLanguage();

  return (
    <section style={{ padding: 'var(--space-section) var(--space-xl)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
      <h1>{lang === 'de' ? 'Impressum' : 'Imprint'}</h1>
      {/* Full Impressum content will be implemented in Task 4 */}
    </section>
  );
}

export default Impressum;
