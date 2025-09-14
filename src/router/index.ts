import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'),
    meta: { title: '首页', icon: 'house' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/about/index.vue'),
    meta: { title: '关于', icon: 'house' },
  },
  {
    path: '/table',
    name: 'Table',
    // component: () => import('@/pages/table/index.vue'),
    meta: { title: '桌面', icon: 'house' },
    children: [
      {
        path: 'diff',
        name: 'diff',
        component: () => import('@/pages/table/diff/index.vue'),
        meta: { title: 'diff算法', icon: 'house' },
      },
      {
        path: 'provideAndInject',
        name: 'provideAndInject',
        component: () => import('@/pages/table/provideAndInject/index.vue'),
        meta: { title: 'provide/inject', icon: 'house' },
      },
      {
        path: 'brotherCC',
        name: 'brotherCC',
        component: () => import('@/pages/table/brotherCC/index.vue'),
        meta: { title: '兄弟组件传参', icon: 'house' },
      },
      {
        path: 'customDirectives',
        name: 'customDirectives',
        component: () => import('@/pages/table/customDirectives/index.vue'),
        meta: { title: '自定义组件', icon: 'house' },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})




export default router