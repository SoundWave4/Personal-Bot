import { createContext, useState, useCallback } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext(undefined);

/**
 * Traverses a nested object using a dot-notation key path.
 * Returns the value if found, or the key string itself as fallback.
 */
function getNestedValue(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;

  for (const key of keys) {
    if (current === undefined || current === null) {
      return keyPath;
    }
    current = current[key];
  }

  return current !== undefined ? current : keyPath;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'de';
    } catch {
      return 'de';
    }
  });

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('lang', newLang);
    } catch {
      // localStorage may be unavailable (e.g., private browsing)
    }
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback(
    (key) => {
      const langData = translations[lang];
      if (!langData) return key;
      return getNestedValue(langData, key);
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
