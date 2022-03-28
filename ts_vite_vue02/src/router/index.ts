import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/test',
    component: () => import('@/views/test.vue')
  },
  {
    path: '/test1',
    component: () => import('@/views/test1.vue')
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/camera/:areaId',
    name: 'Camera',
    component: () => import('@/views/camera/index.vue')
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
