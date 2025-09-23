export const SITE = {
  title: 'Links - Daniel Callero',
  description: 'An easy way to find and get in touch with Dani Callero!',
  url: 'https://links.danicallero.es',
  ogImage: '/og-image.png',
  lang: 'en',
  // UI / theme defaults
  defaultTheme: 'system', // 'light' | 'dark' | 'system'
  // Avatar shape: 'circle' | 'rounded'
  avatarShape: 'circle' as const,
};

export type SiteConfig = typeof SITE;
