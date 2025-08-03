import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'),
    children: [
      {
        path: 'diff',
        name: 'diff',
        component: () => import('@/pages/home/diff/index.vue'),
        meta: { title: 'diff', icon: 'house' },
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/about/index.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/pages/table/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router