import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  // Scroll to top of the page when changing routes
  // scrollBehavior (to, from, savedPosition)
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})
