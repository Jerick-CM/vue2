import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

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
    path: "/terms-of-service",
    name: "Privacy Policy",
    component: () => import("../views/PrivacyPolicy.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Terms of Service",
    component: () => import("../views/TermsOfService.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
