// 配置需要展示在侧边栏的项，目前只支持2级，多级需要修改路由部分、面包屑部分
const menuConfig = [
  {
    title: '首页',
    link: '/home',
    icon: 'home'
  },
  {
    title: '地图',
    link: '/gdmap',
    icon: 'picture'
  },
  {
    title: '用户',
    link: '/user',
    icon: 'user',
    children: [
      {
        title: '联系',
        link: '/user/connect',
      },
      {
        title: '用户列表',
        link: '/user/list',
      },
    ]
  }
];

export default menuConfig;
