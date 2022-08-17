import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/firstPage/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(()=>{
  document.title = 'title'
})

export default router
