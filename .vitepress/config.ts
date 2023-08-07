import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Flutter",
  description: "Flutter Note",
  base: '/flutter-note',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: "基础", link: "/base/start", activeMatch: "^/base/" },
    ],
    sidebar: [
      {
        text: '基础',
        items: [
          { text: '开始', link: '/base/start' },
          { text: '字符串', link: '/base/string' },
          { text: '数字', link: '/base/number' },
          { text: '列表', link: '/base/list' },
          { text: 'Set 和 Map', link: '/base/set-map' },
          { text: 'operator', link: '/base/operator' },
          { text: 'function', link: '/base/function' },
          { text: 'class', link: '/base/class' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shibin-cli/flutter-note' }
    ]
  }
})
