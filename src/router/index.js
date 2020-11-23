import Vue from "vue";
import VueRouter from "vue-router";
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
        component: () => import("../pages/Category.vue")
      }
    ]
  },
  {
    component: PublicRouter,
    path: "/product_of_category",
    children: [
      {
        path: "",
        component: () => import("../pages/ProductCategory.vue")
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
