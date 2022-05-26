import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'

import LoginView from '@/views/LoginView.vue'
import CommunityView from '@/views/CommunityView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProfileEditView from '@/views/ProfileEditView.vue'
// import MovieDetailView from '@/views/MovieDetailView.vue'
import NotFound404 from '@/views/NotFound404.vue'
import ReviewDetailView from '@/views/ReviewDetailView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/profile/:username/edit',
    name: 'profileEdit',
    component: ProfileEditView,
  },
  {
    path: '/',  // Home
    name: 'community',
    component: CommunityView,
  },
  {
    path: '/review/:reviewPk',
    name: 'review',
    component: ReviewDetailView,
  },
  {
    path: '/movies/:moviePk',
    name: 'movie',
    component: () => import('@/views/MovieDetailView.vue'),
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
  
// })

export default router
