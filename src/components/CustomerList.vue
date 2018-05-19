<template>
    <div id="customerList">
        <div id="searchbar">
          <input id="searchbarInput" v-model="search" type="text" placeholder="Search for Customers...">
        </div>
        <div class="ui celled table" id="listviewcustomer">
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
    </div>
</template>

<script type = "text/javascript">
import swal from 'sweetalert'
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
      console.log('deletecustomer()', customer)
      // ask user if he wants to delete customer
      swal({
        title: 'Delete this Customer? ' + customer.name + ' ' + customer.lastname,
        text: 'Once deleted, you will not be able to recover your Customer data',
        icon: 'warning',
        buttons: [true, 'Delete'],
        dangerMode: true
      }).then((willDelete) => {
        if (willDelete) {
          // show user that it is trying to delete (wait for timeout)
          swal('Trying to delete Customer', {buttons: false, timer: 40000})
          // try to delete the customer
          this.$http.delete('https://easycustomer-api.herokuapp.com/api/customer/' + customer._id)
            .then(response => {
              if (response.status === 200) {
                console.log('worked')
              }
              swal('Customer has been deleted successfully!', {icon: 'success'})
              const customerIndex = this.customers.indexOf(customer)
              this.customers.splice(customerIndex, 1)
            }, response => {
              // handle error
              console.log('ERROR: ', response)
              swal('Customer could not be deleted', {icon: 'error'})
            })
        } else {
          swal.close()
        }
      })
    },
    updateCustomer (customer) {
      this.$http.put('https://easycustomer-api.herokuapp.com/api/customer/' + customer._id, customer)
        .then(response => {
          console.log('Updated Customer with id: ' + customer._id)
        }, response => {
          swal('Customer could not be updated', {icon: 'error'})
        })
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

@media only screen and (max-width: 800px) {
  #listviewcustomer{
    max-width:100px;
  }
}

</style>
