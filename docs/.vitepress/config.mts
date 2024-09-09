import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.IS_GITHUB_PAGES ? '/yuna.team/' : '/',
  title: "燕山大学大学生网络信息协会",
  description: "The Official Site of the YUNA",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于我们', link: '/about-us/' },
      { text: '最新动态', link: '/placeholder' },
      { text: '生存指南', link: '/placeholder' },
      { text: '加入我们', link: '/join-us' }
    ],

    sidebar: [
      {
        text: '关于我们',
        items: [
          { text: '协会概况', link: '/about-us/' },
          { text: '加入我们', link: '/join-us' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuna2017' }
    ]
  },
  head: [
    [
      'script',
      {
        "data-cf-beacon": '{"token": "ba3256b1ea314159a890b140f590cbc1"}',
        src: 'https://static.cloudflareinsights.com/beacon.min.js',
        "defer": ''
      }
    ]
  ]
})
