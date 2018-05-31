<template>
  <div id="customerEditView">
    <router-link to="/"><i class="material-icons">keyboard_backspace</i></router-link>
    <div id="header">
      <h1 class="md-title">Edit Customer</h1>
      <img id="avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="People">
    </div>
    <div id="customerEditForm">
      <form method="post">
        <label for="customerno">Customer-No.*</label>
        <input v-model="customerNumber" id="customerno" type="text" >
        <label for="name">Firstname*</label>
        <input v-model="name" id="name" type="text"/>
        <label for="lastname">Lastname*</label>
        <input v-model="lastname" id="name" type="text"/>
        <label for="adress">Adress</label>
        <input v-model="adress" id="adress" type="text"/>
        <label for="postcode">Postcode</label>
        <input v-model="postcode" id="postcode" type="text"/>
        <label for="city">City</label>
        <input v-model="city" id="city" type="text"/>
        <label for="phone">Phone</label>
        <input v-model="phone" id="phone" type="text"/>
        <label for="email">E-Mail</label>
        <input v-model="email" id="email" type="text"/>
        <md-button id="saveButton" v-on:click="updateCustomer(customer)">Save</md-button>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">
import { bus } from '../main'
import swal from 'sweetalert'
export default {
  data () {
    return {
      customer: {},
      customerNumber: '',
      name: '',
      lastname: '',
      adress: '',
      postcode: '',
      city: '',
      phone: '',
      email: ''
    }
  },
  created: function () {
    bus.$on('updateCustomer', (customerToEdit) => {
      this.id = customerToEdit._id
      this.customer = customerToEdit
      this.customerNumber = customerToEdit.customerNumber
      this.name = customerToEdit.name
      this.lastname = customerToEdit.lastname
      this.adress = customerToEdit.adress
      this.postcode = customerToEdit.postcode
      this.city = customerToEdit.city
      this.phone = customerToEdit.phone
      this.email = customerToEdit.email
    })
  },
  beforeDestroy: function () {
    bus.$off('updateCustomer', this.customer)
  },
  methods: {
    updateCustomer () {
      let newCustomer = {
        name: this.name,
        lastname: this.lastname,
        phone: this.phone,
        email: this.email,
        adress: this.adress,
        city: this.city,
        postcode: this.postcode,
        customerNumber: this.customerNumber
      }
      this.$http.put('https://easycustomer-api.herokuapp.com/api/customer/' + this.id, newCustomer)
        .then(response => {
          console.log('Updated Customer with id: ' + this.id)
          this.$router.push({path: '/'})
        }, response => {
          swal('Customer could not be updated', {icon: 'error'})
        })
    }
  }

}
</script>

<style>
#customerEditView{
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

#avatar{
  max-width: 120px;
  border-radius: 50%;
}

input[type=text] {
    width: 100%;
    padding: 5px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid grey;
}

input[type=text]:focus{
    border: 1px solid #E94B3C;
    outline: none;
}

#saveButton{
    float: right;
    margin: 0;
    margin-top: 1%;
    background-color: #E94B3C;
    color:white;
}
</style>
