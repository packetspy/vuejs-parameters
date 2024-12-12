import path from 'path'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'simple-page',
        component: () => import('@/views/SimplePage.vue'),
      },
    ],
  },
  {
    path: `/page-with-parameter/:uniqueId`,
    children: [
      {
        path: '',
        name: 'pageWithParameter',
        component: () => import('@/views/PageWithParameter.vue'),
      },
    ],
    meta: { isAuthRequired: false },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
