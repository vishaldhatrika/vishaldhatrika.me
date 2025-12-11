import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
    {
      text: 'Pages',
      links: [
        {
          text: 'Home',
          href: getPermalink('/'),
        },
        {
          text: 'About me',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/about#contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy Policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Clone Portfolio', href: 'https://github.com/vishaldhatrika/vishaldhatrika.me', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Social',
      links: [
        { text: 'GitHub', href: 'https://github.com/vishaldhatrika' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/vishaldhatrika' },
        { text: 'Twitter', href: 'https://x.com/vishaldhatrika' },
      ],
    },
    {
      title: 'Me',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Projects', href: '/#projects' },
        { text: 'Contact', href: '/about#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/vishaldhatrika' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/vishaldhatrika' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/vishaldhatrika"> Vishal Dhatrika</a> · All rights reserved.
  `,
};