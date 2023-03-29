module.exports = {
  title: '磁吸动力',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
   plugins: ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: 'Copied successfully!', // default is 'Copied successfully!'
    toolTipMessage: 'Copy to clipboard', // default is ''Copy to clipboard'
    duration: 300, // prompt message display time
  }],
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '上次更新', //最后更新时间
    nav: [
      { text: '首页', link: '/' },
      { text: '磁吸', link: '/cx' },
      { text: '文档', link: '/guide/' },
      { text: '软件下载', link: '/download' },
    ],
    sidebar: [
       {
        title: '指南',
        collapsable: false,
        children: [
          '/guide/introduction.md'
        ]
      },
      {
        title: '操作系统',
        collapsable: true,
        children: [
          '/guide/mac.md',
          '/guide/centos.md',
          '/guide/ubuntu.md'
        ]
      },
      {
        title: 'linux命令',
        collapsable: true,
        children: [
          '/guide/mv.md',
          '/guide/ls.md',
          '/guide/cp.md'
        ]
      }
    ],
    repo: 'lvzhuo1029/vuepress-starter',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页'
  }
}

