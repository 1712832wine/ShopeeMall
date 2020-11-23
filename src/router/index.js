/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import ProductCategory from "../pages/ProductCategory"
import ProductOfSingleCategory from "../pages/ProductSingleCategory"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category",
    name: "Category",
    component: ProductCategory
  },
  {
    path: "/productOfSingleCategory",
    name: "ProductOfSingleCategory",
    component:ProductOfSingleCategory
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
