<template>
  <div id="app">
    <img width="130" height="130" src="../public/assets/logo.png">
    <div class="ui center aligned grid" id="contentGrid">
      <customer-list v-bind:customers="customers"></customer-list>
      <new-customer id="addCustomerButton" v-on:create-customer="addCustomer"></new-customer>
    </div>
  </div>
</template>

<script>
import CustomerList from './components/CustomerList'
import NewCustomer from './components/NewCustomer'

export default {
  name: 'App',
  components: {
    CustomerList,
    NewCustomer
  },

  data () {
  // TODO: replace test data with real data from API
    return {
      search: '',
      customers: []
    }
  },
  beforeMount: function () {
    // executed on page load
    this.getCustomers()
  },
  methods: {
    // adds a new customer
    addCustomer (customer) {
      this.customers.push(customer) // TODO: do a reload with Vue Router instead, to load live data after insert
      this.$http.post('https://easy-customer-api.herokuapp.com/api/customer', customer)
    },
    getCustomers: function () {
      this.$http.get('https://easy-customer-api.herokuapp.com/api/customer').then(function (data) {
        this.customers = data.body
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

#addCustomerButton{
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
