import Vue from "vue";
import VueRouter from "vue-router";

import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css' // 进度条样式
NProgress.configure({ showSpinner: false }) // 不显示螺旋加载

import index from './modules/index'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location) {
  return routerPush.call(this, location).catch((error) => error)
}

Vue.use(VueRouter);

const routes = [
  ...index,
  // ...index
  // ...withdrawCash,
  // ...user,
  // ...manage
];

const router = new VueRouter({
  mode: 'history',
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
