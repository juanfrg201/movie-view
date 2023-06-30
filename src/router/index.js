import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardIndex from '../views/dashboard/Index'
import axios  from 'axios'

Vue.prototype.$http = axios

const routes = [
  {
    path: '/',
    name: 'dashboard_path',
    component: DashboardIndex
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
