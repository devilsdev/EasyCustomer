<template>
    <div id="customerList">
        <div id="searchbar">
          <input id="searchbarInput" v-model="search" type="text" placeholder="Search for Customers...">
        </div>
        <div class="ui celled table">
          <thead>
            <tr>
              <th>Customer No.</th>
              <th>Name</th>
              <th>Lastname</th>
              <th>Street</th>
              <th>Postcode</th>
              <th>City</th>
              <th>Telephone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <customer
            v-on:update-customer="updateCustomer"
            v-on:delete-customer="deleteCustomer"
            v-for="customer in filteredCustomers"
            v-bind:customer="customer" :key="customer._id">
          </customer>
        </div>
        <div v-if="filteredCustomers.length === 0">
          No Customers here...
        </div>
    </div>
</template>

<script type = "text/javascript">
import Customer from './Customer'

export default {
  data () {
    return {
      search: ''
    }
  },
  props: ['customers'],
  components: {
    Customer
  },
  computed: {
    filteredCustomers: function () {
      return this.customers.filter((customer) => {
        // each property of object in an array
        let customerProps = Object.values(customer)
        for (let prop of customerProps) {
          if (prop.toLowerCase().match(this.search.toLowerCase())) {
            // if prop is matching with name or lastname, search for lastname or name
            return true
          }
        }
      })
    }
  },
  methods: {
    deleteCustomer (customer) {
      this.$http.delete('https://easy-customer-api.herokuapp.com/api/customer/' + customer._id)
      const customerIndex = this.customers.indexOf(customer)
      this.customers.splice(customerIndex, 1)
    },
    updateCustomer (customer) {
      console.log(customer)
      this.$http.put('https://easy-customer-api.herokuapp.com/api/customer/' + customer._id, customer)
    }
  }
}

</script>

<style>
#customerList input[type="text"]{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    display: block;
    width: 100%;
    padding: 7px;
    border: none;
    border-bottom: 1px solid #ddd;
    background: transparent;
    margin-bottom: 10px;
    font: 16px Arial, Helvetica, sans-serif;
    height: 45px;
}
</style>
