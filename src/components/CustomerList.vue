<template>
    <div>
        <div class="ui search" id="searchbar">
          <input class="prompt" v-model="search" type="text" placeholder="Search for Customers...">
        </div>
        <div class="ui four column doubling grid">
          <customer v-on:update-customer="updateCustomer" v-on:delete-customer="deleteCustomer" v-for="customer in filteredCustomers"
            v-bind:customer="customer" :key="customer._id">
          </customer>
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
            let wurst = 1
            console.log(wurst)
            return true
          }
        }
      })
    }
  },
  methods: {
    deleteCustomer (customer) {
      this.$http.delete('http://localhost:5000/api/customer/' + customer._id)
      const customerIndex = this.customers.indexOf(customer)
      this.customers.splice(customerIndex, 1)
    },
    updateCustomer (customer) {
      console.log(customer)
      this.$http.put('http://localhost:5000/api/customer/' + customer._id, customer)
    }
  }
}

</script>

<style>

</style>
