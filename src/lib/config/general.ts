import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'black',
    text: '🖤 Black'
  },
  {
    name: 'retro',
    text: '🌇 Analog'
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  {
    name: 'lemonade',
    text: '🍋 Lemon'
  },
  {
    name: 'garden',
    text: '🍁 Garden'
  },
  {
    name: 'cupcake',
    text: '☯️ Outbalanced'
  },
  // {
  //   name: 'dracula',
  //   text: '🧛 Dark'
  // },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'cmyk',
    text: '🖨 Swan'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Posts',
      link: '/posts/the-dust-box-presents'
    },
    {
      text: 'More',
      link: '/more-art'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'FSB',
      link: '/'
    },
    {
      text: 'OP',
      link: 'https://onepiece-tube.com/'
    },
    {
      text: 'FCG',
      link: 'https://fc-geisslingen.de/'
    },
    {
      text: 'Impressum',
      link: '/impressum'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
