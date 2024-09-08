import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.IS_GITHUB_PAGES ? '/yuna.team/' : '/',
  title: "燕山大学大学生网络信息协会",
  description: "The Official Site of the YUNA",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于我们', link: '/about-us' },
      { text: '最新动态', link: '/markdown-examples' },
      { text: '生存指南', link: '/markdown-examples' },
      { text: '加入我们', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yuna2017' }
    ]
  }
})
