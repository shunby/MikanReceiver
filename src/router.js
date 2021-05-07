import Vue from "vue";
import Router from "vue-router";

import about from "./components/About";
import index from "./components/Index";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
        path:"/",
        name:"index",
        component: index
    },
    {
        path:"/about",
        name: "about",
        component: about
    }
  ]
});
