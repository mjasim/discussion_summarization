import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import OverView from "@/components/OverView"
import Details from "@/components/Details"

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/overview",
    name: "OverView",
    component: OverView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => 
    //   import(/* webpackChunkName: "about" */ "../components/OverView.vue")
  },
  {
    path: "/details",
    name: "Details",
    component: Details
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => 
    //   import(/* webpackChunkName: "about" */ "../components/Details.vue")
  }
];

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/overview",
      name: "OverView",
      component: OverView
    },
    {
      path: "/details",
      name: "Details",
      component: Details
    }
  ]
})
