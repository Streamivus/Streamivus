/* eslint-disable linebreak-style */

export const DEFAULT_LOCALE = 'en';

export const SupportedLocales = [
  { code: 'en', label: 'English' },
];

export const Translations = {
  en: {
    'cta.start_project': 'Start a Project',
    'cta.see_work': 'See Our Work',
    'cta.book_call': 'Book a Call',
    'cta.contact': 'Contact',
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.case_studies': 'Case Studies',
    'nav.industries': 'Industries',
    'nav.careers': 'Careers',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
  },
};

export const t = (key, locale = DEFAULT_LOCALE) => {
  const dict = Translations[locale] || Translations[DEFAULT_LOCALE];
  return dict[key] || key;
};
