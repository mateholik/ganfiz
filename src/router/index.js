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
  {
    path: "/landing-pages",
    name: "Landing Pages",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LandingPages.vue"),
  },
  {
    path: "/landing-pages-2",
    name: "Landing Pages 2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LandingPages2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
