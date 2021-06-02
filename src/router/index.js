import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "contacts",
      component: () => import("@/pages/Contacts.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("@/pages/Contacts.vue"),
    },
    {
      path: "/contact/detail/:id",
      name: "detail",
      component: () => import("@/pages/Detail.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("@/pages/Favorites.vue"),
    },
  ],
});
Vue.use(router);
export default router;
