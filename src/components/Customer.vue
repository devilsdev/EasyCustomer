<template>
  <md-card class="md-primary">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{customer.name}} {{customer.lastname}}</div>
        <div class="md-subhead">{{customer.customerNumber}}</div>
      </md-card-header-text>
    </md-card-header>
    <md-card-content>
      {{customer.adress}}, {{customer.postcode}}, {{customer.city}} <br>
      Phone: {{customer.phone}} <br>
      Email: {{customer.email}}
    </md-card-content>
    <md-card-actions>
      <router-link to="customeredit" params: customer>
        <md-button v-on:click="goToEditView(customer)">Edit</md-button>
      </router-link>
      <md-button v-on:click="deleteCustomer(customer)">Delete</md-button>
    </md-card-actions>
  </md-card>
</template>

<script type="text/javascript">
import { bus } from '../main'
export default {
  props: ['customer'],
  data () {
    return {
    }
  },
  methods: {
    goToEditView (customer) {
      // emit an event on global bus to pass data to editView component
      bus.$emit('updateCustomer', customer)
    },
    deleteCustomer (customer) {
      this.$emit('delete-customer', customer)
    }
  }
}
</script>

<style>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
