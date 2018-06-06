<template>
    <div id="customerList">
        <div id="searchbar">
          <input id="searchbarInput" v-model="search" type="text" placeholder="Search for Customers...">
        </div>
        <div id="customerCards">
          <customer
            v-on:delete-customer="deleteCustomer"
            v-for="customer in filteredCustomers"
            v-bind:customer="customer" :key="customer._id"
          ></customer>
        </div>
      <div v-if="isLoadingCustomers" id="isLoadingPopup">
        <h1 class="md-title">Loading Customers...</h1>
      </div>
      <div v-if="emptyCustomerList" id="emptyCustomersPopup">
        <h1 class="md-title">No Customers found</h1>
      </div>
    </div>
</template>

<script type = "text/javascript">
import swal from 'sweetalert'
import Customer from './Customer'
import CustomerEditView from './CustomerEditView'

export default {
  name: 'CustomerList',
  data () {
    return {
      search: '',
      customers: [],
      isLoadingCustomers: false,
      emptyCustomerList: false
    }
  },
  components: {
    Customer,
    CustomerEditView
  },
  created () {
    // called when this component is rendered the first time
    this.getCustomers()
  },
  computed: {
    filteredCustomers: function () {
      return this.customers.filter((customer) => {
        // each property of object in an array
        let customerProps = Object.values(customer)
        for (let prop of customerProps) {
          // TODO: search for more than 1 property
          if (prop.toLowerCase().match(this.search.toLowerCase())) {
            return true
          }
        }
      })
    }
  },
  methods: {
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
    },
    deleteCustomer (customer) {
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
          swal('Trying to delete Customer', {buttons: false})
          // try to delete the customer
          this.$http.delete('https://easycustomer-api.herokuapp.com/api/customer/' + customer._id)
            .then(response => {
              swal('Customer has been deleted successfully!', {icon: 'success'})
              // fetch the customers again
              this.getCustomers()
            }, response => {
              // handle error
              console.log('ERROR: ', response)
              swal('Customer could not be deleted', {icon: 'error'})
            })
        } else {
          swal.close()
        }
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

#customerList input:focus{
  border-bottom: 1px solid #E94B3C;
}
</style>
