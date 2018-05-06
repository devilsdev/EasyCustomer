<template>
  <div id="app">
    <h1>Customer App</h1>
    <div>
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
      this.$http.post('http://localhost:5000/api/customer', customer)
    },
    getCustomers: function () {
      this.$http.get('http://localhost:5000/api/customer').then(function (data) {
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
  margin-top: 60px;
}

#searchbar{
  align: center;
}

#addCustomerButton{
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
