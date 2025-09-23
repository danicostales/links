export type LinkItem = {
  id: string;
  title: string;
  href: string;
  description?: string;
  tag?: string;
  color?: string;
  icon?: string;
};

export type LinkGroup = {
  id: string;
  title: string;
  subtitle?: string;
  color?: string;
  links: LinkItem[];
};

export const LINK_GROUPS: LinkGroup[] = [
  {
    id: 'extra',
    title: '👀',
    subtitle: 'Stuff',
    color: '#7C3AED',
    links: [
      {
        id: 'wiki',
        title: 'Wiki',
        href: 'https://wiki.danicallero.es',
        description: 'University notes',
        icon: '/wiki_icon2.png',
      },
      {
        id: 'music',
        title: 'Apple Music',
        href: 'https://music.apple.com/profile/danicallero',
        description: 'My playlists',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg',
      },
    ],
  },
];
