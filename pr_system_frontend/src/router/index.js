import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/about',
//         name: 'About',

//         component: () =>
//             import('../views/About.vue')
//     }
// ]

const routes = [
  {
    path: '/login',
    component: Login,
  },
  { path: '/:pathMatch(.*)*', redirect: '/login' },
  {
    path: '/home',
    name: 'Home',

    component: () => import('../views/Home.vue'),
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import('../views/Register.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
