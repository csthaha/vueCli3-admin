export default [
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "index" */ '@/views/About.vue'),
      meta: {
        title: '海外电商'
      }
    }
]
  