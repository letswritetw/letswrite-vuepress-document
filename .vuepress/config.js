module.exports = {
  title: "Let's Write VuePress 範例",
  description: "由 Let's Write 製作的 VuePress Demo 頁面，歡迎多多分享~",
  head: [
    ['link', { rel: 'icon', href: 'https://letswritetw.github.io/letswritetw/dist/img/logo_512.png' }]
  ],
  base: '/letswrite-vuepress-document/',
  dest: 'docs',

  theme: 'default-prefers-color-scheme',

  themeConfig: {

    // Logo
    logo: './logo.svg',

    // Repository 連結
    repo: 'letswritetw/letswrite-vuepress-document',
    repoLabel: '本頁原始碼',
    docsRepo: 'https://github.com/letswritetw/letswrite-vuepress-document',
    docsDir: '',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '修改此頁面',

    // 頂部導覽列
    nav: [
      { text: '首頁', link: '/' },
      { text: "Let's Write 官網", link: 'https://www.letswrite.tw', target: '_self' },
      {
        text: '筆記文分類',
        ariaLabel: '筆記文分類',
        items: [
          { text: 'API', link: 'https://www.letswrite.tw/category/api/' },
          { text: 'Front-End', link: 'https://www.letswrite.tw/category/frontend/' },
          { text: 'Google', link: 'https://www.letswrite.tw/category/google/' },
          { text: 'Bot', link: 'https://www.letswrite.tw/category/bot/' },
          { text: 'Vue', link: 'https://www.letswrite.tw/category/vue/' },
          { text: 'PWA', link: 'https://www.letswrite.tw/category/pwa/' },
          { text: 'WordPress', link: 'https://www.letswrite.tw/category/wordpress/' },
          { text: '所有筆記文', link: 'https://www.letswrite.tw/sitemap/' },
          {
            text: '請喝咖啡',
            items: [
              { text: '台灣', link: 'https://p.ecpay.com.tw/5ABF9' },
              { text: 'Foreign', link: 'https://www.buymeacoffee.com/letswrite' }
            ]
          }
        ]
      }
    ],

    // 側邊導覽列
    sidebar: [
      // '/',
      // ['/tools/', '小工具'],
      // ['/social/', '社群']
      {
        title: '小工具',       // 必填
        path: '/tools/',     // 選填，一定要有這個資料夾及檔案
        collapsable: false, // 分組項目是否關上，true 關上、false 打開
        // 這個分組底下有哪些連結
        children: [
          '/tools/'
        ]
      },
      {
        title: '社群',
        collapsable: false,
        children: [
          ['/social/', '經營社群']
        ],
        initialOpenGroupIndex: -1 // 選填，預設值是 0
      }
    ]
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      { 'ga': 'UA-74398300-1' }
    ],
    '@vuepress/back-to-top'
  ]

}