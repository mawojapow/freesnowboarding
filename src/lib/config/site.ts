import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'freesnowboarding.vercel.app',
  title: 'freesnowboarding.xyz',
  subtitle: '🐝 happy',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/nobodies.png',
    name: 'Freesnowboarding',
    status: '🏴‍☠️',
    bio: '<br/> just a piece <br/> 🧩 <br/> wanna share <br/><br/> WU Revolu <br/> choose ur own style -> topright <br/> <br/> Guud Music <br/> 🎼 <br/> Guud Movies <br/> 🎬 <br/> Snowboarding <br/>' },
  themeColor: '#3D4451'
}
