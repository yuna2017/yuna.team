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
    logo: {
      src: '/logo.svg'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于我们', link: '/about-us/' },
      { text: '最新动态', link: '/placeholder' },
      { text: '生存指南', link: '/placeholder' },
      { text: '加入我们', link: '/join-us/how-to.html' }
    ],

    sidebar: [
      {
        text: '关于我们',
        // collapsed: false,
        items: [
          { text: '协会概况', link: '/about-us/' },
          { text: '协会成员', link: '/about-us/members'},
          { text: '部门设置',
            items: [
              { text: "开发部", link: '/about-us/dept/dev.html'},
              { text: "网络安全部", link: '/about-us/dept/cybersec.html'},
              { text: "运维部", link: '/about-us/dept/maint.html'},
              { text: "组宣部", link: '/about-us/dept/pr.html'},
              { text: "秘书处", link: '/about-us/dept/office.html'},
            ]
          },
          { text: '名人堂', link: '/about-us/hall-of-fame.html'}
        ]
      },
      {
        text: '加入我们',
        items: [
          { text: "为什么要来网协？", link: '/join-us/why-us.html'},
          { text: "如何加入", link: '/join-us/how-to.html'}
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
