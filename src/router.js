import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About.vue'
import Product_List from './views/Product_List.vue'
import Product_detail from './views/Product_detail.vue'
import Product_shop from './views/Product_shop.vue'
import Product_pay from './views/Product_pay.vue'
import Product_money from './views/Product_money.vue'
import Product_address from './views/Product_address.vue'
import Product_NewAddress from './views/Product_NewAddress.vue'
import Product_EditAddress from './views/Product_EditAddress.vue'
import Log_on from './views/Log_on.vue'
import join from './views/join.vue'
import User from './views/User.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:About
    },
    {
      path: '/product_list/:id',
      name: 'product_list',
      component:Product_List
    },
    {
      path: '/product_detail/:id',
      name: 'product_detail',
      component:Product_detail
    },
    {
      path: '/product_shop',
      name: 'product_shop',
      component:Product_shop

    },
    {
      path: '/product_pay',
      name: 'product_pay',
      component:Product_pay

    },
    {
      path: '/product_money/:id',
      name: 'product_money',
      component:Product_money

    },
    {
      path: '/product_address',
      name: 'product_address',
      component:Product_address

    },
    {
      path: '/product_EditAddress',
      name: 'product_EditAddress',
      component:Product_EditAddress

    },
    {
      path: '/product_NewAddress',
      name: 'product_NewAddress',
      component:Product_NewAddress

    },
    {
      path: '/log_on',
      name: 'log_on',
      component:Log_on

    },
    {
      path: '/join',
      name: 'join',
      component:join

    },
    {
      path: '/user',
      name: 'user',
      component:User

    },
  ]
})
