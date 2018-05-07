<template>
    <div class="" id="customerField">
        <div class="ui card" v-show="!isEditing">
            <div class="content">
                <div class="header">
                    {{ customer.name }} {{ customer.lastname }}
                </div>
                <div class="meta">
                    {{ customer.adress }} <br/>
                    {{ customer.postcode }} <br/>
                    {{ customer.city }} <br/>
                    {{ customer.phone }} <br/>
                    {{ customer.email }} <br/>
                    {{ customer.customerNumber }}
                </div>
                <div class="extra content">
                    <a v-on:click="showForm"><i class="edit icon" ></i> Edit</a>
                    <a v-on:click="deleteCustomer(customer)"><i class="trash alternate icon" ></i> Delete</a>
                </div>
            </div>
        </div>
        <!--visible in edit mode of todo-->
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
            <!--end of editing view-->
        </div>
    </div>

</template>

<script type="text/javascript">
import swal from 'sweetalert'
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
      // show alert then -> this.$emit('delete-customer', customer)
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover your Customer data',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$emit('delete-customer', customer)
            swal('Customer has been deleted successfully', {
              icon: 'success'
            })
          }
        })
    }
  }
}
</script>

<style>
</style>
