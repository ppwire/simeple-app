import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Register from '../views/Register.vue'
import Complete from '../views/Complete.vue'
import Content from '../views/Content'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
    component: Content
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
