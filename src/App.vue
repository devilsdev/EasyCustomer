<template>
  <div id="app">
    <div id="header">
      <h1>EasyCustomer</h1>
    </div>
    <div id="subheader">
      <span id="subheader">managage your customers, easy & free</span>
    </div>
    <div class="ui center aligned grid" id="contentGrid">
      <customer-list v-bind:customers="customers"></customer-list>
      <new-customer id="addCustomerButton" v-on:create-customer="addCustomer"></new-customer>
    </div>
    <div v-if="isLoadingCustomers" id="isLoadingPopup">
      <h1>Loading Customers...</h1>
    </div>
    <div v-if="emptyCustomerList" id="emptyCustomersPopup">
      <h1>No Customers found</h1>
    </div>
  </div>
</template>

<script>
import CustomerList from './components/CustomerList'
import NewCustomer from './components/NewCustomer'
import swal from 'sweetalert'

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
      customers: [],
      isLoadingCustomers: false,
      emptyCustomerList: false
    }
  },
  created () {
    this.getCustomers()
  },
  methods: {
    // adds a new customer
    addCustomer (customer) {
      this.$http.post('https://easycustomer-api.herokuapp.com/api/customer', customer)
        .then(response => {
          console.log('Customer added ' + customer.name + ' ' + customer.lastname)
          // do reload
          this.getCustomers()
        }, response => {
          swal('Could not add Customer', {icon: 'error'})
        })
    },
    getCustomers: function () {
      console.log('reload customers')
      this.isLoadingCustomers = true
      this.$http.get('https://easycustomer-api.herokuapp.com/api/customer').then(response => {
        this.customers = response.body
        this.isLoadingCustomers = false
        if (this.customers.length === 0) {
          this.emptyCustomerList = true
        }
      }, response => {
        swal('Could not get Customers', {icon: 'error'})
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

#header{
  height: 10vh;
  background-color: #3700B3;
  color: #FFFFFF;
  text-align: center;
}

#header h1{
  font-family: Helvetica, Arial, sans-serif;
  font-size: 4em;
  line-height: 12vh;
}

#subheader{
  font-size: 1em;
  line-height: 2vh;
  font-family: Helvetica, Arial, sans-serif;
  height: 2vh;
  background-color: #3700B3;
  color: #FFFFFF;
  margin-bottom: 5vh;
  text-align: center;
}

#addCustomerButton{
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: #3700B3;
}

#isLoadingPopup{
  width: 270px;
  margin: 3% auto;
}

#emptyCustomersPopup{
  width: 270px;
  margin: 3% auto;
}
</style>
