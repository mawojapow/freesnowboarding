import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'localhost:5173',
  title: 'freesnowboarding.xyz',
  subtitle: '4 Sisters and Brothers',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/nobodies.png',
    name: 'Freesnowboarding',
    status: '🏴‍☠️',
    bio: '<br/> Just a piece of a nonames story $ Humans Music Movies <br/><br/> Snowboarding <br/> <br/>🧩<br/><br/> <a href=https://www.youtube.com/watch?v=j8V-h2VVtvM>Ride</a> </center> free, stick together. <center>'
  },
  themeColor: '#3D4451'
}
