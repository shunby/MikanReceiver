import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "./components/HelloWorld";
import index from "./components/Index";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
        path:"/",
        name:"index",
        component: index
    },
    {
        path:"/hellow",
        name: "hello",
        component: HelloWorld
    }
  ]
});