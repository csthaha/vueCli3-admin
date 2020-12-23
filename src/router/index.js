import Vue from "vue";
import VueRouter from "vue-router";

import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css' // 进度条样式
NProgress.configure({ showSpinner: false }) // 不显示螺旋加载

import index from './modules/index'
import nav2 from './modules/nav2/index'
import nav4 from './modules/nav4/index'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location) {
  return routerPush.call(this, location).catch((error) => error)
}

Vue.use(VueRouter);

const routes = [
  ...index,
  ...nav2,
  ...nav4
  // ...index
  // ...withdrawCash,
  // ...user,
  // ...manage
];

const router = new VueRouter({
  // mode: 'history',   
  // 正常项目中我们会因为网站路径中带有“#”而将vue-router开启history模式，
  // 以去掉#号。但开启history模式需要服务器的支持，因此在github pages中不支持这一模式，
  // 所以我们不能开启history模式。
  base: process.env.VUE_APP_BASE_URL, 
  routes,
  scrollBehavior(to, from) {
    return {
      x: 0,
      y: 0
    }
  }
})
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start()
  // if (store.getters.token) return next()
  // if (to.path === '/login') return next()
  // next({ path: '/login', replace: true })
  next()
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  NProgress.done() // 结束Progress
})

export default router;
