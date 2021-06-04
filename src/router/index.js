import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home/home";
import category from "../views/category/category";
import profile from "../views/profile/profile";
import shopCart from "../views/shopcart/shopCart";




// const baseurl="/dan/public/danmall/dist"
const baseurl=""

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: baseurl + '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path:  baseurl + '/category',
    component: category
  },
  {
    path:  baseurl + '/shopcart',
    component: shopCart
  },
  {
    path: baseurl + '/profile',
    component: profile
  },
]

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  routes ,
  mode:"history"
})