export default [
    {
      path: '/',
      redirect: '/home',
  },
  {
    name: '主页',
      path: '/home',
      component: './Home',
  },
  {
    name: '数字类型游戏',
    path: '/number-game',
    routes: [
      {
        name: '小熊的家',
        path: '/number-game/bear',
        component: './Number/Bear',
      },
    ]
  },
  {
    name: '工具',
    path: '/tool',
    component: './Tool',
    routes: [
      {
        name: '去除图片背景',
        path: '/tool/clear-image-back',
        component: './Tool/ClearImageBack',
      },
    ]
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  ]