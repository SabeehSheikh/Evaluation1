import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginPage from '../components/login/login.vue'
import signupPage from '../components/signup/signup.vue'
import CreateComp from '../components/Todos/Create.vue'
import deleteComp from '../components/Todos/Delete.vue'
import ReadComp from '../components/Todos/Read.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/home/create',
          component: CreateComp,
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'delete',
          component: deleteComp,
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'read',
          component: ReadComp,
        },
      ],
  },
  {
    path: '/',
    name: 'login',
    component: loginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: signupPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
