import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
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
      import(
        /* webpackChunkName: "products-&-brands" */ "../views/ProductsBrands.vue"
      ),
  },
  {
    path: "/experience",
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "experience" */ "../views/Experience.vue"),
  },
  {
    path: "/landing-pages",
    name: "Landing Pages",
    component: () =>
      import(
        /* webpackChunkName: "landing-pages" */ "../views/LandingPages.vue"
      ),
  },
  {
    path: "/landing-pages-2",
    name: "Landing Pages 2",
    component: () =>
      import(
        /* webpackChunkName: "landing-pages-2" */ "../views/LandingPages2.vue"
      ),
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/ContactUs.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/Login.vue"),
  },
  {
    path: "/create-account",
    name: "Create Account",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/CreateAccount.vue"),
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () =>
      import(
        /* webpackChunkName: "contact-us" */ "../views/ForgotPassword.vue"
      ),
  },
  {
    path: "/unauthorised",
    name: "Unauthorised",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/Unauthorised.vue"),
  },
  {
    path: "/error",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/Error.vue"),
  },
  {
    path: "/my-profile",
    name: "My Profile",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/MyProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
