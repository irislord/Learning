import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: App,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/home.vue"),
      },
      {
        path: "item",
        name: "item",
        component: () => import("../views/item.vue"),
      },
      {
        path: "score",
        name: "score",
        component: () => import("../views/score.vue"),
      },
    ],
  },
  //使用ES6的import（）方式实现路由懒加载
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
