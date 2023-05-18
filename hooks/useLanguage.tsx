import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';

export enum Locale {
  De = 'de-DE',
  En = 'en-US',
}

type LanguageContextType = {
  language: Locale;
  setLanguage: (language: Locale) => any;
};

const LanguageContext = createContext<LanguageContextType>({
  language: Locale.De,
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState(Locale.De);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const router = useRouter();

  const lang = router.query.lang || router.locale;

  const { language, setLanguage } = useContext(LanguageContext);

  if (lang == Locale.En) {
    setLanguage(Locale.En);
  }

  function setLanguageAndAddToQuery(language: Locale) {
    setLanguage(language);
    router.push(router.pathname, {
      query: {
        lang: language,
      },
    });
  }

  function handleLanguage(versions: Record<Locale, React.ReactNode>) {
    return versions[language] || versions['de-DE'];
  }

  return {
    language,
    handleLanguage,
    setLanguage: setLanguageAndAddToQuery,
  };
}
