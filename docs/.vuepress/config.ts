
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  // TODO: $withBase
  themeConfig: {
    logo: '/images/avatar.jpeg',
    locales: {
      '/': {
        selectLanguageName: '中文',
      },
      '/en/': {
        selectLanguageName: 'English'
      }
    }
  },

  base: '/',

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '俊竣骏峻浚悛',
      description: 'Vue 驱动的静态网站生成器',
    },
    '/en/': {
      lang: 'en-US',
      title: 'AddJunZ',
      description: 'Vue-powered Static Site Generator',
    },
  },
});