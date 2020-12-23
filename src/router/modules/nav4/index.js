export default [
    {
        path: '/home',
        name: 'layout',
        component: () => import(/* webpackChunkName: "index" */ '@/views/layout/Layout.vue'),
        children: [
            {
                path: '/nav4',
                component: () => import(/* webpackChunkName: "index" */ '@/views/nav4/index.vue'),
                meta: {
                    title: 'nav4页'
                }
            }
        ],
        meta: {
          title: '海外电商首页'
        }
    },
]