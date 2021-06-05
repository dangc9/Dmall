import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home/home";
import category from "../views/category/category";
import profile from "../views/profile/profile";
import shopCart from "../views/shopcart/shopCart";




// const baseurl="/dan/public/danmall/dist"

Vue.use(VueRouter)
const routes = [
  {
    path:  '',
    redirect:  '/home'
  },
  {
    path:  '/home',
    component: home
  },
  {
    path:  '/category',
    component: category
  },
  {
    path: '/shopcart',
    component: shopCart
  },
  {
    path:  '/profile',
    component: profile
  },
]

// console.log(location);
// console.log(location.href.split("#/home")[0].split(location.host)[1]);

export default new VueRouter({
  routes ,
  // mode: "history",
  base:location.href.split("/home")[0].split(location.host)[1]
})