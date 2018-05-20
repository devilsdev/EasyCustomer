<template>
    <md-table-row>
        <md-table-cell>{{ customer.customerNumber }}</md-table-cell>
        <md-table-cell>{{ customer.name }}</md-table-cell>
        <md-table-cell>{{ customer.lastname }}</md-table-cell>
        <md-table-cell>{{ customer.adress }} </md-table-cell>
        <md-table-cell>{{ customer.postcode }} </md-table-cell>
        <md-table-cell>{{ customer.city }} </md-table-cell>
        <md-table-cell>{{ customer.phone }} </md-table-cell>
        <md-table-cell>{{ customer.email }} </md-table-cell>
        <md-table-cell>
            <a v-on:click="showForm"><i class="edit icon" ></i> Edit</a>
            <a v-on:click="deleteCustomer(customer)"><i class="trash alternate icon" ></i> Delete</a>
        </md-table-cell>
    </md-table-row>
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
</style>
