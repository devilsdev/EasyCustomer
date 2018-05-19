import Vue from 'vue'
import Router from 'vue-router'
import CustomerList from '@/components/CustomerList'
import NewCustomer from '@/components/NewCustomer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CustomerList',
      component: CustomerList
    },
    {
      path: '/newcustomer',
      name: 'NewCustomer',
      component: NewCustomer
    }
  ]
})
