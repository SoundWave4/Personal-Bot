import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './Navbar.module.css';

/**
 * Section IDs used for both desktop and mobile nav links.
 * Each maps to a translation key and an anchor target.
 */
const NAV_SECTIONS = [
  { id: 'services', key: 'nav.services' },
  { id: 'how-it-works', key: 'nav.howItWorks' },
  { id: 'chatbot-demo', key: 'nav.chatbot' },
  { id: 'about', key: 'nav.about' },
  { id: 'contact', key: 'nav.contact' },
];

function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef(null);

  // Scroll-aware background: add "scrolled" state after 50px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check on mount in case page is already scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver (home page only)
  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    // Disconnect previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const sectionElements = NAV_SECTIONS.map((s) =>
      document.getElementById(s.id)
    ).filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio that is intersecting
        let bestEntry = null;
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio)
          ) {
            bestEntry = entry;
          }
        }
        if (bestEntry) {
          setActiveSection(bestEntry.target.id);
        }
      },
      {
        rootMargin: `-${72 + 20}px 0px -40% 0px`,
        threshold: [0, 0.25, 0.5],
      }
    );

    observerRef.current = observer;

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isHome]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  /**
   * Handle nav link click: if on home page, smooth scroll to section.
   * If on another page, navigate to /#section-id (handled by Link).
   */
  const handleNavClick = useCallback(
    (e, sectionId) => {
      closeMobileMenu();

      if (isHome) {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // If not on home, the Link will navigate to `/#section-id`
    },
    [isHome, closeMobileMenu]
  );

  const handleLogoClick = useCallback(
    (e) => {
      closeMobileMenu();
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [isHome, closeMobileMenu]
  );

  /**
   * Compute href for nav links:
   * On home page: #section-id (for smooth scroll)
   * On other pages: /#section-id (for navigation)
   */
  const getHref = (sectionId) => (isHome ? `#${sectionId}` : `/#${sectionId}`);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link
        to="/"
        className={styles.logo}
        onClick={handleLogoClick}
        aria-label="Saba Gogia — Home"
      >
        Saba Gogia
      </Link>

      {/* Desktop nav links + lang toggle */}
      <div className={styles.desktopLinks}>
        {NAV_SECTIONS.map((section) => (
          <Link
            key={section.id}
            to={getHref(section.id)}
            className={`${styles.navLink} ${
              activeSection === section.id ? styles.navLinkActive : ''
            }`}
            onClick={(e) => handleNavClick(e, section.id)}
          >
            {t(section.key)}
          </Link>
        ))}

        <LanguageToggle lang={lang} setLang={setLang} />
      </div>

      {/* Mobile controls: small lang toggle + hamburger */}
      <div className={styles.mobileControls}>
        <LanguageToggle lang={lang} setLang={setLang} />

        <button
          className={`${styles.hamburger} ${
            mobileOpen ? styles.hamburgerOpen : ''
          }`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={`${styles.mobileOverlay} ${
          mobileOpen ? styles.mobileOverlayOpen : ''
        }`}
        aria-hidden={!mobileOpen}
      >
        {NAV_SECTIONS.map((section) => (
          <Link
            key={section.id}
            to={getHref(section.id)}
            className={`${styles.mobileNavLink} ${
              activeSection === section.id ? styles.mobileNavLinkActive : ''
            }`}
            onClick={(e) => handleNavClick(e, section.id)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {t(section.key)}
          </Link>
        ))}
      </div>
    </nav>
  );
}

/**
 * Pill-shaped DE/EN language toggle.
 * Both options are always visible; active one is highlighted.
 */
function LanguageToggle({ lang, setLang }) {
  return (
    <div className={styles.langToggle} role="group" aria-label="Language">
      <button
        className={`${styles.langOption} ${
          lang === 'de' ? styles.langActive : ''
        }`}
        onClick={() => setLang('de')}
        aria-pressed={lang === 'de'}
      >
        DE
      </button>
      <button
        className={`${styles.langOption} ${
          lang === 'en' ? styles.langActive : ''
        }`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}

export default Navbar;
