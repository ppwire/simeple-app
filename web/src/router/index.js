import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Register from '../views/Register.vue'
import Complete from '../views/Complete.vue'
import Content from '../views/Content'
import NotFound from '../views/NotFound'
import store from '../store'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.state.signIn.token) {
        next({ name: 'Content' })
      } else {
        next()
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: '/complete',
    name: "Complete",
    component: Complete
  },
  {
    path: '/content',
    name: 'Content',
    component: Content,
    beforeEnter: (to, from, next) => {
      if (store.state.signIn.token) {
        next()
      } else {
        next({ name: 'Home' })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
