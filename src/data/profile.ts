export const PROFILE = {
  avatar: 'https://github.com/danicallero.png',
  name: 'Daniel Callero',
  tagline: '',
  location: 'A Coruña',
  avatarShape: undefined as 'circle' | 'rounded' | 'hexagon' | undefined,
};

export type Profile = typeof PROFILE;

export const SOCIAL = [
  {
    name: 'Instagram',
    icon: 'mdi:instagram',
    url: 'https://www.instagram.com/danicallero',
  },
  { name: 'X', icon: 'social/x', url: 'https://x.com/danicallero_' },
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/danicallero' },
  {
    name: 'LinkedIn',
    icon: 'mdi:linkedin',
    url: 'https://es.linkedin.com/in/daniel-callero-costales-807252270',
  },
  { name: 'Email', icon: 'mdi:email', url: 'mailto:contact@danicallero.es' },
  { name: 'PayPal', icon: 'mdi:paypal', url: 'https://paypal.me/danicalleroo' },
] as const;

export type Social = (typeof SOCIAL)[number];
