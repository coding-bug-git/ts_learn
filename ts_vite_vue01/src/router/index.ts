import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../components/MyComp.vue')
  },
  {
    path: '/hello',
    component: () => import('../components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from) => {
//   next()
// })

export default router
