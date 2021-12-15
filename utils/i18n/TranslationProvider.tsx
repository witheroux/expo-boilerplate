import i18n, { TranslateOptions } from 'i18n-js';
import { locale as deviceLocale } from 'expo-localization';
import { createContext, useContext, useState } from 'react';
import { DEFAULT_LOCALE, Locale } from './Locale';
import { en, fr } from './translations';

i18n.translations = {
  en,
  fr,
};

/**
 * Props for the Translation Provider
 */
interface TranslationProviderProps {
  locale?: string;
}

interface TranslationContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translate: (key: string, opts?: TranslateOptions) => string;
}

/**
 * Translation context for this application.
 */
const TranslationContext = createContext<TranslationContextProps>({
  locale: DEFAULT_LOCALE,
  setLocale: () => '',
  translate: () => '',
});

function getValidLocale(locale: string): Locale {
  return locale !== 'fr' && locale !== 'en' ? DEFAULT_LOCALE : locale;
}

/**
 * Translation provider for this application.
 */
const TranslationProvider: React.FC<TranslationProviderProps> = (props) => {
  const { locale: userLocale = deviceLocale, children } = props;

  const [locale, setLocale] = useState<Locale>(getValidLocale(userLocale));

  return (
    <TranslationContext.Provider
      value={{
        locale,
        setLocale,
        translate: i18n.t,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

/**
 * Translation consumer for this application;
 */
const TranslationConsumer = TranslationContext.Consumer;

/**
 * Hook to facilitate usage of TranslationContext in a single import.
 *
 * @returns Translation from the TranslationContext
 */
const useTranslation = (): TranslationContextProps => {
  return useContext(TranslationContext);
};

export {
  getValidLocale,
  TranslationConsumer,
  TranslationContext,
  TranslationContextProps,
  TranslationProvider,
  TranslationProviderProps,
  useTranslation,
};
