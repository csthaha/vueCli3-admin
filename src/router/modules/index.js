export default [
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "index" */ '@/views/About.vue'),
      meta: {
        title: '海外电商'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "index" */ '@/views/layout/Layout.vue'),
      meta: {
        title: '海外电商布局'
      }
    }
]
  