import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => require(['pages/Home/Home.vue'], resolve)
const Category = resolve => require(['pages/Category/Category.vue'], resolve)
const Cart = resolve => require(['pages/Cart/Cart.vue'], resolve)
const Mine = resolve => require(['pages/Mine/Mine.vue'], resolve)
const Login = resolve => require(['pages/Login/Login.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/Cart',
      component: Cart
    },
    {
      path: '/Mine',
      component: Mine
    },
    {
      path: '/Login',
      component: Login
    }
  ]
})
