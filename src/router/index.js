import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/products-&-brands",
    name: "Products & Brands",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductsBrands.vue"),
  },
  {
    path: "/experience",
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Experience.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
