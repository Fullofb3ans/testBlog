import type { RouterConfig } from '@nuxt/schema'
export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "homePage",
      path: "/",
      component: () => import('~/pages/index.vue').then(r => r.default || r)
    },
  ],
  mode: 'history',
}