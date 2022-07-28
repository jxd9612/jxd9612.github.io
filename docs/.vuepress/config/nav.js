// nav
module.exports = [
  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  { text: '首页', link: '/' },
  { text: '前端', link: '/web/' },
  { text: '后端', link: '/server/' },
  { text: '技术', link: '/technology/' },
  { text: '算法', link: '/algorithm/' },
  { text: '阅读', link: '/read/' },
  { text: '基础', link: '/base/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
];
