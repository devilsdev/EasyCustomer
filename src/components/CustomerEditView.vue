<template>
  <div id="customerEditView">
    <md-button v-on:click="test()">test</md-button>
  </div>
</template>

<script type="text/javascript">
import { bus } from '../main'
export default {
  data () {
    return {
      customerData: {}
    }
  },
  mounted () {
    // get the customer
    // TODO: this is somehow NOT trigerred on the first access of the component.
    bus.$on('updateCustomer', (customer) => {
      this.setCustomer(customer)
    })
  },
  methods: {
    setCustomer (customer) {
      this.customerData = customer
      // here customerData is filled
      console.log(this.customerData)
    },
    test() {
      // here customerData is an empty object - why is that?
      console.log(this.customerData)
    }
  }
}
</script>

<style>
</style>
