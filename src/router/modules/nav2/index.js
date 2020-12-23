export default [
    {
        path: '/home',
        name: 'layout',
        component: () => import(/* webpackChunkName: "index" */ '@/views/layout/Layout.vue'),
        children: [
            {
                path: '/nav2',
                component: () => import(/* webpackChunkName: "index" */ '@/views/nav2/index.vue'),
                meta: {
                    title: 'nav2页'
                }
            }
        ],
        meta: {
          title: '海外电商首页'
        }
    },
]