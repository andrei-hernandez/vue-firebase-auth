import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { protectedRoute: true }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/EditView.vue'),
    meta: { protectedRoute: true }
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import('../views/SignInView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.protectedRoute) {
    if (store.getters.userAuthenticated) {
      next()
    } else {
      next('/signin')
    }
  } else {
    next()
  }
})

export default router
