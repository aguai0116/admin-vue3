export const constantRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    //主页
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    //any
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
]
