<template>
  <div id="customerEditView">
    <!--->
    <div class="md-title">{{customerData.name}} {{customerData.lastname}}</div>
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
  created () {
    // TODO: this is somehow NOT trigerred on the first access of the component.
    bus.$on('updateCustomer', (customer) => {
      console.log('event "updateCustomer" trigerred successfully!')
      this.customerData = customer
      console.log(this.customerData.name)
      this.getCustomerData(customer)
    })
  }
}
</script>

<style>
</style>
