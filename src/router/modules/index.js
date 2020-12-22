export default [
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
      meta: {
        title: '登录页面'
      }
    },
    {
      path: '/',
      redirect: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "index" */ '@/views/About.vue'),
      meta: {
        title: '海外电商测试页'
      }
    },
    {
      path: '/home',
      name: 'layout',
      component: () => import(/* webpackChunkName: "index" */ '@/views/layout/Layout.vue'),
      meta: {
        title: '海外电商首页'
      }
    },
    {
      path: '*',
      redirect: '/about'
    }
]
  