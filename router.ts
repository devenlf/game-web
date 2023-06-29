export default [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '3D项目',
      path: '/home',
      component: './Home',
      routes: [
        {
          name: '演示',
          path: '/home/screen',
          component: './Home/Screen',
        },
      ]
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ]