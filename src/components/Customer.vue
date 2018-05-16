<template>
    <tbody v-show="!isEditing">
        <tr>
            <td>{{ customer.customerNumber }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.lastname }}</td>
            <td>{{ customer.adress }} </td>
            <td>{{ customer.postcode }} </td>
            <td>{{ customer.city }} </td>
            <td>{{ customer.phone }} </td>
            <td>{{ customer.email }} </td>
            <td>
                <a v-on:click="showForm"><i class="edit icon" ></i> Edit</a>
                <a v-on:click="deleteCustomer(customer)"><i class="trash alternate icon" ></i> Delete</a>
            </td>
        </tr>
    </tbody>
        <!--visible in edit mode of todo
        <div class="aboveAll" id="editCustomerPage" v-show="isEditing">
            <div class="header">
                Edit Customer
            </div>
            <div class="ui form">
                <div class="two fields">
                    <div class="field">
                        <label>Name</label>
                        <input type='text' v-model="customer.name">
                    </div>
                    <div class="field">
                        <label>Lastname</label>
                        <input type='text' v-model="customer.lastname">
                    </div>
                </div>
                <div class="two fields">
                    <div class="field">
                        <label>Adress</label>
                        <input type='text' v-model="customer.adress">
                    </div>
                    <div class="field">
                        <label>Postcode</label>
                        <input type='text' v-model="customer.postcode">
                    </div>
                </div>
                <div class="field">
                    <label>City</label>
                    <input type='text' v-model="customer.city">
                </div>
                <div class="field">
                    <label>Phone</label>
                    <input type='text' v-model="customer.phone">
                </div>
                <div class="field">
                    <label>E-Mail</label>
                    <input type='text' v-model="customer.email">
                </div>
                <div class="ui two button attached buttons" id="buttonEdit">
                    <button class='ui basic blue button' v-on:click="callUpdateCustomer(customer)">
                        Save
                    </button>
                </div>
                <div class="ui two button attached buttons" id="buttonClose">
                    <button class='ui basic red button' v-on:click="hideForm">
                        Close
                    </button>
                </div>
            </div>
            end of editing view-->

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
