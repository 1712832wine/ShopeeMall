import Vue from "vue";
import VueRouter from "vue-router";
import ProductCategory from "../pages/ProductCategory";
import PublicRouter from "./PublicRouter.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: PublicRouter,
    path: "/",
    children: [
      {
        path: "",
        component: () => import("../pages/Home.vue")
      }
    ]
  },
  {
    component: PublicRouter,
    path: "/all_category",
    children: [
      {
        path: "",
        name: "Category",
        component: ProductCategory
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
