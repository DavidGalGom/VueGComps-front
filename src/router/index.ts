import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: () => import("../views/ShoppingCart.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () => import("../views/Details.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
