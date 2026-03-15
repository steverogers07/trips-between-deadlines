import { defaultLocale, type Locale, locales } from './config';
import en from './translations/en.json';

const translations: Record<Locale, Record<string, string>> = { en };

export function t(locale: Locale, key: string): string {
  return translations[locale]?.[key] ?? translations[defaultLocale][key] ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (locales.includes(lang as Locale)) return lang as Locale;
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/en/, '');
  return `/${locale}${cleanPath || '/'}`;
}

export function getAlternateLocales(currentLocale: Locale): Locale[] {
  return locales.filter((l) => l !== currentLocale);
}

export function formatCurrency(amount: number, currency: string): string {
  const localeMap: Record<string, string> = { INR: 'en-IN', USD: 'en-US', EUR: 'de-DE', GBP: 'en-GB', JPY: 'ja-JP', THB: 'th-TH' };
  return new Intl.NumberFormat(localeMap[currency] || 'en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
