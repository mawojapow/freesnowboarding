import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'freesnowboarding.xyz',
  title: 'freesnowboarding.xyz',
  subtitle: '🐝 happy',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/nobodies.png',
    name: 'Freesnowboarding',
    status: '🏴‍☠️',
    bio: '<br/> just a piece <br/> wanna share <br/><br/> Guud Music <br/> 🎼 <br/> Guud Movies <br/> 🎬 <br/><br/> Snowboarding <br/> <br/>🧩' },
  themeColor: '#3D4451'
}
