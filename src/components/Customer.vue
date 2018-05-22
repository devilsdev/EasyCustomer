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
      <md-button v-on:click="showForm">Edit</md-button>
      <md-button v-on:click="deleteCustomer(customer)">Delete</md-button>
    </md-card-actions>
  </md-card>
</template>

<script type="text/javascript">
export default {
  props: ['customer'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    callUpdateCustomer (customer) {
      this.isEditing = false
      // update the saved data
      this.$emit('update-customer', this.customer)
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
