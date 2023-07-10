import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardIndex from '../views/dashboard/Index'
import DashboardNewMovie from '../views/dashboard/NewMovie'
import DashboardNewCategory from '../views/dashboard/NewCategory'




const routes = [
  {
    path: '/',
    name: 'dashboard_path',
    component: DashboardIndex
  },
  {
    path: '/new_movie',
    name: 'dashboard_new_movie_path',
    component: DashboardNewMovie
  },
  {
    path: '/new_category',
    name: 'dashboard_new_category_path',
    component: DashboardNewCategory
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
